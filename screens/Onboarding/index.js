import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
// import { themeColors } from '../theme'
import { useNavigation } from '@react-navigation/native'

export function Onboarding() {
    const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1" style={{backgroundColor: "whitesmoke"}}>
        <View className="flex-1 flex justify-around my-4">
            <Text 
                className="text-[#0d8900] font-bold text-4xl text-center">
                Let's Get Started!
            </Text>
            <View className="flex-row justify-center">
                <Image source={require("../../assets/favicon.png")}
                    style={{width: 350, height: 132}} />
            </View>
            <View className="space-y-4">
                <TouchableOpacity
                    onPress={()=> navigation.navigate('Register')}
                    className="py-3 bg-[#0d8900] mx-7 rounded-xl">
                        <Text 
                            className="text-xl font-bold text-center text-gray-200"
                        >
                            Sign Up
                        </Text>
                </TouchableOpacity>
                <View className="flex-row justify-center">
                    <Text className="text-[#0d8900] font-semibold">Already have an account?</Text>
                    <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
                        <Text className="font-bold text-green-800"> Log In</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </SafeAreaView>
  )
}