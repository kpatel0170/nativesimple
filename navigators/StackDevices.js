import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// screens
import {Devices, Profile} from '../screens';

// components
import NavigationBack from '../components/NavigationBack';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Devices"
      component={Devices}
      options={{
        headerLeft: () => <NavigationBack />,
        headerTintColor: '#432818',
        headerStyle: { backgroundColor: 'white' },
        title: 'Devices'
      }}
    />
    <Stack.Screen
      name="MultiLevel2"
      component={Profile}
      options={{
        headerLeft: () => <NavigationBack />,
        headerTintColor: '#432818',
        headerStyle: { backgroundColor: '#white' },
        title: 'Multi Level 2'
      }}
    />
  </Stack.Navigator>
);