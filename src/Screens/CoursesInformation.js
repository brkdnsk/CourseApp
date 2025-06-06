import { StyleSheet, Text, View ,TouchableOpacity , ScrollView,Image} from "react-native";  
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Information from "../../Components/Information";
const Stack= createNativeStackNavigator();

export default function CoursesInformation({ navigation }){
    return(
        <ScrollView>
            <Information title="Angular Eğitimi"
            imageSource={require('../../assets/Angular.jpg')}
            desc ="Kapsamlı Angular Eğitimi"/>
           
           <Information title="C# Eğitimi"
            imageSource={require('../../assets/C#.jpg')}
            desc ="Kapsamlı C# Eğitimi"/>
           
           <Information title="React JS Eğitimi"
            imageSource={require('../../assets/React.jpg')}
            desc ="Kapsamlı React JS Eğitimi"/>
           
           <Information title="C Eğitimi"
            imageSource={require('../../assets/C.jpg')}
            desc ="Kapsamlı C Eğitimi"/>
           
           <Information title="Bootstrap Eğitimi"
            imageSource={require('../../assets/Boot.jpg')}
            desc ="Kapsamlı Bootstrap Eğitimi"/>
           
        </ScrollView>
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