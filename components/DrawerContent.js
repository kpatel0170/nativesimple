import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native'; // Import the useNavigation hook

// Import the screens you want to add
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';

const DrawerContent = (props) => {

  const listItems = [
    { name: 'Home', screen: HomeScreen },
    { name: 'Settings', screen: SettingsScreen },
  ];

  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        {listItems.map((item) => (
          <TouchableOpacity
            key={item.name}
            style={styles.drawerItem}
          >
            <Text style={styles.drawerItemText}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </DrawerContentScrollView>
      <TouchableOpacity
        style={styles.logoutButton}
      >
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
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
  logoutButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: '#DDD',
  },
  logoutButtonText: {
    fontSize: 16,
    color: 'red',
  },
});

export default DrawerContent;
