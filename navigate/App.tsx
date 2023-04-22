/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { User } from './components/User';
import { Welcome } from './components/Welcome';





function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  // const Drawer = createDrawerNavigator();
  const BOttomTabNavigator = createBottomTabNavigator();


  return (
    // <View>
    //   <Text>App</Text>
    // </View>
    // <NavigationContainer>
    //   <Drawer.Navigator screenOptions={{
    //     headerStyle: { backgroundColor: "black" },
    //     headerTintColor: "white",
    //     headerTitleStyle: { fontWeight: "bold" },
    //     drawerActiveBackgroundColor: "black",
    //     drawerActiveTintColor: "white",
    //     drawerStyle: { backgroundColor: "skyblue" },
    //   }}>
    //     <Drawer.Screen name={"welcome"} component={Welcome} options={{
    //       drawerLabel: "Welcome Screen",
    //     }} />
    //     <Drawer.Screen name={"user"} component={User} />
    //   </Drawer.Navigator>

    // </NavigationContainer>
    <NavigationContainer>
      <BOttomTabNavigator.Navigator screenOptions={{
        headerStyle: { backgroundColor: "black" },
        headerTintColor: "white",
      }}>
        <BOttomTabNavigator.Screen name="welcome" component={Welcome} options={{

        }} />
        <BOttomTabNavigator.Screen name="user" component={User} />

      </BOttomTabNavigator.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});

export default App;
