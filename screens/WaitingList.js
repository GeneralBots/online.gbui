import React, { useState, useRef, useEffect } from 'react';
import { 
  Text, 
  TextInput, 
  KeyboardAvoidingView, 
  Platform, 
  View, 
  Image, 
  TouchableOpacity, 
  ActivityIndicator,
  StyleSheet
} from 'react-native';
import { useClerk } from '@clerk/clerk-expo';
import { globalStyles } from '../styles';
import { styled } from 'nativewind';
import Constants from 'expo-constants';

const StyledView = styled(View);
const StyledImage = styled(Image);

const GradientButton = ({ onPress, title, style, textStyle, disabled }) => (
  <TouchableOpacity
    style={[globalStyles.button, style, disabled && globalStyles.disabledButton]}
    onPress={onPress}
    disabled={disabled}
  >
    <Text style={[globalStyles.buttonText, textStyle]}>{title}</Text>
  </TouchableOpacity>
);

const WaitingList = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [selection, setSelection] = useState({ start: 0, end: 0 });
  const { client } = useClerk();
  const emailInputRef = useRef(null);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const focusAndSelectAll = () => {
    emailInputRef.current?.focus();
    setSelection({ start: 0, end: email.length });
  };

  const handleSubmit = async () => {
    if (!validateEmail(email)) {
      setEmailError('Por favor, insira um e-mail válido.');
      return;
    }
    setEmailError('');
    setIsProcessing(true);
    try {
      await client.signUp.create({
        emailAddress: email,
        publicMetadata: {
          clerkKey: Constants.expoConfig.extra.clerkPublishableKey,
        },
      });
      await client.signUp.prepareEmailAddressVerification();
      setIsProcessing(false);
      navigation.replace('EmailConfirmation');
    } catch (error) {
      console.error('Error:', error);
      setIsProcessing(false);
      setEmailError('Ocorreu um erro. Por favor, tente novamente.');
    }
  };

  const handleKeyPress = (event) => {
    if (event.nativeEvent.key === 'Enter') {
      handleSubmit();
    }
  };

  useEffect(() => {
    focusAndSelectAll();
  }, []);

  useEffect(() => {
    if (emailError) {
      focusAndSelectAll();
    }
  }, [emailError]);

  return (
    <KeyboardAvoidingView
      style={globalStyles.contentContainer}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <StyledImage
        source={'./images/form-1-bg-detail.png'}
        style={globalStyles.backgroundArcImage}
      />
      <StyledView style={globalStyles.card}>
        <Text style={globalStyles.title}>Participe da nossa lista de espera</Text>
        <Text style={globalStyles.subtitle}>
          Insira seu e-mail e saiba quando lançaremos
        </Text>

        <TextInput
          ref={emailInputRef}
          style={[globalStyles.input, emailError ? { borderColor: 'red' } : {}]}
          value={email}
          onChangeText={(text) => {
            setEmail(text);
            setEmailError('');
          }}
          onSubmitEditing={handleSubmit}
          onKeyPress={handleKeyPress}
          placeholder="Endereço de e-mail"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="send"
          selection={selection}
          onSelectionChange={(event) => setSelection(event.nativeEvent.selection)}
        />
        {emailError ? (
          <Text style={{ color: 'red', marginBottom: 10, marginLeft: 30 }}>
            {emailError}
          </Text>
        ) : null}
        
        <GradientButton
          onPress={handleSubmit}
          title={isProcessing ? "Processando..." : "Confirmar"}
          disabled={isProcessing}
          style={isProcessing && { opacity: 0.7 }}
        />
        
      </StyledView>
    </KeyboardAvoidingView>
  );
};


export default WaitingList;
