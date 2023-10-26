import React from 'react';
import { View,Dimensions } from 'react-native';
const {height, width} = Dimensions.get('window');

const BarComponent = ({ percentage1, percentage2 }) => {
  // Ensure that the percentages are within a valid range (0 to 100)
  const validPercentage1 = Math.min(100, Math.max(0, percentage1));
  const validPercentage2 = Math.min(100, Math.max(0, percentage2));

  // Calculate the width for each colored section
  const width1 = (validPercentage1 / 100) * width-30;
  const width2 = (validPercentage2 / 100) * width-30;

  return (
    <View style={{ flexDirection: 'row', width: width-30,alignSelf:"center", height: 20,justifyContent:"center", borderRadius: 20 }}>
      <View style={{ backgroundColor: '#fe4190', width: width1, height: 15, borderTopLeftRadius: 20, borderBottomLeftRadius: 20 }} />
      <View style={{ backgroundColor: '#2dabad', width: width2, height: 15, borderTopRightRadius: 20, borderBottomRightRadius: 20 }} />
    </View>
  );
};

export default BarComponent;
