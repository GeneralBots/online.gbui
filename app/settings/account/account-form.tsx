import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';

const accountFormSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Name must be at least 2 characters.",
    })
    .max(30, {
      message: "Name must not be longer than 30 characters.",
    }),
  dob: z.date({
    required_error: "A date of birth is required.",
  }),
  language: z.string({
    required_error: "Please select a language.",
  }),
});

type AccountFormValues = z.infer<typeof accountFormSchema>;

const defaultValues: Partial<AccountFormValues> = {
  name: "Your name",
  dob: new Date("2000-01-01"),
  language: "en",
};

const languages = [
  { label: "English", value: "en" },
  { label: "French", value: "fr" },
  { label: "German", value: "de" },
  { label: "Spanish", value: "es" },
  { label: "Portuguese", value: "pt" },
  { label: "Russian", value: "ru" },
  { label: "Japanese", value: "ja" },
  { label: "Korean", value: "ko" },
  { label: "Chinese", value: "zh" },
];

export function AccountForm() {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const { control, handleSubmit } = useForm<AccountFormValues>({
    resolver: zodResolver(accountFormSchema),
    defaultValues,
  });

  const onSubmit = (data: AccountFormValues) => {
    console.log(JSON.stringify(data, null, 2));
  };

  return (
    <View>
      <Controller
        control={control}
        name="name"
        render={({ field: { onChange, value } }) => (
          <View style={{ marginBottom: 16 }}>
            <Text style={{ fontSize: 16, fontWeight: '500', marginBottom: 4 }}>Name</Text>
            <TextInput
              style={{
                borderWidth: 1,
                borderColor: '#ccc',
                borderRadius: 4,
                padding: 8,
              }}
              onChangeText={onChange}
              value={value}
              placeholder="Your name"
            />
            <Text style={{ fontSize: 14, color: '#666', marginTop: 4 }}>
              This is the name that will be displayed on your profile and in emails.
            </Text>
          </View>
        )}
      />

      <Controller
        control={control}
        name="dob"
        render={({ field: { onChange, value } }) => (
          <View style={{ marginBottom: 16 }}>
            <Text style={{ fontSize: 16, fontWeight: '500', marginBottom: 4 }}>Date of birth</Text>
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderColor: '#ccc',
                borderRadius: 4,
                padding: 8,
              }}
              onPress={() => setShowDatePicker(true)}
            >
              <Text>{value.toDateString()}</Text>
            </TouchableOpacity>
            {showDatePicker && (
              <DateTimePicker
                value={value}
                mode="date"
                display="default"
                onChange={(event, selectedDate) => {
                  setShowDatePicker(false);
                  if (selectedDate) {
                    onChange(selectedDate);
                  }
                }}
              />
            )}
            <Text style={{ fontSize: 14, color: '#666', marginTop: 4 }}>
              Your date of birth is used to calculate your age.
            </Text>
          </View>
        )}
      />

      <Controller
        control={control}
        name="language"
        render={({ field: { onChange, value } }) => (
          <View style={{ marginBottom: 16 }}>
            <Text style={{ fontSize: 16, fontWeight: '500', marginBottom: 4 }}>Language</Text>
            <Picker
              selectedValue={value}
              onValueChange={onChange}
              style={{ height: 50, width: '100%' }}
            >
              {languages.map((language) => (
                <Picker.Item key={language.value} label={language.label} value={language.value} />
              ))}
            </Picker>
            <Text style={{ fontSize: 14, color: '#666', marginTop: 4 }}>
              This is the language that will be used in the dashboard.
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
        <Text style={{ color: 'white', fontWeight: '500' }}>Update account</Text>
      </TouchableOpacity>
    </View>
  );
}
