import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Ionicons, MaterialCommunityIcons, Fontisto, SimpleLineIcons } from '@expo/vector-icons';
import styles from './profileStyle';

export function Profile({ navigation }) {
  const handleBackButton = () => {
    navigation?.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      

      {/* Content */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          {/* Profile Details */}
          <View style={styles.profileDetailsSection}>
            <View style={styles.profileInfoSection}>
              <View style={styles.statisticsContainer}>
                <Text style={styles.statisticsText}>135</Text>
                <Text style={styles.statisticsTitle}>Completed Tasks</Text>
              </View>
              <Image style={styles.profilePhoto} source={{ uri: 'user_photo_url' }} />
              <View style={styles.statisticsContainer}>
                <Text style={styles.statisticsText}>20</Text>
                <Text style={styles.statisticsTitle}>Ongoing Tasks</Text>
              </View>
            </View>
            <View style={styles.profileCenterSection}>
              <Text style={styles.nameText}>John Doe</Text>
              <Text style={styles.designationText}>Software Developer</Text>
              <TouchableOpacity style={styles.editProfileWrapper}>
                <Text style={styles.editProfileText}>Edit Profile</Text>
              </TouchableOpacity>
            </View>
          </View>

          
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
