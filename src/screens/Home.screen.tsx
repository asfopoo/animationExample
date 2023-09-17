import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const Home = () => {
  return (
      <View style={styles.container}>
        <Text>Animations example</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
