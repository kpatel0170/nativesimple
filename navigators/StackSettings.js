import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

// screens
import { Profile, Tasks } from '../screens';
import ProfileScreen from '../screens/ProfileScreen';
import NavigationBack from '../components/NavigationBack';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const SettingsStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Settings" component={Tasks} />
  </Stack.Navigator>
);

const MainNavigator = () => (
  <Drawer.Navigator drawerPosition="right">
    <Drawer.Screen name="ProfileScreen" component={ProfileScreen}  options={{
        headerLeft: () => <NavigationBack />}} />
    <Drawer.Screen name="Settings" component={SettingsStack} />
  </Drawer.Navigator>
);

export default MainNavigator;
