import React from 'react';
import {Pressable, Text, StyleSheet} from 'react-native';
import {PanGestureHandler} from 'react-native-gesture-handler';

import {ItemData} from '../types/List.types';
import {COLORS} from '../utils/thems';
import Reanimated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const maxSwipe = 80;

type ItemProps = {
  item: ItemData;
};

export const Item = ({item}: ItemProps) => {
  const translateX = useSharedValue(0);

  const onGestureEvent = useAnimatedGestureHandler(
    {
      onActive: event => {
        translateX.value = event.translationX;
      },
      onEnd: event => {
        if (Math.abs(event.translationX) > maxSwipe) {
            translateX.value = withTiming(1000 * Math.sign(event.translationX));
            console.warn('delete logic needed here');
        } else {
            translateX.value = withTiming(0);
        }
      }
    },
    [],
  );
  // runOnJS needed for any js code in gesture event

  const itemStyle = useAnimatedStyle(
    () => ({
      transform: [{translateX: translateX.value}],
    }),
    [],
  );

  return (
    <PanGestureHandler
      activeOffsetX={[-1, 1]}
      activeOffsetY={1000}
      onGestureEvent={onGestureEvent}>
      <Reanimated.View style={[styles.item, itemStyle]}>
        <Text style={[styles.title]}>{item.title}</Text>
      </Reanimated.View>
    </PanGestureHandler>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderColor: COLORS.colorGrey,
    borderWidth: 1,
  },
  title: {
    fontSize: 24,
  },
});
