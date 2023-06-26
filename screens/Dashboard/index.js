import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";

export function Dashboard () {
  return (
    <View style={{ flex: 1, backgroundColor: "#ddd" }}>
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
            source={require("../../assets/favicon.png")}
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
            Dashboard
          </Text>
        </View>
        <Image
          source={require("../../assets/favicon.png")}
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
          source={require("../../assets/favicon.png")}
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
              source={require("../../assets/favicon.png")}
              style={{
                width: 60,
                height: 60,
                resizeMode: "contain",
                borderRadius: 60,
              }}
            />
            <Image
              // source={require("../assets/images/icon-81.png")}
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
      {/* three boxes  */}
      <View
        style={{
          flexDirection: "row",
          marginTop: 20,
          justifyContent: "space-between",
          marginHorizontal: 20,
        }}
      >
        {/* 1st box  */}
        <View style={styles.boxContainer}>
          <Image
            source={require("../../assets/favicon.png")}
            style={styles.boxImg}
          />
          <Text style={{ fontSize: 16, marginTop: 5, fontWeight: "600" }}>
            Past Trips
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: "#016fac",
              fontWeight: "600",
              marginTop: 5,
            }}
          >
            18
          </Text>
        </View>
        {/* 2nd box  */}
        <View style={styles.boxContainer}>
          <Image
            source={require("../../assets/favicon.png")}
            style={styles.boxImg}
          />
          <Text style={{ fontSize: 16, marginTop: 5, fontWeight: "600" }}>
            Cancel Trips
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: "#016fac",
              fontWeight: "600",
              marginTop: 5,
            }}
          >
            10
          </Text>
        </View>
        {/* 3rd box  */}
        <View style={styles.boxContainer}>
          <Image
            source={require("../../assets/favicon.png")}
            style={styles.boxImg}
          />
          <Text style={{ fontSize: 16, marginTop: 5, fontWeight: "600" }}>
            Wallet Balance
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "600",
              color: "#016fac",
              marginTop: 5,
            }}
          >
            $20.00
          </Text>
        </View>
      </View>
      <View style={{ flex: 1, justifyContent: "space-between" }}>
        {/* Recent Trip Section  */}
        <View style={{ marginTop: 22, marginHorizontal: 20 }}>
          <Text style={{ fontSize: 20, fontWeight: "600" }}>RECENT TRIP</Text>
          <View
            style={{
              backgroundColor: "white",
              height: 200,
              marginTop: 10,
              borderRadius: 8,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: 20,
                marginTop: 10,
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: "600" }}>
                ID: AB-111-0004
              </Text>
              <Text
                style={{ fontSize: 18, fontWeight: "600", color: "#016fac" }}
              >
                $ 40.00
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: 20,
                marginTop: 10,
              }}
            >
              <Text style={{ fontSize: 14 }}>Industrial Machinery product</Text>
              <Text style={{ fontSize: 14, color: "#56636b" }}>
                Payment Pending
              </Text>
            </View>
            {/* Horizontal Separator  */}
            <View
              style={{ marginTop: 5, borderWidth: 1, borderColor: "#ddd" }}
            ></View>

            <View
              style={{
                marginHorizontal: 20,
                marginTop: 10,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* destination indicator  */}
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={require("../../assets/favicon.png")}
                  style={{
                    resizeMode: "contain",
                    width: 15,
                    height: 15,
                  }}
                />
                <Image
                  source={require("../../assets/favicon.png")}
                  style={{
                    resizeMode: "contain",
                    width: 20,
                    height: 12,
                  }}
                />
                <Image
                  source={require("../../assets/favicon.png")}
                  style={{
                    resizeMode: "contain",
                    width: 15,
                    height: 15,
                  }}
                />
              </View>
              <View style={{ marginLeft: 5 }}>
                <Text numberOfLines={1}>
                  Rajeev Colony, Punjab Bagh, Nereal, Delhi, 10, Pin Code-
                  201332
                </Text>
                <Text numberOfLines={1} style={{ marginTop: 10 }}>
                  Abc Road, Bawana Industrial, Sec-1, Bawana Road, Gandhi Marg
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                marginTop: 30,
                justifyContent: "space-between",
                alignItems: "center",
                borderColor: "#ddd",
                borderTopWidth: 1,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  borderColor: "#ddd",
                  borderRightWidth: 1,
                  paddingHorizontal: 8,
                  paddingVertical: 12,
                }}
              >
                <Image
                  source={require("../../assets/favicon.png")}
                  style={{
                    resizeMode: "contain",
                    width: 20,
                    height: 20,
                  }}
                />
                <Text style={{ marginLeft: 5 }}>Eicher 19FT</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  borderColor: "#ddd",
                  borderRightWidth: 1,
                  paddingHorizontal: 8,
                  paddingVertical: 12,
                }}
              >
                <Image
                  source={require("../../assets/favicon.png")}
                  style={{
                    resizeMode: "contain",
                    width: 20,
                    height: 20,
                  }}
                />
                <Text style={{ marginLeft: 5 }}>410 Km</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingHorizontal: 8,
                  paddingVertical: 12,
                }}
              >
                <Image
                  source={require("../../assets/favicon.png")}
                  style={{
                    resizeMode: "contain",
                    width: 20,
                    height: 20,
                  }}
                />
                <Text style={{ marginLeft: 5 }}>2020-06-10</Text>
                <Image
                  source={require("../../assets/favicon.png")}
                  style={{
                    resizeMode: "contain",
                    width: 20,
                    height: 20,
                    marginLeft: 8,
                  }}
                />
              </View>
            </View>
          </View>
        </View>

        {/* Button  */}
        <TouchableOpacity>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginHorizontal: 20,
              marginBottom: 30,
            }}
          >
            <View
              style={{
                backgroundColor: "#cd2026",
                height: 40,
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 7,
              }}
            >
              <Text style={{ color: "white", fontSize: 16, fontWeight: "600" }}>
                Book A Truck
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  boxContainer: {
    alignItems: "center",
    width: 115,
    height: 110,
    backgroundColor: "white",
    borderRadius: 10,
    elevation: 10,
  },
  boxImg: {
    resizeMode: "contain",
    width: 40,
    height: 40,
  },
});