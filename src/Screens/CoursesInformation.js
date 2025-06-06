import { StyleSheet, Text, View ,TouchableOpacity} from "react-native";  
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Information from "../../Components/Information";
const Stack= createNativeStackNavigator();

export default function CoursesInformation({ navigation }){
    return(
        <View>
            <Information title="Angular Eğitimi"
            imageSource={require('../../assets/indir.png')}
            desc ="Kapsamlı Angular Eğitimi"/>
           
           <Information title="C# Eğitimi"
            imageSource={require('../../assets/indir(1).png')}
            desc ="Kapsamlı C# Eğitimi"/>
           
           <Information title="React JS Eğitimi"
            imageSource={require('../../assets/images.webp')}
            desc ="Kapsamlı React JS Eğitimi"/>
           
           <Information title="C Eğitimi"
            imageSource={require('../../assets/indir(2).png')}
            desc ="Kapsamlı C Eğitimi"/>
           
           <Information title="Bootstrap Eğitimi"
            imageSource={require('../../assets/indir(3).png')}
            desc ="Kapsamlı Bootstrap Eğitimi"/>
           
        </View>
    )
}
const styles = StyleSheet.create({
button: {
    width: "100%",
    height: 50,
    backgroundColor: "#8c7051",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  }
});