//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import HomePageGradientColor from "./HomePageGradientColor";
import DataResult from "./utils/DataResult";

// create a component
class BarChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      DataList: DataResult.DataList
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <HomePageGradientColor dataResult={this.state.DataList} />
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
    backgroundColor: "#2c3e50"
  }
});

//make this component available to the app
export default BarChart;
