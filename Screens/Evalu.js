import React, { Component } from 'react'
import {Text, View, TouchableOpacity,}from 'react-native';

const Evalu = ({navigation}) => {
    const quest =[
        {
            questText:<Text> aaaa</Text>,
            answerOptions: [
                {answerText:<Text>ooo</Text> , isCorrect : false},
                {answerText:<Text>iii</Text> , isCorrect : false},
                {answerText:<Text>lll</Text> , isCorrect : false},
                {answerText:<Text>mmm</Text> , isCorrect : true},
            ],
        },
        {
            questText:<Text> bbb </Text>,
            answerOptions: [
                {answerText:<Text>oooooo </Text>, isCorrect : false},
                {answerText:<Text>iiiiiii</Text> , isCorrect : false},
                {answerText:<Text>lllllll</Text> , isCorrect : false},
                {answerText:<Text> mmmmmm </Text> , isCorrect : true},
            ],
        },
    ]
    return (
        <View style={{backgroundColor:'#00ABA9',flex:1,borderWidth:2}}>

        <TouchableOpacity style={{backgroundColor: '#1BE0CE',alignItems: 'center',justifyContent: 'center',width:320, height:50,top:-4,left:40,borderBottomLeftRadius:80,borderBottomRightRadius:80,borderWidth:5}} >
        <Text style={{fontSize:17}}>السؤال :{quest}</Text>
        </TouchableOpacity>

    <View style={{top:30,height:200,backgroundColor:'white',}}>
       <Text style={{fontSize:20,color:'black',opacity:20,right:5}} >{quest[0].questText}
       </Text>
    </View>
    
    {quest[0].answerOptions.map((answerOptions) =>
        <TouchableOpacity   style={{backgroundColor: '#1BE0CE',alignItems: 'center',justifyContent: 'center',width:225,height:60,top:5,left:90,borderRadius:20,borderTopRightRadius:1,borderWidth:5}}>
        {answerOptions.answerText}
        </TouchableOpacity> 
    )} 
    
     </View>
    
    
)
}

export default Evalu ;