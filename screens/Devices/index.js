import React from 'react';
import { Button, View, Text } from 'react-native';

export function Devices({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Devices Screen</Text>
    <Button onPress={() => navigation.goBack()} title="Go back home" />
  </View>
  );
}