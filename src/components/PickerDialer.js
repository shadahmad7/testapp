import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const PickerDialer = () => {
  const [selectedNumber, setSelectedNumber] = useState(null);
  const numbers = Array.from({ length: 20 }, (_, index) => index + 1);

  const handleNumberSelection = (number) => {
    setSelectedNumber(number);
    // You can perform any additional actions with the selected number here.
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
      style={styles.scrollView}
    >
      {numbers.map((number) => (
        <TouchableOpacity
          key={number}
          style={styles.item}
          onPress={() => handleNumberSelection(number)}
        >
          <Text style={styles.text}>{number}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    height: 150,
  },
  container: {
    alignItems: 'center',
  },
  item: {
    width: 100,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  text: {
    fontSize: 18,
  },
});

export default PickerDialer;
