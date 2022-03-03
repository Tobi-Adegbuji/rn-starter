import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const HomeScreen = ({navigation}) => {

  return(
  <View>
  <Text style={styles.text}>Hello World!</Text>
  <Button 
  title="Go to Components Demo"
  onPress={() => navigation.navigate("Components")}
  />
  <Button onPress={() => navigation.navigate("List")}
  title="Go to List Demo"
  />
  <Button
  onPress={() => navigation.navigate("Image")}
  title="Image Screen"
  />
  </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;

