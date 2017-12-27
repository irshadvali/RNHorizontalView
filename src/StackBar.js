//https://hackernoon.com/playing-with-react-native-animations-d065e7e97391
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Easing,
  Dimensions
} from "react-native";
import StackBarItem from "./StackBarItem";
const window = Dimensions.get("window");
// create a component
const DELAY = 100;
class StackBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      absentDiv: 0,
      excuseDiv: 0,
      unmarkedDiv: 0,
      divTopBottom: 0,
      presentDiv: 0,
      divMainHeight: 0
    };
    //  this._listYear = this._listYearMonth.bind();
  }

  componentWillMount() {
    this.setState({
      divMainHeight: 320,
      presentDiv: 40,
      absentDiv: 100,
      excuseDiv: 75,
      unmarkedDiv: 50
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
        <View style={{ position: "absolute", bottom: 1 }}>
          <StackBarItem
            divMainHeight={this.state.divMainHeight}
            unmarkedDiv={this.state.unmarkedDiv}
            absentDiv={this.state.absentDiv}
            excuseDiv={this.state.excuseDiv}
            presentDiv={this.state.presentDiv}
          />
        </View>
        <View style={styles.lineBorder} />
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    height: window.height,
    width: window.width,
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#ffffff",
    paddingTop: 30
  },
  lineBorder: {
    width: "100%",
    height: 2,
    bottom: 0,
    backgroundColor: "#d00000",
    position: "absolute"
  }
});

//make this component available to the app
export default StackBar;
