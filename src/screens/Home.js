import React, { useState } from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View
} from 'react-native';
import BottomSheet from '../components/BottomSheet';
import GamesCard from '../components/GamesCard';
const {height, width} = Dimensions.get('window');
export default function Home() {
  const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);

  const toggleBottomSheet = () => {
    setBottomSheetVisible(!isBottomSheetVisible);
  };
  const closeBottomSheet = () => {
    setBottomSheetVisible(false);
  };

  return (
    <View
      style={[styles.main, {opacity: isBottomSheetVisible ? 0.5 : 1}]}
      onTouchEnd={isBottomSheetVisible ? closeBottomSheet : null}>
      <Text style={styles.headerLabel}>Today's Games</Text>
      {/* Card Container */}
      <GamesCard openBottomSheet={toggleBottomSheet} />
      {/* Card Container */}
      <BottomSheet
        isVisible={isBottomSheetVisible}
        onClose={toggleBottomSheet}
      />
      {/* Card Container */}
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  headerLabel: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginVertical: 10,
  },
});
