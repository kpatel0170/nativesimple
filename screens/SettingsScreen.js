import React from "react";
import { Button, View, Text } from "react-native";


function SettingsScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Settings Screen</Text>
        <Button onPress={() => navigation.goBack()} title="Go back home" />
      </View>
    );
  }

export default SettingsScreen;