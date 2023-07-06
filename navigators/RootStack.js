import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import { LoadingIndicator } from '../components/LoadingIndicator';

import { AuthStack } from './AuthStack';
import { AppStack } from './AppStack';

const Stack = createStackNavigator();

export const RootStack = () => {
  const { token, isLoading } = useSelector((state) => state.auth);

  useEffect(() => {
    // You can dispatch any actions here or perform any additional logic when the user or isLoading state changes
  }, [token, isLoading]);

  if (isLoading) {
    return <LoadingIndicator />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      >
        {token ? (
          <Stack.Screen name="App" component={AppStack} />
        ) : (
          <Stack.Screen name="Auth" component={AuthStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
