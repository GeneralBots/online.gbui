import React from 'react';
import { View, Text, Switch, TouchableOpacity } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const items = [
  { id: 'recents', label: 'Recents' },
  { id: 'home', label: 'Home' },
  { id: 'applications', label: 'Applications' },
  { id: 'desktop', label: 'Desktop' },
  { id: 'downloads', label: 'Downloads' },
  { id: 'documents', label: 'Documents' },
];

const displayFormSchema = z.object({
  items: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
});

type DisplayFormValues = z.infer<typeof displayFormSchema>;

const defaultValues: Partial<DisplayFormValues> = {
  items: ['recents', 'home'],
};

export function DisplayForm() {
  const { control, handleSubmit } = useForm<DisplayFormValues>({
    resolver: zodResolver(displayFormSchema),
    defaultValues,
  });

  const onSubmit = (data: DisplayFormValues) => {
    console.log(JSON.stringify(data, null, 2));
  };

  return (
    <View>
      <Text style={{ fontSize: 16, fontWeight: '500', marginBottom: 8 }}>Sidebar</Text>
      <Text style={{ fontSize: 14, color: '#666', marginBottom: 16 }}>
        Select the items you want to display in the sidebar.
      </Text>
      {items.map((item) => (
        <Controller
          key={item.id}
          control={control}
          name="items"
          render={({ field }) => (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 12 }}>
              <Switch
                value={field.value?.includes(item.id)}
                onValueChange={(checked) => {
                  const updatedValue = checked
                    ? [...field.value, item.id]
                    : field.value?.filter((value) => value !== item.id);
                  field.onChange(updatedValue);
                }}
              />
              <Text style={{ marginLeft: 8 }}>{item.label}</Text>
            </View>
          )}
        />
      ))}
      <TouchableOpacity
        style={{
          backgroundColor: '#007AFF',
          padding: 12,
          borderRadius: 8,
          alignItems: 'center',
          marginTop: 16,
        }}
        onPress={handleSubmit(onSubmit)}
      >
        <Text style={{ color: 'white', fontWeight: '500' }}>Update display</Text>
      </TouchableOpacity>
    </View>
  );
}
