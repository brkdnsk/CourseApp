import { StyleSheet, Text, View ,TouchableOpacity} from "react-native";  
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack= createNativeStackNavigator();
export default function CoursesInformation(){
    return(
        <View>
                <Text>Kurslarım</Text>
        
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