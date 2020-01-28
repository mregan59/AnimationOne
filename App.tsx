import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Screen1 } from './Screens/Screen1';
import { Screen2 } from './Screens/Screen2';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

const stackNavigator = createSharedElementStackNavigator(
    createStackNavigator,
    {
        Screen1: Screen1,
        Screen2: Screen2,
    },
    {
        initialRouteName: 'Screen1',
    }
);

export default createAppContainer(stackNavigator);
