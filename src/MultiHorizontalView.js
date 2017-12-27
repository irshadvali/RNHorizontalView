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
import MultiHorizontalItem from "./MultiHorizontalItem";
const window = Dimensions.get("window");
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
      divTopBottom: 0,
      divChildBottomHeight: 0
    };
    //  this._listYear = this._listYearMonth.bind();
  }

  componentWillMount() {
    this.setState({
      divMainHeight: 320,
      divChildBottomHeight: 40,
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
        <View style={{ position: "absolute", bottom: 1 }}>
          <MultiHorizontalItem
            divMainHeight={this.state.divMainHeight}
            divTopHeight={this.state.divTopHeight}
            divBottomHeight={this.state.divBottomHeight}
            divMiddleHeight={this.state.divMiddleHeight}
            divChildBottomHeight={this.state.divChildBottomHeight}
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
export default MultiHorizontalView;
