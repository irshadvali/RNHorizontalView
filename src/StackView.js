//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import StackBar from "./StackBar";
const width = Dimensions.get("window").width;
// create a component
class StackView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StackBar />
        <View style={styles.subCon}>
          <Text
            style={{
              flex: 1,
              color: "#fff",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            {" "}
            irshad
          </Text>
        </View>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccc"
  },
  subCon: { height: 50, width: "100%", backgroundColor: "#01579B" }
});

//make this component available to the app
export default StackView;
