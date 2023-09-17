import react from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {ROUTES} from './routes';
import { COLORS, FONTS } from '../utils/thems';

import {Home} from '../screens/Home.screen';
import {Box} from '../screens/BoxAnimation.screen';
import { List } from '../screens/List.screen';

const Tab = createBottomTabNavigator();

export const Navigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: COLORS.colorBlue,
        tabBarInactiveTintColor: COLORS.colorGrey,
        headerTitleStyle: {fontFamily: FONTS.fontFamilyBold},
        tabBarIcon: ({ color, size }) => {
          return null;
        },
      })}>
      <Tab.Screen name={ROUTES.HOME} component={Home} />
      <Tab.Screen name={ROUTES.BOX} component={Box} />
      <Tab.Screen name={ROUTES.LIST} component={List} />
    </Tab.Navigator>
  );
};
