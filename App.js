import React from 'react';
import { StatusBar, StyleSheet, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';


// import AppStack from './navigators/Stack';
import RootStack from './navigators/RootStack';
import {navigationRef} from './navigators/RootNavigation';

export default function App() {
  return (
    <>
      <PaperProvider>
        <StatusBar barStyle="light-content" />
        {/* <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}> */}
          {/* <NavigationContainer ref={navigationRef}> */}
            <RootStack />
          {/* </NavigationContainer> */}
        {/* </SafeAreaView> */}
      </PaperProvider>
    </>
  );
}

const styles = StyleSheet.create({
  areaContainer: {
    flex: 1,
  },
});