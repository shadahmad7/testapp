import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { color } from '../constants/color';

const ProfileInfo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <View>
          <Image
            source={require('../assets/images/user.jpg')}
            style={styles.profileImage}
          />
        </View>

        <View style={styles.editIconBackground}>
          <Image
            source={require('../assets/icons/edit.png')}
            style={styles.editIcon}
          />
        </View>
      </View>
      <Text style={styles.name}>Jina Samons</Text>
      <Text style={styles.points}>6000 Pts</Text>
      <Text style={styles.paragraph}>
        I'm a software engineer and developer who has been in the crypto space
        since 2012. I've seen...
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  imageContainer: {
    position: 'relative',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  editIconBackground: {
    position: 'absolute',
    top: 70,
    right: 0,
    width: 36, // Adjust the width and height for the circular background
    height: 36,
    backgroundColor: '#fff',
    borderRadius: 18, // Half of the width and height to create a circle
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.3,
  },
  editIcon: {
    height: 20, // Adjust the size of the edit icon
    width: 20,
    tintColor: color.darkGrayColor,
  },
  name: {
    fontSize: 18,
    fontWeight: '800',
    marginVertical: 5,
  },
  points: {
    fontSize: 16,
    fontWeight: '500',
    marginVertical: 5,
  },
  paragraph: {
    textAlign: 'center',
    marginHorizontal: 20,
    lineHeight: 20,
  },
});

export default ProfileInfo;
