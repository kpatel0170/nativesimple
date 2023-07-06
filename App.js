import React from "react";
import { StatusBar, StyleSheet } from "react-native";
import { Provider } from "react-redux";
import {store} from "./app/store";
import {RootStack} from "./navigators/RootStack";
import { AuthProvider } from "./context";

export default function App() {
  return (
    <>
      <Provider store={store}>
      <StatusBar barStyle="dark-content" />
          <AuthProvider>
          <RootStack />
          </AuthProvider>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  areaContainer: {
    flex: 1,
  },
});
