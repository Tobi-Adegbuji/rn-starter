import React from "react"; //All about how different components work together
import { Text, StyleSheet, View } from "react-native"; //Used to show components on device
import { FlatList } from "react-native-gesture-handler";

const ListScreen = () => {
  //Text is a primitive react element
  //React native bundler uses babel to turn jsx (JavaScript XML) into javascript
  //Javascript obj cannot be rendered in jsx

  const list = [
    { name: "Tobi", age: 21 },
    { name: "John", age: 21 },
    { name: "Elizabeth", age: 21 },
    { name: "Sam", age: 21 },
    { name: "Donald", age: 21 },
    { name: "Kane", age: 21 },
    { name: "Abel", age: 21 },
    { name: "Moses", age: 21 },
  ];

  return (
    <View>
      <Text>List Screen</Text>
      <FlatList
        horizontal={false}
        //gets rid of scroll bar
        showsHorizontalScrollIndicator={false}
        keyExtractor={(friend) => friend.name}
        data={list}
        //renaming destructured object
        renderItem={({ item: friend }) => {
          return (
            <Text style={styles.textStyle}>
              {`${friend.name} - Age: ${friend.age}`}
            </Text>
          );
        }}
      />
    </View>
  );
};

//StyleSheet.create is used to style an element.
//classes are defined within it
const styles = StyleSheet.create({
  textStyle: {
    // fontSize: 30,
    marginVertical: 40,
    marginHorizontal: 10,
  },
});

export default ListScreen;
