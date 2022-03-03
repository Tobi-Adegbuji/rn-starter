import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
  return (
      <View>
    <ImageDetail title="forest"/>
    <ImageDetail title="beach"/>
    <ImageDetail title="desert"/>
    </View>
  )
}

const styles = StyleSheet.create({

}); 

export default ImageScreen