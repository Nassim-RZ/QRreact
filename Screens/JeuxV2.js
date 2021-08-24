import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import { Text, View, FlatList,Alert, TouchableOpacity } from "react-native";
//import PDF from 'react-native-pdf';

export default function JeuxV2() {
  const navigation = useNavigation();
  
  const QustionHolder = [
    {
      qustion: " كم عدد سور القرآن الكريم؟",
      proposition: [
        {
          answer: "  114  سورة",
          isCorrect: true,
          
        },
        {
          answer: "115  سورة",
          isCorrect: false,
        },
        {
          answer: "120  سورة",
          isCorrect: false,
        },
        {
          answer: "200  سورة",
          isCorrect: false,
        },
      ],
    },

    {
      qustion: " سورة من القرآن تخلو تمامًا من حرف الراء، وتنتهي كافة آياتها بحرف الدال، فأي سورةٍ تكون؟",
      proposition: [
        {
          answer: "سورة الأعلى",
          isCorrect: false,
        },
        {
          answer: "سورة الإخلاص",
          isCorrect: true,
        },
        {
          answer: "سورة الحج",
          isCorrect: false,
        },
        {
          answer: "سورة الحشر",
          isCorrect: false,
        },
      ],
    },

    {
      qustion: " N = 25  ?",
      proposition: [
        {
          answer: "65",
          isCorrect: false,
        },
        {
          answer: "25",
          isCorrect: true,
        },
        {
          answer: "2",
          isCorrect: false,
        },
        {
          answer: "3",
          isCorrect: false,
        },
      ],
    },

    
  ];

  const [currentQustion, setcurrentQustion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [counter,setCounter] = useState(0);


  function MoveToNextQustion() {
    console.log(QustionHolder.length);
    console.log({ currentQustion });

    if (QustionHolder.length != currentQustion + 1) {
      setcurrentQustion(currentQustion + 1);
    } else {
      navigation.goBack();
      Alert.alert("من بين 20 سؤال، قد اصبت "  );
    }
  }
  return (
    <View
      style={{
        backgroundColor: "#00ABA9",
        flex: 1,
        padding: 5,
        borderWidth: 2 
      }}
    >
    <View style={{ backgroundColor: "#00ABA9", flex: 1, }}>
      <TouchableOpacity
        style={{
          backgroundColor: "#1BE0CE",
          alignItems: "center",
          justifyContent: "center",
          width: 320,
          height: 50,
          top: -6,
          left: 40,
          borderBottomLeftRadius: 80,
          borderBottomRightRadius: 80,borderWidth: 5,
        }}
      >
        <Text style={{ fontSize: 17 }}>المستوى :{currentQustion+1}</Text>
      </TouchableOpacity>
    </View>
      <View
        style={{
          backgroundColor: "white",
          alignItems: "center",
          padding: 65,
          margin: -8,
          marginTop:-70,
          borderWidth:3,
          borderRightWidth:5,
          borderLeftWidth:5
          
        }}
      >
        <Text style={{ fontSize: 20, color: "black", opacity: 20, }}>
        السؤال يقول: {QustionHolder[currentQustion]?.qustion}
        </Text>
      </View>

      <FlatList
        data={QustionHolder[currentQustion]?.proposition}
        keyExtractor={(item) => item.answer}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                alignItems: "center",
                height:85,
                
                
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  if (item.isCorrect) {
                    alert("GOOD JOB , Correct answer ");
                    setCounter(counter + 1);
                    // move to next qustion :
                  } else {
                    alert("Wrong answer ");
                  }
                  MoveToNextQustion();
                }}
                style={{
                  backgroundColor: "white",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 225,
                  height: 60,
                  borderRadius: 20,
                  borderTopRightRadius: 1,
                  borderWidth: 5,
                  marginVertical: 5,
                  top:21.5
                }}
              >
                <Text style={{ fontSize: 17 }}> {item.answer} </Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
      
    </View>
  );
}

// import React, { Component } from "react";
// import {
//   Text,
//   View,
//   Image,
//   TouchableOpacity,
//   Button,
//   Alert,
//   Animated,
//   FlatList,
// } from "react-native";
// import { AntDesign } from "@expo/vector-icons";

// const Jeux = ({ navigation }) => {

//   return (
//     <View style={{ backgroundColor: "#00ABA9", flex: 1, borderWidth: 2 }}>

//       <TouchableOpacity
//         style={{
//           backgroundColor: "#1BE0CE",
//           alignItems: "center",
//           justifyContent: "center",
//           width: 320,
//           height: 50,
//           top: -4,
//           left: 40,
//           borderBottomLeftRadius: 80,
//           borderBottomRightRadius: 80,
//           borderWidth: 5,
//         }}
//       >
//         <Text style={{ fontSize: 17 }}>المستوى :01</Text>
//       </TouchableOpacity>

//       <View style={{ top: 30, height: 200, backgroundColor: "white" }}>
//         <Text style={{ fontSize: 20, color: "black", opacity: 20, right: 5 }}>
//           ما هي هذه السورة؟
//         </Text>
//         <Text style={{ fontSize: 20, color: "blue", opacity: 20, right: 5 }}>
//           بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ (1)
//         </Text>
//         <Text style={{ fontSize: 20, color: "black", opacity: 20, right: 5 }}>
//           الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ (2) الرَّحْمَنِ الرَّحِيمِ (3)
//           مَالِكِ يَوْمِ الدِّينِ (4) إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ
//           (5) اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ (6) صِرَاطَ الَّذِينَ
//           أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا
//           الضَّالِّينَ (7)
//         </Text>
//       </View>

//       <View>
//         <TouchableOpacity
//           style={{
//             backgroundColor: "white",
//             alignItems: "center",
//             justifyContent: "center",
//             width: 225,
//             height: 60,
//             top: 80,
//             left: 90,
//             borderRadius: 20,
//             borderTopRightRadius: 1,
//             borderWidth: 5,
//           }}
//         >
//           <Text style={{ fontSize: 17 }}>سورة الملك</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={{
//             backgroundColor: "white",
//             alignItems: "center",
//             justifyContent: "center",
//             width: 225,
//             height: 60,
//             top: 100,
//             left: 90,
//             borderRadius: 20,
//             borderTopRightRadius: 1,
//             borderWidth: 5,
//           }}
//         >
//           <Text style={{ fontSize: 17 }}>سورة البقرة</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={{
//             backgroundColor: "white",
//             alignItems: "center",
//             justifyContent: "center",
//             width: 225,
//             height: 60,
//             top: 120,
//             left: 90,
//             borderRadius: 20,
//             borderTopRightRadius: 1,
//             borderWidth: 5,
//           }}
//         >
//           <Text style={{ fontSize: 17 }}>سورة الكهف</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={{
//             backgroundColor: "white",
//             alignItems: "center",
//             justifyContent: "center",
//             width: 225,
//             height: 60,
//             top: 140,
//             left: 90,
//             borderRadius: 20,
//             borderTopRightRadius: 1,
//             borderWidth: 5,
//           }}
//         >
//           <Text style={{ fontSize: 17 }}>سورة الفاتحة</Text>
//         </TouchableOpacity>
//       </View>
//       <View style={{ bottom: -68 }}>
//         <TouchableOpacity
//           onPress={() => navigation.navigate("الرئيسية")}
//           style={{
//             width: 320,
//             backgroundColor: "#1BE0CE",
//             top: 163.5,
//             height: 50,
//             borderTopLeftRadius: 80,
//             borderTopRightRadius: 80,
//             borderWidth: 5,
//             left: 40,
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           <AntDesign
//             name="home"
//             size={24}
//             color="black"
//             style={{ right: 115, bottom: -13 }}
//           />
//           <Text
//             style={{
//               fontSize: 17,
//               color: "black",
//               textAlign: "center",
//               top: -10,
//             }}
//           >
//             العودة الى الصفحة الرئيسية
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default JeuxV2;
