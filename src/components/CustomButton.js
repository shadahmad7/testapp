import React from 'react';
import {View, Text, TouchableOpacity,Dimensions, Image} from 'react-native';
import {color} from '../constants/color';
const {height, width} = Dimensions.get('window');

const CustomButton = props => {
  return (
    <TouchableOpacity
    onPress={props.onPress}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: props.color, // Change to your desired background color
        borderRadius: 30,
        width: props?.image ? 170 : width-15,
        marginHorizontal: 5,
        justifyContent: 'center',
        height: 50,
        padding: 5,
      }}>
        {props?.image && (

      <Image
        source={props.image} // Replace with your image source
        style={{
          width: 18,
          tintColor: color.textColor,
          height: 18,
          marginRight: 5,
        }} // Adjust the image size and spacing
      />
        )}
      <Text style={{color: 'white', fontWeight: '500'}}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
