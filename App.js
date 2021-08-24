import React from "react";
import {
  StyleShiit,
  Text,
  View,
} from "react-native";

import Home from "./Screens/Home";
import Ajout from "./Screens/Ajout";
import Coran from "./Screens/Coran";
import JeuxV2 from "./Screens/JeuxV2";
import Paramètre from "./Screens/Paramètre";
import Connecter from "./Screens/Connecter";
import Enregistrer from "./Screens/Enregistrer";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createStackNavigator();
const tab = createBottomTabNavigator();

export default function app() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="الرئيسية"
            component={Home}
            options={{
              headerTintColor: "white",
              headerTitleAlign: "center",
              headerStyle: { backgroundColor: "#1BE0CE", height: 80 },
            }}
          />

          <Stack.Screen
            name="Jeux"
            component={JeuxV2}
            options={{
              title: "الاسئلة",
              headerTintColor: "white",
              headerTitleAlign: "center",
              headerStyle: { backgroundColor: "#1BE0CE", height: 80 },
            }}
          />

          <Stack.Screen
            name="Ajout"
            component={Ajout}
            options={{
              title: "اقتراح السؤال",
              headerTintColor: "white",
              headerTitleAlign: "center",
              headerStyle: { backgroundColor: "#1BE0CE", height: 80 },
            }}
          />

          <Stack.Screen
            name="Paramètre"
            component={Paramètre}
            options={{
              title: "الاعدادات",
              headerTintColor: "white",
              headerTitleAlign: "center",
              headerStyle: { backgroundColor: "#1BE0CE", height: 80 },
            }}
          />

          <Stack.Screen
            name="Coran"
            component={Coran}
            options={{
              title: "القران الكريم",
              headerTintColor: "white",
              headerTitleAlign: "center",
              headerStyle: { backgroundColor: "#1BE0CE", height: 80 },
            }}
          />

          <Stack.Screen
            name="Enregistrer"
            component={Enregistrer}
            options={{
              title: "إنشاء حساب",
              headerTintColor: "white",
              headerTitleAlign: "center",
              headerStyle: { backgroundColor: "#696969", height: 80 },
            }}
          />

          <Stack.Screen
            name="Connecter"
            component={Connecter}
            options={{
              title: "تسجيل الدخول",
              headerTintColor: "white",
              headerTitleAlign: "center",
              headerStyle: { backgroundColor: "#696969", height: 80 },
            }}
          />

          
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}