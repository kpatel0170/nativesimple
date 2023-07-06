import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector, useDispatch } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import { reset, login } from "../../features/auth/AuthSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import API from "../../app/api";

export function Login({ navigation }) {
  const dispatch = useDispatch();
  const { user, isLoading, isLoggedIn } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const [visiblePassword, setVisiblePassword] = useState(true);

  useEffect(() => {
    if (isLoggedIn || user) {
      if (isLoggedIn) {
        console.log("user is logged in");
        console.log(user);
      }
    }
  }, [user, isLoggedIn, dispatch]);

  const formInputHandler = (name, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const loginFormHandler = async (event) => {
    event.preventDefault();

    const userData = {
      email,
      password,
    };

    try {
      const response = await API.post("auth/login", userData);
      if (response.data.status === true) {
        await AsyncStorage.setItem("token", response.data.data.token);
        await AsyncStorage.setItem("user", JSON.stringify(response.data.data));
        await AsyncStorage.setItem("isLoggedIn", "true");

        const data = {
          user: response.data.data,
          token: response.data.data.token,
        };

        dispatch(login(data));
        alert("You have successfully logged in!");
      }
      
    } catch (error) {
      console.log(error);
      if (error) {
        alert(error);
      } else {
        alert("Please contact the administrator at katlin@farmsimple.ca!");
      }
    }
  };

  return (
    <ScrollView>
      <View style={{ flex: 1, backgroundColor: "smokewhite" }}>
        <SafeAreaView style={{ flex: 1 }}>
          <View style={{ flexDirection: "row", justifyContent: "start" }}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ padding: 10, borderRadius: 20, marginLeft: 8 }}
            >
              <Ionicons name="arrow-back-outline" size={20} color="black" />
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Image
              source={require("../../assets/favicon.png")}
              style={{ width: 352, height: 132 }}
            />
          </View>
        </SafeAreaView>
        {isLoading && (
          <ActivityIndicator size="large" color="your-loading-color" />
        )}

        <View style={{ padding: 16 }}>
          <Text style={{ color: "gray", fontWeight: "bold", marginLeft: 12 }}>
            Email Address
          </Text>
          <TextInput
            style={{
              padding: 16,
              backgroundColor: "white",
              color: "black",
              borderRadius: 20,
              marginBottom: 8,
            }}
            onChangeText={(text) => formInputHandler("email", text)}
            value={email}
            placeholder="example@email.com"
            keyboardType="email-address"
            editable={true}
          />
          <Text style={{ color: "gray", fontWeight: "bold", marginLeft: 12 }}>
            Password
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "white",
              borderRadius: 20,
              marginBottom: 8,
            }}
          >
            <TextInput
              style={{
                padding: 16,
                backgroundColor: "white",
                color: "black",
                borderRadius: 20,
                flexGrow: 1,
              }}
              onChangeText={(text) => formInputHandler("password", text)}
              value={password}
              placeholder="********"
              editable={true}
              secureTextEntry={visiblePassword}
            />
            <TouchableOpacity
              onPress={() => setVisiblePassword(!visiblePassword)}
              style={{ padding: 10 }}
            >
              <Ionicons
                name={visiblePassword ? "eye-outline" : "eye-off-outline"}
                size={20}
                color="gray"
              />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          style={{
            padding: 16,
            backgroundColor: "#0d8900",
            borderRadius: 20,
            margin: 16,
          }}
          onPress={loginFormHandler}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "white",
              textAlign: "center",
            }}
          >
            Login
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 20,
            color: "gray",
            fontWeight: "bold",
            textAlign: "center",
            paddingTop: 40,
          }}
        >
          Or
        </Text>

        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Text style={{ color: "gray", fontWeight: "bold" }}>
            Don't have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style={{ fontWeight: "bold", color: "green" }}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
