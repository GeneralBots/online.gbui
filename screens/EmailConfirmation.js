import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { useClerk } from '@clerk/clerk-expo';
import { globalStyles } from '../styles';

const EmailConfirmation = ({ navigation }) => {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const { client } = useClerk();
  const inputRefs = useRef([]);

  useEffect(() => {
    // Focus on the first input field when the component mounts
    inputRefs.current[0].focus();
  }, []);

  const handleCodeChange = (index, value) => {
    const cleanedValue = value.replace(/\D/g, '');
    let updatedCode = [...code];

    if (cleanedValue.length > 1) {
      // This is likely a paste event
      if (cleanedValue.length === 6) {
        // If exactly 6 digits, distribute across all boxes starting from the first box
        updatedCode = cleanedValue.split('');
        setCode(updatedCode);
        inputRefs.current[5].focus();
      } else {
        // If different from 6 digits, just put the first char in the current box
        updatedCode[index] = cleanedValue[0] || '';
        setCode(updatedCode);
        if (index < 5 && cleanedValue[0]) {
          inputRefs.current[index + 1].focus();
        }
      }
    } else {
      // Normal single digit input
      updatedCode[index] = cleanedValue;
      setCode(updatedCode);

      if (cleanedValue && index < 5) {
        inputRefs.current[index + 1].focus();
      }
    }

    // Check if all boxes are filled
    if (updatedCode.every((digit) => digit.trim())) {
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    if (code.some((digit) => !digit.trim())) {
      Alert.alert('Error', 'Please enter the complete verification code.');
      return;
    }

    setIsSubmitting(true);
    setError(null);
    try {
      await client.signUp.attemptEmailAddressVerification({ code: code.join('') });
      navigation.replace('Success');
    } catch (error) {
      setError(error.message || 'An error occurred while verifying the code. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resendCode = async () => {
    try {
      await client.signUp.prepareEmailAddressVerification();
      Alert.alert(
        'Sucesso',
        'Um novo código de verificação foi enviado para seu email.'
      );
    } catch (error) {
      Alert.alert(
        'Erro',
        'Não foi possível reenviar o código. Tente novamente mais tarde.'
      );
    }
  };

  return (
    <View style={globalStyles.contentContainer}>
      <View style={globalStyles.card}>
        <Text style={globalStyles.title}>Confirm your email</Text>
        <Text style={globalStyles.subtitle}>
          Enter the verification code sent to your email or paste it in any field.
        </Text>

        <View style={styles.codeInputContainer}>
          {code.map((digit, index) => (
            <TextInput
              key={index}
              style={[
                styles.codeInput,
                index === 5 && styles.lastCodeInput,
                { backgroundColor: digit.trim() ? 'white' : '#f0f0f0' },
              ]}
              value={digit}
              onChangeText={(value) => handleCodeChange(index, value)}
              keyboardType="number-pad"
              maxLength={6}  // Allow pasting up to 6 characters
              ref={(ref) => (inputRefs.current[index] = ref)}
              editable={!isSubmitting}
            />
          ))}
        </View>

        {error && (
          <Text style={[globalStyles.error, styles.errorMessage]}>
            {error}
          </Text>
        )}

        <TouchableOpacity
          style={[
            globalStyles.button,
            isSubmitting && { opacity: 0.7 },
          ]}
          onPress={handleSubmit}
          disabled={isSubmitting}
        >
          <Text style={globalStyles.buttonText}>
            {isSubmitting ? 'Verifying...' : 'Confirm'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={resendCode}
          disabled={isSubmitting}
          style={{ marginTop: 16, color: 'white' }}
        >
          <Text style={[globalStyles.link, isSubmitting && { opacity: 0.7 }]}>
            Didn't receive the code? Click here.
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  codeInputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 16,
  },
  codeInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    width: 50,
    height: 50,
    fontSize: 24,
    textAlign: 'center',
    marginHorizontal: 8,
    padding: 0,
  },
  lastCodeInput: {
    marginRight: 0,
  },
  errorMessage: {
    color: 'red',
    marginLeft: 30,
    marginBottom: 10,
  },
});

export default EmailConfirmation;
