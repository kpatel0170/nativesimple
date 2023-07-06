import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { reset } from '../features/auth/AuthSlice';

// screens
import ProfileScreen from '../screens/ProfileScreen';
import NavigationBack from '../components/NavigationBack';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// Logout button component
const LogoutButton = ({ onPress }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(reset()); // Dispatch the "reset" action to reset the state
    onPress(); // Call the onPress function to navigate to the login screen
  };

  return (
    <Button title="Logout" onPress={handleLogout} />
  );
};


const MainNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="ProfileScreen"
      component={ProfileScreen}
      options={({ navigation }) => ({
        headerLeft: () => <NavigationBack />,
        headerRight: () => <LogoutButton onPress={() => navigation.navigate('Login')} />,
      })}
    />
  </Stack.Navigator>
);

export default MainNavigator;
