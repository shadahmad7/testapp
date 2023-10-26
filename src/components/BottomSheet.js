import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import Modal from 'react-native-modal';
import CustomButton from './CustomButton';
import {color} from '../constants/color';
import PickerDialer from './PickerDialer';

const BottomSheet = props => {
//   const submitPredicition = () => {};

  return (
    <View style={styles.container}>
      <Modal
        isVisible={props.isVisible}
        backdropOpacity={0.5}
        onBackdropPress={props.toggleBottomSheet}
        style={styles.bottomSheet}>
        <View style={styles.modalContainer}>
          {/* header */}
          <Text style={styles.headerText}>Your prediction is under</Text>
          {/* header */}

          {/* entry ticket section */}
          <Text style={styles.entryLabel}>Entry tickets</Text>
          {/* entry ticket section */}
          {/* dialer section */}
          <View>
            <PickerDialer />
          </View>
          {/* dialer section */}

          {/* fees details section */}
          <View
            style={{
              justifyContent: 'space-between',
              paddingHorizontal: 12,
              flexDirection: 'row',
            }}>
            <View>
              <Text style={{fontSize: 14, fontWeight: '300'}}>You can win</Text>
              <Text style={{fontSize: 18, fontWeight: '600', color: '#13ac87'}}>
                $2000
              </Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{fontSize: 14, fontWeight: '400'}}>Total</Text>
              <Image
                source={require('../assets/icons/coin.png')}
                style={{
                  width: 16,
                  marginHorizontal: 5,
                  height: 16,
                }}
              />
              <Text style={{fontSize: 18, fontWeight: '600'}}>5</Text>
            </View>
          </View>
          {/* fees details section */}

          {/* submit button */}
          <View style={{alignSelf: 'center', marginVertical: 20}}>
            <CustomButton
              onPress={props.onClose}
              title="Submit my prediction"
              color={color.primaryButtonColor}
              image={null}
            />
          </View>
          {/* submit button */}
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: 'blue',
    textDecorationLine: 'underline',
  },
  bottomSheet: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  headerText: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
    margin: 10,
  },
  entryLabel: {
    fontSize: 16,
    margin: 10,
  },
  modalContainer: {
    backgroundColor: '#fff',
    padding: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 'auto',
  },
});

export default BottomSheet;
