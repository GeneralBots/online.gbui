import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../styles';

const Finalization = () => {
  return (
    <View style={globalStyles.contentContainer}>
      <View style={globalStyles.card}>
        <Text style={globalStyles.title}>
          Finalização
        </Text>
        
        <Text style={globalStyles.subtitle}>
          Um banco digital feito para artistas e profissionais
        </Text>
      </View>
    </View>
  );
};

export default Finalization;