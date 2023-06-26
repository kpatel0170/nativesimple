import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
// screens
import HomeScreen from "../screens/HomeScreen";
import { Profile, Onboarding, Login, Register } from "../screens";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default () => (
  <Drawer.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: "white" },
      headerTintColor: "black",
      drawerActiveBackgroundColor: "#0d8900",
      drawerActiveTintColor: "white",
      drawerTintColor: "black",
      drawerStyle: { backgroundColor: "white" },
    }}
  >
    <Drawer.Screen
      name="Home"
      component={HomeScreen}
      options={{
        drawerIcon: ({ color, size }) => (
          <Ionicons name="home" color={color} size={size} />
        ),
        drawerLabel: "Home",
      }}
    />
    <Drawer.Screen
      name="Profile"
      component={Profile}
      options={{
        drawerIcon: ({ color, size }) => (
          <Ionicons name="person" color={color} size={size} />
        ),
        drawerLabel: "Profile",
      }}
    />
    <Drawer.Screen
      name="Onboarding"
      component={Onboarding}
      options={{
        drawerIcon: ({ color, size }) => (
          <Ionicons name="at-circle-outline" color={color} size={size} />
        ),
        drawerLabel: "Onboarding",
      }}
    />
        <Drawer.Screen
      name="Login"
      component={Login}
      options={{
        drawerIcon: ({ color, size }) => (
          <Ionicons name="log-in-outline" color={color} size={size} />
        ),
        drawerLabel: "Login",
      }}
    />
      <Drawer.Screen
      name="Register"
      component={Register}
      options={{
        drawerIcon: ({ color, size }) => (
          <Ionicons name="add-circle-outline" color={color} size={size} />
        ),
        drawerLabel: "Register",
      }}
    />

  </Drawer.Navigator>
);
