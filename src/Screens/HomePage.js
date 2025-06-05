import { StyleSheet, Text, View ,TouchableOpacity} from "react-native";  
import React from 'react';

export default function HomePage(){
    return(
        <View>
                <Text>Kurslarım</Text>
        <TouchableOpacity style={styles.button} onPress={HomePage}>
                <Text style={styles.buttonText}>Detaylar</Text>
        </TouchableOpacity>
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