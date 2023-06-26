import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';

const DrawerContent = ({ navigation }) => {
  const handleDrawerItemPress = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <DrawerContentScrollView>
        <TouchableOpacity
          style={styles.drawerItem}
          onPress={() => handleDrawerItemPress('Home')}
        >
          <Text style={styles.drawerItemText}>Home</Text>
        </TouchableOpacity>
        {/* Add more drawer items here */}
      </DrawerContentScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  drawerItem: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
  },
  drawerItemText: {
    fontSize: 16,
    color: '#333',
  },
});

export default DrawerContent;
