import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles';

const Success = ({ navigation }) => {
  return (
    <View style={globalStyles.contentContainer}>
      <View style={globalStyles.card}>
        <Text style={globalStyles.title}>
          Bem-vindo à comunidade!
        </Text>
        
        <Text style={globalStyles.subtitle}>
          Pois é, agora você faz parte da nossa comunidade de artistas e profissionais criativos
        </Text>

        <TouchableOpacity 
          style={globalStyles.button}
          onPress={() => navigation.replace('Finalization')}
          activeOpacity={0.8}
        >
          <Text style={globalStyles.buttonText}>
            Continuar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Success;