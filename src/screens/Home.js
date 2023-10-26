import {
  View,
  Text,
  FlatList,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {color} from '../constants/color';
import GamesCard from '../components/GamesCard';
import BottomSheet from '../components/BottomSheet';
const {height, width} = Dimensions.get('window');
export default function Home() {
  const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);

  const toggleBottomSheet = () => {
    setBottomSheetVisible(!isBottomSheetVisible);
  };

  return (
    <View style={[styles.main, {opacity: isBottomSheetVisible ? 0.5 : 1}]} onTouchEnd={toggleBottomSheet}>
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
    
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  headerLabel: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginVertical: 10,
  },
});
