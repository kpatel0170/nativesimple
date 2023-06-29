import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { View } from "react-native";

export const LoadingIndicator = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size='large' color={'green'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});