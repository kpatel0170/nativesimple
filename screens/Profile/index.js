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
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => handleBackButton('Members')} style={styles.backButton}>
          <Ionicons name="arrow-back-outline" size={25} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
      </View>

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

          {/* Explore Section */}
          <View style={styles.exploreSection}>
            <Text style={styles.exploreHeader}>Explore</Text>
            <View style={styles.exploreContent}>
              <TouchableOpacity style={styles.singleExplore}>
                <Ionicons name="people" size={22} color="#00BCC9" />
                <Text style={styles.exploreText}>Members</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.singleExplore}>
                <MaterialCommunityIcons name="crown" size={22} color="#00BCC9" />
                <Text style={styles.exploreText}>Go Pro</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.singleExplore}>
                <Fontisto name="pie-chart-1" size={22} color="#00BCC9" />
                <Text style={styles.exploreText}>Report</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.singleExplore}>
                <SimpleLineIcons name="settings" size={22} color="#00BCC9" />
                <Text style={styles.exploreText}>Settings</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.singleExplore, { marginRight: 'auto', marginLeft: '7%' }]}
              >
                <MaterialCommunityIcons name="logout" size={22} color="#00BCC9" />
                <Text style={styles.exploreText}>Log out</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
