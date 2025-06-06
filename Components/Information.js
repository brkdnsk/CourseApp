import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'

export default function Information({ title,imageSource,desc }) {
  return (
    <View>
        <Image source ={imageSource}/>
      <Text>{title}</Text>
      <Text>{desc}</Text>
      
    </View>
  )
}

const styles = StyleSheet.create({})