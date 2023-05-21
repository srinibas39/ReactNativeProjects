import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import { Colors } from './constants/styles';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar, Button } from "react-native"
import { AuthProvider, useAuth } from './store/AuthContext';
import Icon from 'react-native-vector-icons/Ionicons';




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

  const handleLogout = () => {
    logout()
  }
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: 'white',
        contentStyle: { backgroundColor: Colors.primary100 },
        // headerRight: ({ color, size }) => <Icon name="list" size={size} color={color}/>
        headerRight: () => <Button title='logout' onPress={handleLogout} />
      }}

    >
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
    </Stack.Navigator>
  );
}

function Navigation() {
  const { isToken } = useAuth();
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