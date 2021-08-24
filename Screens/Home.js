import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
  Alert,
  Animated,
  TextInput,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Feather } from '@expo/vector-icons'; 

const Home = ({ navigation }) => {
  return (
    <View
     style={{ 
       backgroundColor: "#00ABA9",
       flex: 1, 
       borderWidth: 2,
       borderBottomWidth:10,
       borderBottomColor:"#1BE0CE",
      }}>
      <Image
        source={{
          uri: "https://i.pinimg.com/originals/67/32/a1/6732a1f5ad60cf677959bdb06a6632eb.gif",
        }}
        style={{ height: 440, width: 517, bottom: 10, right: 40 }}
      />

      <TouchableOpacity
        onPress={() => navigation.navigate("Jeux")}
        style={{
          backgroundColor: "#1BE0CE",
          alignItems: "center",
          justifyContent: "center",
          width: 225,
          height: 60,
          top: 5,
          left: 90,
          borderRadius: 20,
          borderTopRightRadius: 1,
          borderWidth: 5,
        }}
      >
        <Ionicons
          name="ios-game-controller"
          size={24}
          color="black"
          style={{ right: 70, bottom: -13 }}
        />
        <Text style={{ fontSize: 17, top: -12 }}>ابدا اللعب</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Ajout")}
        style={{
          backgroundColor: "#1BE0CE",
          alignItems: "center",
          justifyContent: "center",
          width: 225,
          height: 60,
          top: 25,
          left: 90,
          borderRadius: 20,
          borderTopRightRadius: 1,
          borderWidth: 5,
        }}
      >
        <Entypo
          name="help"
          size={28}
          color="black"
          style={{ right: 70, bottom: -13 }}
        />
        <Text style={{ fontSize: 17, top: -15 }}>اقترح سؤال</Text>
      </TouchableOpacity>

      <TouchableOpacity
      onPress={() => navigation.navigate("Coran")}
        style={{
          backgroundColor: "#1BE0CE",
          alignItems: "center",
          justifyContent: "center",
          width: 225,
          height: 60,
          top: 45,
          left: 90,
          borderRadius: 20,
          borderTopRightRadius: 1,
          borderWidth: 5,
        }}
      >
       <Feather 
          name="book-open"
          size={24}
          color="black"
          style={{ right: 72, bottom: -10 }}
         />
        <Text style={{ fontSize: 17, right: -5, top: -12 }}>
          القران الكريم
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Paramètre")}
        style={{
          backgroundColor: "#1BE0CE",
          alignItems: "center",
          justifyContent: "center",
          width: 225,
          height: 60,
          top: 65,
          left: 90,
          borderRadius: 20,
          borderTopRightRadius: 1,
          borderWidth: 5,
        }}
      >
        <Entypo
          name="cog"
          size={28}
          color="black"
          style={{ right: 70, bottom: -10 }}
        />
        <Text style={{ fontSize: 17, bottom: 15 }}>الاعدادات</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;