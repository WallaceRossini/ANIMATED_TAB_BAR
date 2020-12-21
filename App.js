import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';

import Journal from './src/pages/Journal';
import Measures from './src/pages/Measures';
import Treatment from './src/pages/Treatment';
import Profile from './src/pages/Profile';
import AddButton from './src/components/AddButton';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBarOptions={{ showLabel: false}}> 
        <Tab.Screen
          name="Journal"
          component={Journal}
          options={{
            tabBarIcon: () => <FontAwesome5 name="book-medical" size={24} color="#CDCCCE" />
          }} />
        <Tab.Screen
          name="Measures"
          component={Measures}
          options={{
            tabBarIcon: () => <FontAwesome5 name="heartbeat" size={24} color="#CDCCCE" />
          }} />
        <Tab.Screen
          name="Add"
          component={() => <AddButton />} 
          options={{
            tabBarIcon: () => <AddButton />
          }} />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: () => <FontAwesome5 name="book-medical" size={24} color="#CDCCCE" />
          }} />
        <Tab.Screen
          name="Treatment"
          component={Treatment}
          options={{
            tabBarIcon: () => <FontAwesome5 name="book-medical" size={24} color="#CDCCCE" />
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}