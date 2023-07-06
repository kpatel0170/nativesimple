import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Appearance } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import StackHome from './StackHome';
import StackDevices from './StackDevices';
import StackStats from './StackStats';
import StackSettings from './StackSettings';

const Tab = createBottomTabNavigator();

export default () => {
  const colorScheme = Appearance.getColorScheme();

  const activeColor = '#FFFFFF'; // Replace with your desired active color
  const inactiveColor = '#44ec7f'; // Replace with your desired inactive color
  const tabBarBackgroundColor = '#0d8900'; // Replace with your desired background color
  const tabBarBorderColor = '#FFD700'; // Replace with your desired border color

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveBackgroundColor: tabBarBackgroundColor,
        tabBarActiveTintColor: activeColor,
        tabBarInactiveTintColor: inactiveColor,
        tabBarStyle: {
          backgroundColor: tabBarBackgroundColor,
          borderTopColor: tabBarBorderColor,
        },
        tabBarItemStyle: {
        },
        tabBarIconStyle: {
          marginBottom: -3,
        },
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={StackHome}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name={focused ? 'home' : 'home-outline'}
              size={24}
              color={focused ? activeColor : inactiveColor}
            />
          ),
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name="DevicesTab"
        component={StackDevices}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name={focused ? 'layers' : 'layers-outline'}
              size={24}
              color={focused ? activeColor : inactiveColor}
            />
          ),
          tabBarLabel: 'Devices',
        }}
      />
      <Tab.Screen
        name="StatsTab"
        component={StackStats}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name={focused ? 'chart-line' : 'chart-line-variant'}
              size={24}
              color={focused ? activeColor : inactiveColor}
            />
          ),
          tabBarLabel: 'Dashboard',
        }}
      />
      <Tab.Screen
        name="SettingsTab"
        component={StackSettings}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name={focused ? 'cog' : 'cog-outline'}
              size={24}
              color={focused ? activeColor : inactiveColor}
            />
          ),
          tabBarLabel: 'Settings',
        }}
      />
    </Tab.Navigator>
  );
};
