import React from 'react'
import { View, Text } from 'react-native'
import LandingPage from './Page/LandingPage'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Page/Home';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
      name='Landing'
      component={LandingPage}
      options={{headerShown: false}}/>


      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App