//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import StackBar from "./StackBar";

// create a component
class StackView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StackBar />
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccc"
  }
});

//make this component available to the app
export default StackView;
