import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {SplashScreen, SignInScreen, SignUpScreen} from './';

const RootStack = createNativeStackNavigator();

const RootStackScreen = ({navigation}) => {
  return (
    <RootStack.Navigator screenOptions={{headerShown: false}}>
      <RootStack.Screen name="SplashScreen" component={SplashScreen} />
      <RootStack.Screen name="SignInScreen" component={SignInScreen} />
      <RootStack.Screen name="SignUpScreen" component={SignUpScreen} />
    </RootStack.Navigator>
  );
};

export default RootStackScreen;
