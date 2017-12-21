//https://hackernoon.com/playing-with-react-native-animations-d065e7e97391
import React, { Component } from "react";
import { View, Text, StyleSheet, Animated, Easing } from "react-native";
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
    var sss = this.state.divBottomHeight + this.state.divMiddleHeight;
    return (
      <View style={styles.container}>
        <View style={[styles.divMain, { height: this.state.divMainHeight }]}>
          <View
            style={[
              styles.topDiv,
              {
                height: this.state.divTopHeight,
                bottom: sss
              }
            ]}
          />
          <View
            style={[
              styles.middleDiv,
              {
                height: this.state.divMiddleHeight,
                bottom: this.state.divBottomHeight
              }
            ]}
          />

          <View
            style={[styles.childDiv, { height: this.state.divBottomHeight }]}
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
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    paddingTop: 30
  },
  lineBorder: {
    width: "100%",
    height: 2,
    backgroundColor: "#d00000"
  },
  divMain: {
    width: 100,
    backgroundColor: "#f9f9f9"
  },
  childDiv: {
    width: 100,
    backgroundColor: "#004D40",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0
  },
  middleDiv: {
    position: "absolute",
    left: 0,
    right: 0,
    backgroundColor: "#FF8F00"
  },
  topDiv: {
    position: "absolute",
    left: 0,
    right: 0,
    backgroundColor: "#FF5733"
  }
});

//make this component available to the app
export default MultiHorizontalView;
