import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const appearanceFormSchema = z.object({
  theme: z.enum(['light', 'dark'], {
    required_error: 'Please select a theme.',
  }),
  font: z.enum(['inter', 'manrope', 'system'], {
    invalid_type_error: 'Select a font',
    required_error: 'Please select a font.',
  }),
});

type AppearanceFormValues = z.infer<typeof appearanceFormSchema>;

const defaultValues: Partial<AppearanceFormValues> = {
  theme: 'light',
};

export function AppearanceForm() {
  const { control, handleSubmit } = useForm<AppearanceFormValues>({
    resolver: zodResolver(appearanceFormSchema),
    defaultValues,
  });

  const onSubmit = (data: AppearanceFormValues) => {
    console.log(JSON.stringify(data, null, 2));
  };

  return (
    <View>
      <View style={{ marginBottom: 16 }}>
        <Text style={{ fontSize: 16, fontWeight: '500', marginBottom: 4 }}>Font</Text>
        <Controller
          control={control}
          name="font"
          render={({ field: { onChange, value } }) => (
            <Picker
              selectedValue={value}
              onValueChange={onChange}
              style={{ height: 50, width: 200 }}
            >
              <Picker.Item label="Inter" value="inter" />
              <Picker.Item label="Manrope" value="manrope" />
              <Picker.Item label="System" value="system" />
            </Picker>
          )}
        />
        <Text style={{ fontSize: 14, color: '#666' }}>
          Set the font you want to use in the dashboard.
        </Text>
      </View>

      <View style={{ marginBottom: 16 }}>
        <Text style={{ fontSize: 16, fontWeight: '500', marginBottom: 4 }}>Theme</Text>
        <Text style={{ fontSize: 14, color: '#666', marginBottom: 8 }}>
          Select the theme for the dashboard.
        </Text>
        <Controller
          control={control}
          name="theme"
          render={({ field: { onChange, value } }) => (
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
              <TouchableOpacity
                style={{
                  padding: 12,
                  backgroundColor: value === 'light' ? '#f0f0f0' : 'transparent',
                  borderRadius: 8,
                }}
                onPress={() => onChange('light')}
              >
                <Text>Light</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  padding: 12,
                  backgroundColor: value === 'dark' ? '#f0f0f0' : 'transparent',
                  borderRadius: 8,
                }}
                onPress={() => onChange('dark')}
              >
                <Text>Dark</Text>
              </TouchableOpacity>
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
        <Text style={{ color: 'white', fontWeight: '500' }}>Update preferences</Text>
      </TouchableOpacity>
    </View>
  );
}
