import React from 'react';

import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {HomeScreen, DetailsScreen} from './screens';

const HomeStack = createNativeStackNavigator();
const DetailsStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStackScreen = ({navigation}) => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#fa8072',
        },
        headerTintColor: '#E8E8E8',
        headerTitleStyle: {
          fontWeight: '900',
        },
      }}>
      <HomeStack.Screen
        name="home"
        component={HomeScreen}
        options={{
          title: 'overview',
          headerLeft: () => (
            <Ionicons.Button
              name="ios-menu"
              size={25}
              backgroundColor="#fa8072"
              onPress={() => {
                navigation.openDrawer();
              }}
            />
          ),
        }}
      />
    </HomeStack.Navigator>
  );
};
const DetailsStackScreen = ({navigation}) => {
  return (
    <DetailsStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#fa8072',
        },
        headerTintColor: '#E8E8E8',
        headerTitleStyle: {
          fontWeight: '900',
        },
      }}>
      <DetailsStack.Screen
        name="details"
        component={DetailsScreen}
        options={{
          headerLeft: () => (
            <Ionicons.Button
              name="ios-menu"
              size={25}
              backgroundColor="#fa8072"
              onPress={() => {
                navigation.openDrawer();
              }}
            />
          ),
        }}
      />
    </DetailsStack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      {/* <StatusBar barStyle="light-content" /> */}
      <Drawer.Navigator
        screenOptions={{
          drawerType: 'slide',
          headerShown: false,
        }}
        initialRouteName="home">
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="Details" component={DetailsStackScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
