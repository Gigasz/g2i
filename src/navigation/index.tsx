import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Routes from './routes';

import InitialScreen from '../screens/InitialScreen';

import { Colors } from '../theme'

const Stack = createStackNavigator();

const stackNavigatorOptions = {
    headerShown: false,
    cardShadowEnabled: false,
    cardOverlayEnabled: false,
    cardStyle: {
      backgroundColor: Colors.EMPTY_SHADE,
    },
};

const Router = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={stackNavigatorOptions}>
        <Stack.Screen name={Routes.INITIAL} component={InitialScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Router;
