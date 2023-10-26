import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import {Image} from 'react-native';
import {color} from '../constants/color';
import ProfileInfo from '../components/ProfileInfo';
const {height, width} = Dimensions.get('window');

const Profile = () => {
  return (
    <View style={styles.mainConatainer}>
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

      {/* Profile info */}
      <ProfileInfo />
      {/* Profile info */}

      {/* Logout*/}
      <View style={{flexDirection:"row",marginVertical:15, alignItems:"center", justifyContent:"center"}}>
        <Image
          source={require('../assets/icons/logout.png')}
          style={{
            width: 22,
            marginRight:5,
            height: 22,
            tintColor: color.darkGrayColor,
          }}
        />
        <Text style={{fontSize:16}}>Logout</Text>
      </View>
      {/* Logout*/}
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  mainConatainer: {
    flex: 1,
    margin: 10,
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
