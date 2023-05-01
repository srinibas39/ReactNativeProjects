/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Text
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AllExpense } from './screens/AllExpense';
import { ManagingExpense } from './screens/ManagingExpense';
import { RecentExpense } from './screens/RecentExpense';
import Icon from 'react-native-vector-icons/Ionicons';
import { IconButton } from './components/icon/iconButton';

type SectionProps = PropsWithChildren<{
  title: string;
}>;




function App(): JSX.Element {
  const Stack = createStackNavigator();
  const BottomTab = createBottomTabNavigator()
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };


  const BottomTabNavigator = () => {

   
    return <BottomTab.Navigator screenOptions={({ navigation }) => ({
      headerStyle: { backgroundColor: "#020617" },
      headerTintColor: "#22c55e",
      tabBarStyle: {
        backgroundColor: "#020617",
      },
      tabBarActiveTintColor: "#22c55e",
      headerRight: () => <IconButton name="add" color={"#22c55e"} size={24}
        onPress={() => navigation.navigate("Managing Expense")} style={styles.icon} />
    })}>
      <BottomTab.Screen name={"All Expense"} component={AllExpense} options={
        {

          tabBarIcon: ({ color, size }) => <Icon name="list" color={color} size={size} />

        }
      } />
      <BottomTab.Screen name={"Recent Expense"} component={RecentExpense} options={
        {
          tabBarIcon: ({ color, size }) => <Icon name="pie-chart" color={color} size={size} />

        }
      } />
    </BottomTab.Navigator>
  }

  return (
    // <SafeAreaView style={backgroundStyle}>
    //   <StatusBar
    //     barStyle={isDarkMode ? 'light-content' : 'dark-content'}
    //     backgroundColor={backgroundStyle.backgroundColor}
    //   />
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={"Main Screen"} component={BottomTabNavigator} options={
          {
            headerShown: false,
          }
        } />
        <Stack.Screen name={"Managing Expense"} component={ManagingExpense} />
      </Stack.Navigator>
    </NavigationContainer>


    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  icon: {
    marginRight: 16
  }
});

export default App;
