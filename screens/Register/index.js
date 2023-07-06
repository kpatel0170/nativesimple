import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image, TextInput, ScrollView, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import API from "../../app/api";
import { register } from "../../features/auth/AuthSlice";

export function Register({ navigation }) {
  const dispatch = useDispatch();
  const { isLoading, isRegistered } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });

  const { name, email, password, passwordConfirmation } = formData;
  const [visiblePassword, setVisiblePassword] = useState(true);

  useEffect(() => {
    if(!isLoading && isRegistered){
    console.log("user is registered");
    navigation.navigate("Login");
    }
  }, [isLoading, isRegistered, navigation]);

  const formInputHandler = (name, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const registerFormHandler = async (event) => {
    event.preventDefault();
    const userData = {
      name,
      email,
      password,
      passwordConfirmation,
    };

    try {
      const response = await API.post("auth/register", userData);
        if(response.data.status === true){
            alert("You have successfully registered!");
        }
      dispatch(register());
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
        <SafeAreaView>
          <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ padding: 8, borderRadius: 30, marginLeft: 4 }}
            >
              <Ionicons name="arrow-back-outline" size={20} color="black" />
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Image
              source={require("../../assets/favicon.png")}
              style={{ width: 264, height: 99 }}
            />
          </View>
        </SafeAreaView>

        <View
          style={{
            flex: 1,
            backgroundColor: "smokewhite",
            paddingHorizontal: 8,
            paddingTop: 8,
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
          }}
        >
          {isLoading && <ActivityIndicator size="large" color="your-loading-color" />}

          <View style={{ padding: 16 }}>
            <Text style={{ color: "gray", fontWeight: "bold", marginLeft: 12 }}>Name</Text>
            <TextInput
              style={{
                padding: 16,
                backgroundColor: "white",
                color: "black",
                borderRadius: 20,
                marginBottom: 8,
              }}
              onChangeText={(text) => formInputHandler("name", text)}
              value={name}
              placeholder="John Doe"
              keyboardType="default"
              editable={true}
            />

            <Text style={{ color:"gray", fontWeight: "bold", marginLeft: 12 }}>Email Address</Text>
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

            <Text style={{ color: "gray", fontWeight: "bold", marginLeft: 12 }}>Password</Text>
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

            <Text style={{ color: "gray", fontWeight: "bold", marginLeft: 12 }}>Confirm Password</Text>
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
                onChangeText={(text) => formInputHandler("passwordConfirmation", text)}
                value={passwordConfirmation}
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
            onPress={registerFormHandler}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: "white",
                textAlign: "center",
              }}
            >
              Register
            </Text>
          </TouchableOpacity>

          <Text style={{ fontSize: 20, fontWeight: "bold", color: "gray", textAlign: "center", paddingVertical: 5 }}>
            Or
          </Text>

          <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 7 }}>
            <Text style={{ color: "gray", fontWeight: "bold" }}>Already have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={{ fontWeight: "bold", color: "green" }}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
