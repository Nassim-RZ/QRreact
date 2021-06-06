import React from 'react'
import { StyleShiit, Text, View, Image, TouchableOpacity, Alert, Button } from 'react-native'


import Home from './Screens/Home'
import Jeux from './Screens/Jeux'
/*import Jeux from './Screens/Evalu'*/
import Ajout from './Screens/Ajout'
import Paramètre from './Screens/Paramètre'



import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Evalu from './Screens/Evalu'

const Stack = createStackNavigator();
const tab = createBottomTabNavigator();


export default function app() {
  

return (
  
  
    <NavigationContainer >
    
    

      <Stack.Navigator initialRouteName="Home" >
      
       
      <Stack.Screen 
      
       name="الرئيسية"
       component={Home}
       options={{headerTintColor:"white"  ,headerTitleAlign:"center",headerStyle:{backgroundColor:"#1BE0CE",height:80}}}/>

      <Stack.Screen
       name="Jeux" 
       component={Jeux}
       options={{title:"الاسئلة",headerTintColor:"white"  ,headerTitleAlign:"center",headerStyle:{backgroundColor:"#1BE0CE",height:80}}}/>

       

       <Stack.Screen
        name="Ajout"
        component={Ajout}
        options={{title:"اقتراح السؤال",headerTintColor:"white"  ,headerTitleAlign:"center",headerStyle:{backgroundColor:"#1BE0CE",height:80,}}}
        />
    
        <Stack.Screen
        name="Paramètre"
        component={Paramètre}
        options={{title:"الاعدادات",headerTintColor:"white"  ,headerTitleAlign:"center",headerStyle:{backgroundColor:"#1BE0CE",height:80,}}}
        />
        
        

      </Stack.Navigator>
     
    </NavigationContainer>
    
    
);
}








