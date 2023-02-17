import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { HomeScreen } from '../screens/HomeScreen';
import { SettingsScreen } from '../screens/SettingsScreen';


const Tab = createMaterialBottomTabNavigator();

export const MaterialBottomTabsNavigator = () => {
return (
    <Tab.Navigator>
        <Tab.Screen name="HomeScreen" component={HomeScreen} />
        <Tab.Screen name="SettingsScreen" component={SettingsScreen} />
    </Tab.Navigator>
    );
}
