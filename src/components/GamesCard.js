import {View, Image, Dimensions, Text, StyleSheet} from 'react-native';
import React from 'react';
const {height, width} = Dimensions.get('window');
import {color} from '../constants/color';
import CustomButton from './CustomButton';
import BarComponent from './BarComponent';

export default function GamesCard({ openBottomSheet }) {
  return (
    <View>
      <View style={styles.card}>
        {/* Top Container */}
        <View style={styles.topRowContainer}>
          {/* Top Row */}
          <View style={styles.topRow}>
            <View style={styles.topLabel}>
              <Text
                style={{
                  color: color.textColor2,
                  fontSize: 16,
                  fontWeight: '500',
                }}>
                UNDER OR OVER
              </Text>
              <Image
                source={require('../assets/icons/danger.png')}
                style={{
                  width: 18,
                  marginLeft: 6,
                  height: 18,
                  tintColor: '#fff',
                }}
              />
            </View>
            <View style={styles.topLabel}>
              <Text
                style={{
                  color: color.textColor2,
                  fontWeight: '200',
                  fontSize: 16,
                }}>
                Starting in
              </Text>
              <Image
                source={require('../assets/icons/clock.png')}
                style={{
                  width: 18,
                  marginHorizontal: 8,
                  height: 18,
                  tintColor: color.textColor2,
                }}
              />
              <Text style={{color: color.textColor2, fontSize: 17}}>
                03:23:12
              </Text>
            </View>
          </View>
          {/* Top Row */}
          {/* Bottom Row */}
          <View style={styles.bottomRow}>
            <Text style={{color: color.textColor2, fontSize: 18}}>
              Bitcoin price will be under
            </Text>
            <Text style={{color: color.textColor, fontSize: 18}}>
              <Text style={{fontWeight: 'bold'}}>$24,624</Text> at 7 a ET on
              22nd Jan'21
            </Text>
          </View>

          <Image
            source={require('../assets/icons/bitcoin.png')}
            style={{
              position: 'absolute',
              width: 80,
              right: 0,
              overflow: 'hidden',
              bottom: -30,

              marginHorizontal: 8,
              height: 80,
              opacity: 0.5,
            }}
          />
          {/* Bottom Row */}
        </View>

        {/* Top Container */}

        {/* prize details section */}
        <View style={styles.prizeSection}>
          <View style={{alignItems:"flex-start"}}>
            <Text style={styles.prizeLabel}>Prize Pool</Text>
            <Text style={styles.prizeReward}>$12,000</Text>
          </View>
          <View style={{alignItems:"center"}}>
            <Text style={styles.prizeLabel}>Under</Text>
            <Text style={styles.prizeReward}>3.25x</Text>
          </View>
          <View style={{alignItems:"center"}}>
            <Text style={styles.prizeLabel}>Over</Text>
            <Text style={styles.prizeReward}>1.25x</Text>
          </View>
          <View >
            <Text style={styles.prizeLabel}>Entry Fees</Text>
            <View style={{justifyContent: 'flex-end', flexDirection: 'row'}}>
              <Text style={styles.prizeReward}>5</Text>
              <Image
                source={require('../assets/icons/coin.png')}
                style={{
                  width: 20,
                  marginLeft: 4,
                  height: 20,
                }}
              />
            </View>
          </View>
        </View>
        {/* prize details section */}
        {/* prediction section */}

        <View style={styles.predictionSection}>
          <Text style={{fontWeight: '600', marginVertical: 5, fontSize: 20}}>
            What's your prediction?
          </Text>
          <View style={styles.predictionButtonSection}>
            <CustomButton
            onPress={openBottomSheet}
              title="Under"
              color={color.secondaryButtonColor}
              image={require('../assets/icons/down.png')}
            />
            <CustomButton
              onPress={openBottomSheet}
              title="Above"
              color={color.primaryButtonColor}
              image={require('../assets/icons/up.png')}
            />
          </View>
        </View>

        {/* Chart section */}
        <View style={styles.chartSection}>
          {/* top row */}
          <View style={styles.chartSectionTopRow}>
            {/* players label */}
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={require('../assets/icons/user.png')}
                style={{
                  width: 19,
                  marginRight: 5,
                  height: 19,
                  tintColor: color.darkGrayColor,
                }}
              />
              <Text style={{fontSize: 16, fontWeight: '500'}}>355 Players</Text>
            </View>
            {/* players label */}
            {/* view chart label */}
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={require('../assets/icons/chart.png')}
                style={{
                  width: 19,
                  marginRight: 5,
                  height: 19,
                  tintColor: color.darkGrayColor,
                }}
              />
              <Text style={{fontSize: 16, fontWeight: '500'}}>View chart</Text>
            </View>
            {/* view chart label */}
          </View>
          {/* top row */}

          {/* progress bar */}
          <View>
          <BarComponent percentage1={70} percentage2={30} />
          </View>
          {/* progress bar */}

          {/* bottom row */}
          <View style={styles.chartSectionTopRow}>
            {/* players label */}
            <View>
              <Text style={{fontSize: 14, letterSpacing:0.3, fontWeight: '300'}}>
                232 Predicted under
              </Text>
            </View>
            {/* players label */}
            {/* view chart label */}
            <View>
              <Text style={{fontSize: 14, letterSpacing:0.3, fontWeight: '300'}}>
                123 Predicted above
              </Text>
            </View>
            {/* view chart label */}
          </View>
          {/* bottom row */}
        </View>
        {/* Chart section */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerLabel: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  card: {
    borderWidth: 0.5,
  },
  topRowContainer: {
    // paddingHorizontal: 12,
    backgroundColor: color.primaryColor,
    overflow: 'hidden',
  },
  topRow: {
    flexDirection: 'row',
    paddingHorizontal: 14,
    justifyContent: 'space-between',
  },
  bottomRow: {
    margin: 14,
  },
  topLabel: {
    flexDirection: 'row',
    justifyContent: 'flex-start',

    marginVertical: 15,
    alignItems: 'center',
  },
  prizeSection: {
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
  },
  prizeLabel: {
    fontSize: 16,
    letterSpacing: 0.9,
    fontWeight: '400',
    textTransform: 'uppercase',

    color: color.grayColor,
    marginVertical: 8,
  },
  prizeReward: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  predictionSection: {
    margin: 16,
  },
  predictionButtonSection: {
    justifyContent: 'space-between',
    marginHorizontal: 15,
    gap: 10,
    alignSelf: 'center',
    marginVertical: 10,
    flexDirection: 'row',
  },
  chartSection: {
    margin: 15,
  },
  chartSectionTopRow: {
    flexDirection: 'row',
    backgroundColor:"#f7f7f7f",
    paddingHorizontal: 5,
    marginVertical:10,
    justifyContent: 'space-between',
  },
});
