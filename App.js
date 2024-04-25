import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AllBlog from './Page/AllBlog';
import Blog1 from './Page/Blog1';
import DetailPage from './Page/DetailPage';
import MoreRecommentMenu from './Page/MoreRecommentMenu';
import MoreBeanPage from './Page/MoreBeanPage';
import MoreMenuPage from './Page/MoreMenuPage';
import Home from './Page/Home';
import LandingPage from './Page/LandingPage';
import ReviewPage from './Page/ReviewPage';
import Login from './Page/Login';
import Register from './Page/Register';



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
      name='Login'
      component={Login}
      options={{headerShown: false}}/>

      <Stack.Screen
      name='Register'
      component={Register}
      options={{headerShown: false}}/>

      <Stack.Screen
        name="Home"
        component={Home}
        options={{ //title: '',
        headerShown: false,
        //headerTransparent: true,
        //headerTintColor: 'transparent',
        //headerStyle: {backgroundColor: "#8E5431",}//,headerTintColor: '#fff',
        //headerTitleStyle: {fontWeight: 'bold',},
        //headerLeft: () => (
          //<Text style={{ marginLeft: 10, fontWeight: 'bold', fontSize: 10, color: "white"}}>Hi ! Cof hunt , what cof you hunt today !</Text>
       // ),
        //headerBackVisible: false,
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
        headerTitle: 'รายละเอียดร้าน',
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
      name='MoreRecommentMenu'
      component={MoreRecommentMenu}
      options={({ navigation }) => ({
        headerTitle: 'Recomment Menu',
        headerStyle: {backgroundColor: "#8E5431",},headerTintColor: '#fff',
        headerTitleStyle: {fontWeight: 'bold',},
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="angle-left" size={30} style={{ marginLeft: 10, color:"white"}} />
          </TouchableOpacity>
        ),
      })}

      />

      <Stack.Screen 
      name='MoreBeanPage' 
      component={MoreBeanPage}
      options={({ navigation }) => ({
        headerTitle: 'All of Coffee Bean',
        headerStyle: {backgroundColor: "#8E5431",},headerTintColor: '#fff',
        headerTitleStyle: {fontWeight: 'bold',},
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="angle-left" size={30} style={{ marginLeft: 10, color:"white"}} />
          </TouchableOpacity>
        ),
      })}

      />

      <Stack.Screen 
      name='MoreMenuPage' 
      component={MoreMenuPage}
      options={({ navigation }) => ({
        headerTitle: 'All Menu',
        headerStyle: {backgroundColor: "#8E5431",},headerTintColor: '#fff',
        headerTitleStyle: {fontWeight: 'bold',},
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="angle-left" size={30} style={{ marginLeft: 10, color:"white"}} />
          </TouchableOpacity>
        ),
      })}

      />

      <Stack.Screen 
      name='AllBlog' 
      component={AllBlog}
      options={({ navigation }) => ({
        headerTitle: 'Cof Hunter Blog',
        headerStyle: {backgroundColor: "#8E5431",},headerTintColor: '#fff',
        headerTitleStyle: {fontWeight: 'bold',},
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="angle-left" size={30} style={{ marginLeft: 10, color:"white"}} />
          </TouchableOpacity>
        ),
      })}

      />

      <Stack.Screen
      name='Blog1'
      component={Blog1}
      options={({ navigation }) => ({
        headerTitle: '',
        headerStyle: {backgroundColor: "#8E5431",},headerTintColor: '#fff',
        headerTitleStyle: {fontWeight: 'bold',},
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="angle-left" size={30} style={{ marginLeft: 10, color:"white"}} />
          </TouchableOpacity>
        ),
      })}

      />


    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App