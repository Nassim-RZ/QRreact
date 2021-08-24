import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
  Alert,
} from "react-native";

import * as OpenAnything from "react-native-openanything";


const Coran = ({ navigation }) => {

  return (
    <View>
    <Button title="pdf" onPress={() => OpenAnything.Pdf("http://islamicbook.ws/quran/quran.pdf")}> 
    
    </Button>
   

   
    
    </View>
    
  );
};

export default Coran;













