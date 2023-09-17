import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';

import { data } from '../utils/List.utils';
import { ItemData } from '../types/List.types';
import { Item } from '../components/Item';

export const List = () => {

  const renderItem = ({item}: {item: ItemData}) => {
    return (
      <Item
        item={item}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatlistStyle}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black'
  },
  flatlistStyle: {
    width: '100%'
  }
});
