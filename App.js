import React from 'react'
import { View, Text ,TouchableOpacity} from 'react-native'
import LandingPage from './Page/LandingPage'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from './Page/Home';
import ReviewPage from './Page/ReviewPage';
import DetailPage from './Page/DetailPage';
<<<<<<< HEAD
import MoreRecommentMenu from './Page/MoreRecommentMenu';
import MoreBeanPage from './Page/MoreBeanPage';
import MoreMenuPage from './Page/MoreMenuPage';
<<<<<<< HEAD
import testapi from './Page/testapi';
=======
>>>>>>> parent of 833a67e (Version1 Complete Front end,no api)
=======
>>>>>>> parent of d824863 (test fetch data to front end)

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
        options={{ title: '', headerStyle: {backgroundColor: "#8E5431",},headerTintColor: '#fff',
        headerTitleStyle: {fontWeight: 'bold',},
        headerLeft: () => (
          <Text style={{ marginLeft: 10, fontWeight: 'bold', fontSize: 20, color: "white" }}>Cof Hunter</Text>
        ),
        headerBackVisible: false,
      }}
      />
      
      <Stack.Screen 
      name='ReviewPage' 
      component={ReviewPage}
      options={({ navigation }) => ({
        headerTitle: 'Review',
        headerStyle: {backgroundColor: "#8E5431",},headerTintColor: '#fff',
        headerTitleStyle: {fontWeight: 'bold',},
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="angle-left" size={20} style={{ marginLeft: 10, color:"white"}} />
          </TouchableOpacity>
        ),
      })}
      />

      <Stack.Screen 
      name='DetailPage' 
      component={DetailPage}
      options={({ navigation }) => ({
        headerTitle: 'รายละเอียด',
        headerStyle: {backgroundColor: "#8E5431",},headerTintColor: '#fff',
        headerTitleStyle: {fontWeight: 'bold',},
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="angle-left" size={20} style={{ marginLeft: 10, color:"white"}} />
          </TouchableOpacity>
        ),
      })}
      />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App