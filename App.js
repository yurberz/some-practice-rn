import React from 'react';

import {StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import MainTabScreen from './screens/MainTabScreen';
import {BookmarkScreen, SettingsScreen, SupportScreen} from './screens';
import CustomDrawer from './screens/CustomDrawer';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/* <StatusBar barStyle="light-content" /> */}
      <Drawer.Navigator
        drawerContent={props => <CustomDrawer {...props} />}
        screenOptions={{
          drawerType: 'front',
          headerShown: false,
        }}
        initialRouteName="home">
        <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
        <Drawer.Screen name="SupportScreen" component={SupportScreen} />
        <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
        <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
