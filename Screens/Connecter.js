import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
  Alert,
  TextInput,
} from "react-native";

import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons';

import { useState,useEffect } from "react/cjs/react.development";


import { MaterialCommunityIcons } from '@expo/vector-icons';


const Connecter = ({ navigation }) => {

  return (
    <View 
     style={{ 
      backgroundColor: "#009999",
      flex: 1, 
      borderWidth: 2,
      borderBottomWidth:10,
      borderBottomColor:"#696969",
     }}> 
    
     <View 
        style={{
          flex:1,
          alignItems: "center",
          
        }}>

        <TextInput
         style={{
         width:370,
         height: 50,
         paddingVertical: 10,
         backgroundColor: "white",
         borderWidth: 2,
         paddingRight: 40,
         paddingLeft: 3,
         fontSize: 16,
         top:100,
         borderRadius:10,
         marginVertical:-10,
         }}
           multiline={true}
           placeholder="البريد الالكتروني:"
          // keyboardType="email-address"
          // onSubmitEditing={() =>this.mdps.focus() }
        />
        <View>
          <MaterialIcons
            name="mail-outline"
            size={24}
            color="black"
            style={{ left: 161, top: 72 }} />
        </View>

        <TextInput
         style={{
         width:370,
         height: 50,
         paddingVertical: 10,
         backgroundColor: "white",
         borderWidth: 2,
         paddingRight: 40,
         paddingLeft: 3,
         fontSize: 16,
         top:100,
         borderRadius:10,
         marginVertical:10,
         }}
           placeholder="كلمة السر:"
           secureTextEntry={true} 
          // ref={(input) => this.mdps = input }
        />
        <View> 
          <Feather
            name="lock"
            size={24}
            color="black"
            style={{ left: 161, top: 48 }} 
          />
        </View>
        


        <TouchableOpacity
        onPress={() => navigation.navigate("Jeux")}
        style={{
          alignItems: "center",
          justifyContent: "center",
          width: 225,
          height: 60,
          paddingVertical: 10,
          backgroundColor: "white",
          borderWidth: 2,
          paddingRight: 40,
          paddingLeft: 3,
          fontSize: 16,
          top:100,
          borderRadius:10,
          marginVertical:20,
          backgroundColor: "#99ffcc"
        }}
      >
        <Entypo name="login" size={24} color="black"style={{right:70,top:15}} />
        <Text style={{ fontSize: 21, bottom:14,left:19,  }}>تسجيل الدخول</Text>
      </TouchableOpacity>
      <Text style={{top:330,}}>----لست مسجل بعد؟ قم بانشاء حساب الان----</Text>
      <TouchableOpacity
          onPress={() => navigation.navigate("Enregistrer")}
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: 150,
            height: 40,
            paddingVertical: 10,
            backgroundColor: "white",
            borderWidth: 2,
            paddingRight: 40,
            paddingLeft: 3,
            fontSize: 16,
            top:50,
            borderRadius:10,
            marginVertical:310,
            backgroundColor: "#99ffcc"
          }}>
        
          <Text style={{left:30,fontSize:18}}>انشاء حساب</Text>

        </TouchableOpacity>
        <MaterialCommunityIcons name="account-edit" size={24} color="black"  style={{right:50,top:-293}} />

     </View>
     
      

    </View>
  );
};

export default Connecter;
