import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Routes from './Routes';
import Home from '../screens/homeScreen';
import {Color, ThemeUtils} from '../utils';

const Stack = createStackNavigator();

const RootNavigator = () => (
  <Stack.Navigator
    initialRouteName={Routes.Home}
    screenOptions={{
      headerShown: true,
      headerStyle: {
        backgroundColor: Color.WHITE,
      },
      headerTitleAlign: 'center',
    }}>
    <Stack.Screen name={Routes.Home} component={Home} />
  </Stack.Navigator>
);

export default RootNavigator;
