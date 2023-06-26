import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
const width = Dimensions.get("window").width - 30;

const ProfileScreen = () => {
  const [isFocused1, setIsFocused1] = useState(false);
  const [isFocused2, setIsFocused2] = useState(false);
  const [isFocused3, setIsFocused3] = useState(false);
  const [isFocused4, setIsFocused4] = useState(false);
  const [isFocused5, setIsFocused5] = useState(false);
  const [isFocused6, setIsFocused6] = useState(false);
  const [isFocused7, setIsFocused7] = useState(false);
  const [isFocused8, setIsFocused8] = useState(false);
  return (
    <View style={style.container}>
      {/* Nav section  */}
      <View
        style={{
          marginTop: 40,
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 22,
        }}
      >
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Image
            style={{
              width: 25,
              height: 25,
              resizeMode: "contain",
            }}
          />
          <Text
            style={{
              marginLeft: 20,
              fontSize: 16,
            }}
          >
            Edit Profile
          </Text>
        </View>
        <Image
          style={{
            width: 25,
            height: 25,
            resizeMode: "contain",
          }}
        />
      </View>
      {/* Hero section  */}
      <View
        style={{
          marginTop: 10,
        }}
      >
        <ImageBackground
          source={require("../assets/favicon.png")}
          style={{
            width: "100%",
            height: 120,
            justifyContent: "center",
          }}
          imageStyle={{ borderBottomLeftRadius: 20 }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 8,
            }}
          >
            <Image
              source={require("../assets/favicon.png")}
              style={{
                width: 60,
                height: 60,
                resizeMode: "contain",
                borderRadius: 60,
              }}
            />
            <Image
              source={require("../assets/favicon.png")}
              style={{
                width: 25,
                height: 25,
                resizeMode: "contain",
                marginTop: -70,
                marginLeft: 30,
              }}
            />
            <Text
              style={{
                color: "#ddd",
                fontSize: 15,
                marginTop: 50,
              }}
            >
              Abhikeet Chatterjee
            </Text>
            <Text
              style={{
                color: "#ddd",
                fontSize: 15,
              }}
            >
              +91 9876543210
            </Text>
          </View>
        </ImageBackground>
      </View>
      <View style={style.subContainer}>
        <View style={style.nameRow}>
          <Image
            source={require("../assets/favicon.png")}
            style={style.img}
            //   style={{ width: 30, height: 30 }}
          />
          <View
            style={{
              // flexDirection: "row",
              borderBottomWidth: 2,
              borderBottomColor: isFocused1 ? "#006eab" : "#ddd",
              width: "39%",
              marginLeft: 20,
            }}
          >
            <TextInput
              style={style.inputBox}
              placeholder="First Name"
              onFocus={() => setIsFocused1(true)}
              onBlur={() => setIsFocused1(false)}
            />
          </View>
          <View
            style={{
              borderBottomWidth: 2,
              borderBottomColor: isFocused2 ? "#006eab" : "#ddd",
              width: "38%",
              marginLeft: 35,
            }}
          >
            <TextInput
              style={style.inputBox}
              placeholder="Last Name"
              onFocus={() => setIsFocused2(true)}
              onBlur={() => setIsFocused2(false)}
            />
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            marginTop: 10,
            alignItems: "center",
          }}
        >
          <Image
            source={require("../assets/favicon.png")}
            style={style.img}
          />
          <View
            style={{
              borderBottomWidth: 2,
              borderBottomColor: isFocused3 ? "#006eab" : "#ddd",
              width: "86%",
              marginLeft: 20,
            }}
          >
            <TextInput
              style={style.inputBox}
              placeholder="Email (Optional)"
              onFocus={() => setIsFocused3(true)}
              onBlur={() => setIsFocused3(false)}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 10,
            alignItems: "center",
          }}
        >
          <Image
            source={require("../assets/favicon.png")}
            style={style.img}
          />
          <View
            style={{
              borderBottomWidth: 2,
              borderBottomColor: isFocused4 ? "#006eab" : "#ddd",
              width: "86%",
              marginLeft: 20,
            }}
          >
            <TextInput
              style={style.inputBox}
              placeholder="Phone Number"
              onFocus={() => setIsFocused4(true)}
              onBlur={() => setIsFocused4(false)}
            />
          </View>
        </View>
        <Text style={style.title}>Address Information</Text>

        <View
          style={{
            flexDirection: "row",
            marginTop: 20,
            alignItems: "center",
          }}
        >
          <Image
            source={require("../assets/favicon.png")}
            style={style.img}
          />
          <View
            style={{
              borderBottomWidth: 2,
              borderBottomColor: isFocused5 ? "#006eab" : "#ddd",
              width: "86%",
              marginLeft: 20,
            }}
          >
            <TextInput
              style={style.inputBox}
              placeholder="Country"
              onFocus={() => setIsFocused5(true)}
              onBlur={() => setIsFocused5(false)}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 10,
            alignItems: "center",
          }}
        >
          <Image
            source={require("../assets/favicon.png")}
            style={style.img}
          />
          <View
            style={{
              borderBottomWidth: 2,
              borderBottomColor: isFocused6 ? "#006eab" : "#ddd",
              width: "86%",
              marginLeft: 20,
            }}
          >
            <TextInput
              style={style.inputBox}
              placeholder="State"
              onFocus={() => setIsFocused6(true)}
              onBlur={() => setIsFocused6(false)}
            />
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            marginTop: 10,
            alignItems: "center",
          }}
        >
          <Image
            source={require("../assets/favicon.png")}
            style={style.img}
          />
          <View
            style={{
              borderBottomWidth: 2,
              borderBottomColor: isFocused7 ? "#006eab" : "#ddd",
              width: "86%",
              marginLeft: 20,
            }}
          >
            <TextInput
              style={style.inputBox}
              placeholder="City"
              onFocus={() => setIsFocused7(true)}
              onBlur={() => setIsFocused7(false)}
            />
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            marginTop: 10,
            alignItems: "center",
          }}
        >
          <Image
            source={require("../assets/favicon.png")}
            style={style.img}
          />
          <View
            style={{
              borderBottomWidth: 2,
              borderBottomColor: isFocused8 ? "#006eab" : "#ddd",
              width: "86%",
              marginLeft: 20,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TextInput
              style={style.inputBox}
              placeholder="Full address"
              onFocus={() => setIsFocused8(true)}
              onBlur={() => setIsFocused8(false)}
            />
            <Image
              source={require("../assets/favicon.png")}
              style={{
                resizeMode: "contain",
                width: 25,
                height: 25,
              }}
            />
          </View>
        </View>
        {/* button  */}
        <View style={{ marginBottom: 20 }}>
          <TouchableOpacity>
            <Text style={style.button}>Save All Changes</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={style.lastText}>Change Password</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    flex: 1,
    marginHorizontal: 22,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    marginTop: 25,
  },
  nameRow: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
  },
  img: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  button: {
    backgroundColor: "#cd2026",
    borderRadius: 4,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    color: "white",
    fontSize: 25,
    fontWeight: "600",
    marginTop: 20,
    paddingVertical: 5,
  },
  lastText: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "600",
    marginTop: 10,
    color: "#006eab",
  },
  inputBox: {
    fontSize: 18,
    color: "#ddd",
  },
  red: {
    color: "#cd2026",
  },
  extraStyle: {
    marginHorizontal: 0,
  },
});
export default ProfileScreen;