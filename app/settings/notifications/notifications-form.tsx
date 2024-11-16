import React from 'react';
import { View, Text, Switch, TouchableOpacity } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const notificationsFormSchema = z.object({
  type: z.enum(['all', 'mentions', 'none'], {
    required_error: 'You need to select a notification type.',
  }),
  mobile: z.boolean().default(false).optional(),
  communication_emails: z.boolean().default(false).optional(),
  social_emails: z.boolean().default(false).optional(),
  marketing_emails: z.boolean().default(false).optional(),
  security_emails: z.boolean(),
});

type NotificationsFormValues = z.infer<typeof notificationsFormSchema>;

const defaultValues: Partial<NotificationsFormValues> = {
  communication_emails: false,
  marketing_emails: false,
  social_emails: true,
  security_emails: true,
};

export function NotificationsForm() {
  const { control, handleSubmit } = useForm<NotificationsFormValues>({
    resolver: zodResolver(notificationsFormSchema),
    defaultValues,
  });

  const onSubmit = (data: NotificationsFormValues) => {
    console.log(JSON.stringify(data, null, 2));
  };

  return (
    <View>
      <View style={{ marginBottom: 16 }}>
        <Text style={{ fontSize: 16, fontWeight: '500', marginBottom: 4 }}>Notify me about...</Text>
        <Controller
          control={control}
          name="type"
          render={({ field: { onChange, value } }) => (
            <View>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: 8,
                }}
                onPress={() => onChange('all')}
              >
                <View
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: 10,
                    borderWidth: 2,
                    borderColor: value === 'all' ? '#007AFF' : '#ccc',
                    marginRight: 8,
                  }}
                />
                <Text>All new messages</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: 8,
                }}
                onPress={() => onChange('mentions')}
              >
                <View
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: 10,
                    borderWidth: 2,
                    borderColor: value === 'mentions' ? '#007AFF' : '#ccc',
                    marginRight: 8,
                  }}
                />
                <Text>Direct messages and mentions</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
                onPress={() => onChange('none')}
              >
                <View
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: 10,
                    borderWidth: 2,
                    borderColor: value === 'none' ? '#007AFF' : '#ccc',
                    marginRight: 8,
                  }}
                />
                <Text>Nothing</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>

      <View style={{ marginBottom: 16 }}>
        <Text style={{ fontSize: 18, fontWeight: '500', marginBottom: 16 }}>Email Notifications</Text>
        <Controller
          control={control}
          name="communication_emails"
          render={            ({ field: { onChange, value } }) => (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
              <View>
                <Text style={{ fontSize: 16, fontWeight: '500' }}>Communication emails</Text>
                <Text style={{ fontSize: 14, color: '#666' }}>Receive emails about your account activity.</Text>
              </View>
              <Switch value={value} onValueChange={onChange} />
            </View>
          )}
        />
        <Controller
          control={control}
          name="marketing_emails"
          render={({ field: { onChange, value } }) => (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
              <View>
                <Text style={{ fontSize: 16, fontWeight: '500' }}>Marketing emails</Text>
                <Text style={{ fontSize: 14, color: '#666' }}>Receive emails about new products, features, and more.</Text>
              </View>
              <Switch value={value} onValueChange={onChange} />
            </View>
          )}
        />
        <Controller
          control={control}
          name="social_emails"
          render={({ field: { onChange, value } }) => (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
              <View>
                <Text style={{ fontSize: 16, fontWeight: '500' }}>Social emails</Text>
                <Text style={{ fontSize: 14, color: '#666' }}>Receive emails for friend requests, follows, and more.</Text>
              </View>
              <Switch value={value} onValueChange={onChange} />
            </View>
          )}
        />
        <Controller
          control={control}
          name="security_emails"
          render={({ field: { value } }) => (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <View>
                <Text style={{ fontSize: 16, fontWeight: '500' }}>Security emails</Text>
                <Text style={{ fontSize: 14, color: '#666' }}>Receive emails about your account activity and security.</Text>
              </View>
              <Switch value={value} disabled />
            </View>
          )}
        />
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: '#007AFF',
          padding: 12,
          borderRadius: 8,
          alignItems: 'center',
        }}
        onPress={handleSubmit(onSubmit)}
      >
        <Text style={{ color: 'white', fontWeight: '500' }}>Update notifications</Text>
      </TouchableOpacity>
    </View>
  );
}
