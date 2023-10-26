import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const PredictionHistoryCard = () => {
  return (
    <View style={styles.card}>
      <Image
        source={require('../assets/icons/reward.png')}
        style={{
          width: 44,
          height: 44,
          position: 'absolute',
          top: -20,
          right: '50%',
          left: '50%',
        }}
      />
      {/* First Row */}

      <View style={styles.innerCard}>
        <View style={styles.containerRow}>
          <Text style={styles.label}>Under or Over</Text>
          <View style={styles.row}>
            <View style={[styles.imageContainer, {backgroundColor: '#afe5af'}]}>
              <Image
                source={require('../assets/icons/up-arrow.png')}
                style={styles.image1}
              />
            </View>
            <Text style={styles.percentage}>81%</Text>
          </View>
        </View>

        {/* Second Row */}
        <View style={styles.containerRow}>
          <Text style={styles.label}>Top 5</Text>
          <View style={styles.row}>
            <View style={[styles.imageContainer, {backgroundColor: '#fdbcbc'}]}>
              <Image
                source={require('../assets/icons/down-arrow.png')}
                style={styles.image2}
              />
            </View>
            <Text style={styles.percentage}>-51%</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 0.1,
    marginVertical: 20,
    borderColor: '#000',
    justifyContent: 'space-evenly',
    paddingHorizontal: 10,
    borderRadius: 2,
    padding: 7,
    marginBottom: 10,
  },
  innerCard: {
    marginVertical: 20,
    borderColor: '#000',
    justifyContent: 'space-evenly',
    paddingHorizontal: 10,
    borderRadius: 2,
    flexDirection: 'row',
    marginBottom: 10,
  },
  containerRow: {
    justifyContent: 'flex-start',
    marginBottom: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  label: {
    fontSize: 20,
    fontWeight: '600',
  },
  imageContainer: {
    padding: 10,
    alignItems: 'center',
    marginRight: 10,
    borderRadius: 40,
    marginVertical: 10,
  },
  image1: {
    width: 28,
    height: 28,
    tintColor: '#48c547',
  },
  image2: {
    width: 28,
    height: 28,
    tintColor: '#f73232',
  },
  percentage: {
    fontSize: 30,
    color: '#000',
    fontWeight: '700',
  },
});

export default PredictionHistoryCard;
