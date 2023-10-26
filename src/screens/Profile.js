import React, { useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import BadgesCard from '../components/BadgesCard';
import PredictionHistoryCard from '../components/PredictionHistoryCard';
import ProfileInfo from '../components/ProfileInfo';
import { color } from '../constants/color';

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState('Games Played');

  return (
    <View style={styles2.container}>
      <TouchableOpacity
        style={[styles2.tab, activeTab === 'Games Played' && styles2.activeTab]}
        onPress={() => setActiveTab('Games Played')}>
        <Text
          style={[
            styles2.tabText,
            activeTab === 'Games Played' && styles2.activeTabText,
          ]}>
          Games Played
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles2.tab, activeTab === 'Badges' && styles2.activeTab]}
        onPress={() => setActiveTab('Badges')}>
        <Text
          style={[
            styles2.tabText,
            activeTab === 'Badges' && styles2.activeTabText,
          ]}>
          Badges
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const Profile = () => {
  const badges = [
    {
      id: 1,
      imageUrl:
        'https://template.canva.com/EAD7RXVuXXs/1/0/1600w-vO4Tl4RNeG4.jpg', // Replace with the actual image path
      title: 'First Stripe Winner',
      streaks: '3',
      desc: 'Top 10% of highest spending players in a month',
    },
    {
      id: 2,
      imageUrl:
        'https://template.canva.com/EAD7RXVuXXs/1/0/1600w-vO4Tl4RNeG4.jpg', // Replace with the actual image path
      title: 'Born Winner',
      streaks: null,
      desc: 'Top 10% of highest spending players in a month',
    },
    {
      id: 3,
      imageUrl:
        'https://template.canva.com/EAD7RXVuXXs/1/0/1600w-vO4Tl4RNeG4.jpg', // Replace with the actual image path
      title: 'Trader of the month',
      streaks: null,
      desc: 'Won 7 under-over games in a month',
    },
    {
      id: 4,
      imageUrl:
        'https://template.canva.com/EAD7RXVuXXs/1/0/1600w-vO4Tl4RNeG4.jpg', // Replace with the actual image path
      title: 'Rising Star',
      streaks: null,
      desc: 'Top 10% of highest spending players in a month',
    },
    {
      id: 5,
      imageUrl:
        'https://template.canva.com/EAD7RXVuXXs/1/0/1600w-vO4Tl4RNeG4.jpg', // Replace with the actual image path
      title: 'Jackpot',
      streaks: null,
      desc: 'Top 10% of highest spending players in a month',
    },
    {
      id: 6,
      imageUrl:
        'https://template.canva.com/EAD7RXVuXXs/1/0/1600w-vO4Tl4RNeG4.jpg', // Replace with the actual image path
      title: 'Impossible',
      streaks: null,
      desc: 'Top 10% of highest spending players in a month',
    },
    {
      id: 7,
      imageUrl:
        'https://template.canva.com/EAD7RXVuXXs/1/0/1600w-vO4Tl4RNeG4.jpg', // Replace with the actual image path
      title: 'First Stripe Earned',
      streaks: null,
      desc: 'Top 10% of highest spending players in a month',
    },
  ];

  return (
    <View style={styles.mainConatainer}>
      {/* First Section */}
      <View style={{backgroundColor: '#fff'}}>
        {/* Header row */}
        <View style={styles.headerRow}>
          <Image
            source={require('../assets/icons/helmet.png')}
            style={{
              width: 52,
              transform: [{scaleX: -1}],
              height: 52,
            }}
          />
          <Text style={{fontSize: 18, fontWeight: '500'}}>Profile</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={require('../assets/icons/message.png')}
              style={{
                width: 32,
                height: 32,
                tintColor: color.darkGrayColor,
              }}
            />
            <Text
              style={{
                position: 'absolute',
                fontWeight: '600',
                paddingHorizontal: 8,
                paddingVertical: 2,
                borderRadius: 40,
                backgroundColor: color.primaryColor,
                fontSize: 12,
                top: -8,
                color: '#fff',
                right: -8,
              }}>
              1
            </Text>
          </View>
        </View>
        {/* Header row */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            {/* Profile info */}
            <ProfileInfo />
            {/* Profile info */}

            {/* Logout*/}
            <View
              style={{
                flexDirection: 'row',
                marginVertical: 15,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={require('../assets/icons/logout.png')}
                style={{
                  width: 22,
                  marginRight: 5,
                  height: 22,
                  tintColor: color.darkGrayColor,
                }}
              />
              <Text style={{fontSize: 16}}>Logout</Text>
            </View>
            {/* Logout*/}
            {/* Prediction History Section*/}
            <View style={{marginVertical: 20, marginHorizontal: 10}}>
              <PredictionHistoryCard />
              {/* Prediction History Section */}
            </View>
          </View>
          {/* First Section */}

          {/* second section */}
          <TabComponent />
          <BadgesCard badges={badges} />
          {/* second section */}
        </ScrollView>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  mainConatainer: {
    flex: 1,
    // margin: 10,
  },
  headerRow: {
    flexDirection: 'row',
    marginVertical: 20,
    alignItems: 'center',
    paddingHorizontal: 10,
    marginHorizontal: 10,

    justifyContent: 'space-between',
  },
});

//Styling for Tab

const styles2 = StyleSheet.create({
  container: {
    marginVertical: 10,
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 2,
    borderColor: 'transparent',
  },
  activeTab: {
    borderColor: color.primaryColor,
  },
  tabText: {
    fontSize: 16,
  },
  activeTabText: {
    color: color.primaryColor,
  },
});
