import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const Card = ({badgeData}) => {
  return (
    <View style={styles.card}>
      <Image source={{uri: badgeData.imageUrl}} style={styles.image} />
      <View style={styles.badgeInfo}>
        <Text style={styles.title}>
          {badgeData.title}{' '}
          <Text style={styles.streaks}>
            {badgeData?.streaks ? `${badgeData?.streaks}x` : ''}
          </Text>
        </Text>
        <Text style={styles.desc}>{badgeData.desc}</Text>
      </View>
    </View>
  );
};

const BadgesCard = ({badges}) => {
  return (
    <ScrollView>
      {badges.map(badge => (
        <Card key={badge.id} badgeData={badge} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    marginHorizontal: 15,
    borderWidth: 0.3,
    borderRadius: 5,
    borderColor: 'gray',
    backgroundColor: '#fff',
    margin: 10,
    padding: 20,
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 10,
    borderColor: 'yellow',
    borderWidth: 3,
    borderRadius: 40,
  },
  badgeInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
  streaks: {
    fontSize: 14,
    color: '#ffa600',
  },
  desc: {
    fontSize: 14,
    color: 'gray',
    width: 200,
    lineHeight: 22,
    marginVertical: 5,
  },
});

export default BadgesCard;
