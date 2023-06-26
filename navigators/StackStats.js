import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// screens
import {Dashboard} from '../screens';
import NavigationBack from '../components/NavigationBack';
import { DrawerActions } from '@react-navigation/native';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator>
    <Stack.Screen name="Dashboard" component={Dashboard} options={{
        headerLeft: () => <NavigationBack />}}/>
  </Stack.Navigator>
);