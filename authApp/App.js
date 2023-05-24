import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import { Colors } from './constants/styles';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar, Button } from "react-native"
import { AuthProvider, useAuth } from './store/AuthContext';
import Icon from 'react-native-vector-icons/Ionicons';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';





const Stack = createStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: 'white',
        contentStyle: { backgroundColor: Colors.primary100 },
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {

  const { logout } = useAuth();
  const navigation = useNavigation();

  const handleLogout = () => {
    console.log("hello")
    logout()
    // navigation.navigate("Login")
  }
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: 'white',
        contentStyle: { backgroundColor: Colors.primary100 },
        // headerRight: ({ color, size }) => <Icon name="list" size={size} color={color}/>
        headerRight: () => <Button title='logout' onPress={handleLogout} style={{ cursor: "pointer" }} />
      }}

    >
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
    </Stack.Navigator>
  );
}

function Navigation() {
  const { isToken, getTokenFromDB } = useAuth();

  useEffect(() => {
    const checkTokenExist = async () => {
      await getTokenFromDB();
    }
    checkTokenExist()
  }, [])

  return (

    <NavigationContainer>
      {
        isToken ? <AuthenticatedStack /> : <AuthStack />
      }

    </NavigationContainer>
  );
}

const Root = () => {
  return <Navigation />
}

export default function App() {

  return (
    <>
      <AuthProvider>
        <StatusBar style="light" />
        <Root />
      </AuthProvider>
    </>
  );
}