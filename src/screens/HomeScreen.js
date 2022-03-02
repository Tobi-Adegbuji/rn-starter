import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const HomeScreen = () => {
  return(
  <View>
  <Text style={styles.text}>Hello World!</Text>
  <Button 
  title="Go to Components Demo"
  onPress={() => console.log("Button Pressed")}
  />
  <TouchableOpacity onPress={() => console.log("List Pressed")}>
    <Text>Go to List Demo</Text>
  </TouchableOpacity>
  </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;

