import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialBottomTabsNavigator } from './src/navigators/MaterialBottomTabsNavigator';

export const App = () => {
  return (
    <NavigationContainer>
      <MaterialBottomTabsNavigator />
    </NavigationContainer>
  );
}