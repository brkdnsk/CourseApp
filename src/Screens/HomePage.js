import { StyleSheet, Text, View ,TouchableOpacity} from "react-native";  
import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack= createNativeStackNavigator();
export default function HomePage({ navigation }){
    return(
        <View>
                <Text>Kurslarım</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Course')}>
                <Text style={styles.buttonText}>Kurslar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Courses')}>
                <Text style={styles.buttonText}>Kurs Bilgilerim</Text>
        </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
button: {
    width: "100%",
    height: 45,
    backgroundColor: "#8c7051",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  }
});