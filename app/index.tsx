import React from 'react';
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Text,
  Linking,
  StyleSheet,
} from 'react-native';
import { ClerkProvider, ClerkLoaded } from '@clerk/clerk-expo';
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import EmailConfirmation from '../screens/EmailConfirmation';
import Finalization from '../screens/Finalization';
import Success from '../screens/Success';
import WaitingList from '../screens/WaitingList';
import { globalStyles } from '../styles.js';
import { styled } from 'nativewind';
import Constants from 'expo-constants';
import AuthenticationScreen from './authentication';
import ChatScreen from './chat';

const Stack = createStackNavigator();
const StyledView = styled(View);

const examples = [
  { name: "Authentication", href: "authentication" },
  { name: "Dashboard", href: "dashboard" },
  { name: "Chat", href: "chat" },
  { name: "Mail", href: "mail" },
  { name: "Drive", href: "drive" },
  { name: "Tasks", href: "tasks" },
  { name: "Meet", href: "meet" },
];

interface ExamplesNavProps {
  style?: any;
}

const ExamplesNav = ({ style }: ExamplesNavProps) => {
  const navigation = useNavigation();
  return (
    <StyledView style={[styles.examplesNavContainer, style]}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <StyledView style={styles.examplesNavInner}>
          {examples.map((example) => (
            <TouchableOpacity
              key={example.href}
              onPress={() => navigation.navigate(example.href)}
              style={styles.exampleButton}
            >
              <Text style={styles.exampleButtonText}>
                {example.name}
              </Text>
            </TouchableOpacity>
          ))}
        </StyledView>
      </ScrollView>
    </StyledView>
  );
};  

interface ExampleCodeLinkProps {
  pathname: string;
}

const ExampleCodeLink = ({ pathname }: ExampleCodeLinkProps) => {
  const example = examples.find((example) => pathname.startsWith(example.href));

  if (!example?.code) {
    return null;
  }

  return (
    <TouchableOpacity
      onPress={() => Linking.openURL(example.code)}
      style={styles.exampleCodeLink}
    >
      <Text style={styles.exampleCodeLinkText}>View code</Text>
      <Text style={styles.exampleCodeLinkArrow}>→</Text>
    </TouchableOpacity>
  );
};

  const navigatorOptions = {
  headerShown: false,
  cardStyle: { backgroundColor: 'transparent' },
  cardOverlayEnabled: true,
  animation: 'fade',
  presentation: 'transparentModal'
};

const WrapWithExampleCodeLink = (WrappedComponent) => {
  return (props) => {
    const route = useRoute();
    return (
      <View style={{ flex: 1 }}>
        <WrappedComponent {...props} />
        <ExampleCodeLink pathname={route.name} />
      </View>
    );
  };
};

function RootLayout() {
  return (
    <StyledView style={globalStyles.container}>
      <StatusBar style="auto" />
      <ClerkProvider publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}>
        <ClerkLoaded>
         
            <SafeAreaView style={globalStyles.safeArea}>
              <ExamplesNav />
              <Stack.Navigator
                initialRouteName="authentication"
                screenOptions={navigatorOptions}
              >
                <Stack.Screen
                  name="authentication"
                  component={WrapWithExampleCodeLink(AuthenticationScreen)}
                  options={{ title: "Authentication" }}
                />
                <Stack.Screen
                  name="chat"
                  component={WrapWithExampleCodeLink(ChatScreen)}
                  options={{ title: "Chat" }}
                />
                {/* Add placeholder screens for other routes */}
                <Stack.Screen
                  name="dashboard"
                  component={() => <Text>Dashboard Screen (Placeholder)</Text>}
                  options={{ title: "Dashboard" }}
                />
                <Stack.Screen
                  name="mail"
                  component={() => <Text>Mail Screen (Placeholder)</Text>}
                  options={{ title: "Mail" }}
                />
                <Stack.Screen
                  name="drive"
                  component={() => <Text>Drive Screen (Placeholder)</Text>}
                  options={{ title: "Drive" }}
                />
                <Stack.Screen
                  name="tasks"
                  component={() => <Text>Tasks Screen (Placeholder)</Text>}
                  options={{ title: "Tasks" }}
                />
                <Stack.Screen
                  name="meet"
                  component={() => <Text>Meet Screen (Placeholder)</Text>}
                  options={{ title: "Meet" }}
                />
              </Stack.Navigator>
            </SafeAreaView>
         
        </ClerkLoaded>
      </ClerkProvider>
    </StyledView>
  );
}

const styles = StyleSheet.create({
  examplesNavContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 4,
    marginHorizontal: 16,
    marginTop: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  examplesNavInner: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  exampleButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    marginRight: 4,
  },
  exampleButtonActive: {
    backgroundColor: '#f3f4f6',
  },
  exampleButtonText: {
    fontSize: 14,
    color: '#6b7280',
  },
  exampleButtonTextActive: {
    fontWeight: '500',
    color: '#6366f1',
  },
  exampleCodeLink: {
    position: 'absolute',
    right: 0,
    top: 0,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    padding: 8,
  },
  exampleCodeLinkText: {
    fontSize: 14,
    fontWeight: '500',
    marginRight: 4,
    color: '#6366f1',
  },
  exampleCodeLinkArrow: {
    fontSize: 14,
    color: '#6366f1',
  },
});

export default RootLayout;
