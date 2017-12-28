//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import StackBar from "./StackBar";
const width = Dimensions.get("window").width;
import DataResult from "./utils/DataResult";
// create a component
class StackView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      DataList: DataResult.StackList
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <StackBar dataResult={this.state.DataList} />
        <View style={styles.subCon}>
          <Text
            style={{
              color: "#fff"
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
  subCon: {
    height: 50,
    width: "100%",
    backgroundColor: "#01579B",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center"
  }
});

//make this component available to the app
export default StackView;
