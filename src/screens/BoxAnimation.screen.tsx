import React from 'react';
import {View, Pressable, StyleSheet} from 'react-native';
import {COLORS} from '../utils/thems';
import Reanimated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const ReanimatedPressable = Reanimated.createAnimatedComponent(Pressable);

export const Box = () => {
  const shared = useSharedValue(0);
  const style = useAnimatedStyle(
    () => ({
      transform: [{translateY: shared.value}],
    }),
    [],
  );

  const handlePress = () => {
    if (shared.value > 50) {
      shared.value = withSpring(shared.value * 0);
    } else {
      shared.value = withTiming(shared.value + 20, {duration: 500});
    }
  };

  return (
    <View style={styles.container}>
      <ReanimatedPressable
        style={[styles.boxContainer, style]}
        onPress={handlePress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxContainer: {
    backgroundColor: COLORS.colorBlue,
    height: 100,
    width: 100,
  },
});
