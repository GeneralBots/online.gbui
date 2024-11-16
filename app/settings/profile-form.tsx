import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const profileFormSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: "Username must be at least 2 characters.",
    })
    .max(30, {
      message: "Username must not be longer than 30 characters.",
    }),
  email: z
    .string({
      required_error: "Please select an email to display.",
    })
    .email(),
  bio: z.string().max(160).min(4),
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

const defaultValues: Partial<ProfileFormValues> = {
  bio: "I own a computer.",
};

export function ProfileForm() {
  const { control, handleSubmit } = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
  });

  const onSubmit = (data: ProfileFormValues) => {
    console.log(JSON.stringify(data, null, 2));
  };

  return (
    <View>
      <Controller
        control={control}
        name="username"
        render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
          <View style={{ marginBottom: 16 }}>
            <Text style={{ fontSize: 16, fontWeight: '500', marginBottom: 4 }}>Username</Text>
            <TextInput
              style={{
                borderWidth: 1,
                borderColor: error ? 'red' : '#ccc',
                borderRadius: 4,
                padding: 8,
              }}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Enter username"
            />
            {error && <Text style={{ color: 'red', fontSize: 12 }}>{error.message}</Text>}
            <Text style={{ fontSize: 14, color: '#666', marginTop: 4 }}>
              This is your public display name. It can be your real name or a pseudonym. You can only change this once every 30 days.
            </Text>
          </View>
        )}
      />

      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
          <View style={{ marginBottom: 16 }}>
            <Text style={{ fontSize: 16, fontWeight: '500', marginBottom: 4 }}>Email</Text>
            <TextInput
              style={{
                borderWidth: 1,
                borderColor: error ? 'red' : '#ccc',
                borderRadius: 4,
                padding: 8,
              }}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Enter email"
              keyboardType="email-address"
            />
            {error && <Text style={{ color: 'red', fontSize: 12 }}>{error.message}</Text>}
            <Text style={{ fontSize: 14, color: '#666', marginTop: 4 }}>
              You can manage verified email addresses in your email settings.
            </Text>
          </View>
        )}
      />

      <Controller
        control={control}
        name="bio"
        render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
          <View style={{ marginBottom: 16 }}>
            <Text style={{ fontSize: 16, fontWeight: '500', marginBottom: 4 }}>Bio</Text>
            <TextInput
              style={{
                borderWidth: 1,
                borderColor: error ? 'red' : '#ccc',
                borderRadius: 4,
                padding: 8,
                height: 100,
                textAlignVertical: 'top',
              }}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Tell us a little bit about yourself"
              multiline
            />
            {error && <Text style={{ color: 'red', fontSize: 12 }}>{error.message}</Text>}
            <Text style={{ fontSize: 14, color: '#666', marginTop: 4 }}>
              You can @mention other users and organizations to link to them.
            </Text>
          </View>
        )}
      />

      <TouchableOpacity
        style={{
          backgroundColor: '#007AFF',
          padding: 12,
          borderRadius: 8,
          alignItems: 'center',
        }}
        onPress={handleSubmit(onSubmit)}
      >
        <Text style={{ color: 'white', fontWeight: '500' }}>Update profile</Text>
      </TouchableOpacity>
    </View>
  );
}
