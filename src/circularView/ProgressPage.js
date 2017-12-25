//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import PercentageCircle from "../circularView/PercentageCircle";

// create a component
class ProgressPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <PercentageCircle radius={35} percent={49} color={"#3498db"} />
        </View>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff"
  }
});

//make this component available to the app
export default ProgressPage;
