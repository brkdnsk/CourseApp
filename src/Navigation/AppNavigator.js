import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomePage from '../Screens/HomePage';
import CoursesScreen from '../Screens/CoursesScreen';
import CourseInformation from '../Screens/CoursesInformation';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Course" component={CoursesScreen} />
        <Stack.Screen name="CoursesInformation" component={CourseInformation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

