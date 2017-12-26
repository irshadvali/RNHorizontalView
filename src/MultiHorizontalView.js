//https://hackernoon.com/playing-with-react-native-animations-d065e7e97391
import React, { Component } from "react";
import { View, Text, StyleSheet, Animated, Easing } from "react-native";
import MultiHorizontalItem from "./MultiHorizontalItem";
// create a component
const DELAY = 100;
class MultiHorizontalView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      divBottomHeight: "0%",
      divMainHeight: 0,
      divMiddleHeight: 0,
      divTopHeight: 0,
      divTopBottom: 0
    };
    //  this._listYear = this._listYearMonth.bind();
  }

  componentWillMount() {
    this.setState({
      divMainHeight: 320,
      divBottomHeight: 100,
      divMiddleHeight: 75,
      divTopHeight: 50
    });
    this.animatedValue = new Animated.Value(0);
  }

  componentDidMount() {
    Animated.timing(this.animatedValue, {
      toValue: this.state.divMainHeight,
      duration: 1000,
      easing: Easing.in
    }).start();
  }

  render() {
    const animatedStyle = { height: this.animatedValue };
    return (
      <View style={styles.container}>
        <MultiHorizontalItem
          divMainHeight={this.state.divMainHeight}
          divTopHeight={this.state.divTopHeight}
          divBottomHeight={this.state.divBottomHeight}
          divMiddleHeight={this.state.divMiddleHeight}
        />
        <View style={styles.lineBorder} />
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
    backgroundColor: "#ffffff",
    paddingTop: 30,
    zIndex:100
  },
  lineBorder: {
    width: "100%",
    height: 2,
    backgroundColor: "#d00000"
  }
});

//make this component available to the app
export default MultiHorizontalView;
