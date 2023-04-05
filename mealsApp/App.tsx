/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,

  StatusBar,

  StyleSheet,

  useColorScheme,

} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { CategoriesScreen } from './screens/categoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MealsScreen } from './screens/MealsScreen';




function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const Stack = createStackNavigator()


  return (
    <>
      <StatusBar barStyle={"light-content"} />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: { backgroundColor: "black" },
          headerTintColor: "#fff",
          cardStyle: { backgroundColor: "#454545" },
          headerTitleAlign: "center"
        }}>
          <Stack.Screen name={"mealsContainer"} options={{
            title: "All Categories",
          }} component={CategoriesScreen} />
          <Stack.Screen name={"mealsOverview"} component={MealsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>


  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1
  }
});

export default App;
