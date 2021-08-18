import React from 'react';

import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {HomeScreen, DetailsScreen} from './screens';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#fa8072',
          },
          headerTintColor: '#E8E8E8',
          headerTitleStyle: {
            fontWeight: '900',
          },
        }}>
        <Stack.Screen
          name="home"
          component={HomeScreen}
          options={{title: 'overview'}}
        />
        <Stack.Screen name="details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
