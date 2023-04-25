/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
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
import { MealsDetailScreen } from './screens/MealsDetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Favoritescreen } from './screens/FavoritesScreen';
import Ionicons from 'react-native-ionicons';
import { FavoriteProvider } from './store/context/favoritesContext';
import { Provider } from 'react-redux';
import { store } from './store/redux/store';






function App(): JSX.Element {

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const Stack = createStackNavigator()
  const Drawer = createDrawerNavigator()

  const DrawerContainer = () => {
    return <Drawer.Navigator screenOptions={{
      headerStyle: { backgroundColor: "black" },
      headerTintColor: "#fff",
      sceneContainerStyle: { backgroundColor: "#454545" },
      drawerStyle: { backgroundColor: "black" },
      drawerInactiveTintColor: "#fff",
      drawerActiveBackgroundColor: "#454545",
      drawerActiveTintColor: "#fff"


    }}>
      <Drawer.Screen name={"All Categories"} component={CategoriesScreen} options={{
        drawerIcon: ({ color, size }) => <Ionicons name="list" color={color} size={size} />

      }} />
      <Drawer.Screen name={"Favorites"} component={Favoritescreen} options={{
        drawerIcon: ({ color, size }) => <Ionicons name="add" color={color} size={size} />
      }} />

    </Drawer.Navigator>
  }


  return (
    <>
      <StatusBar barStyle={"light-content"} />
      <Provider store={store}>
        <FavoriteProvider>
          <NavigationContainer>
            <Stack.Navigator screenOptions={{
              headerStyle: { backgroundColor: "black" },
              headerTintColor: "#fff",
              cardStyle: { backgroundColor: "#454545" },
              headerTitleAlign: "center"
            }}>
              <Stack.Screen name={"mealsContainer"} options={{
                headerShown: false,
              }} component={DrawerContainer} />
              <Stack.Screen name={"mealsOverview"} component={MealsScreen} />
              <Stack.Screen name={"mealsDetail"} component={MealsDetailScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </FavoriteProvider>
      </Provider>
    </>


  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1
  }
});

export default App;
