//https://hackernoon.com/playing-with-react-native-animations-d065e7e97391
import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet, Animated, Easing } from "react-native";
// create a component
const DELAY = 100;
class MultiHorizontalItem extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.divMain, { height: this.props.divMainHeight }]}>
          <View
            style={[
              styles.topDiv,
              {
                height: this.props.divTopHeight,
                bottom: this.props.divBottomHeight + this.props.divMiddleHeight
              }
            ]}
          />
          <View
            style={[
              styles.middleDiv,
              {
                height: this.props.divMiddleHeight,
                bottom: this.props.divBottomHeight
              }
            ]}
          />

          <View
            style={[styles.childDiv, { height: this.props.divBottomHeight }]}
          />
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
    backgroundColor: "#f9f9f9",
    position: "absolute",
    bottom: 0
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
export default MultiHorizontalItem;

MultiHorizontalItem.propTypes = {
  divMainHeight: PropTypes.number,
  divTopHeight: PropTypes.number,
  divBottomHeight: PropTypes.number,
  divMiddleHeight: PropTypes.number
};

MultiHorizontalItem.defaultProps = {
  divMainHeight: 0,
  divTopHeight: 0,
  divBottomHeight: 0,
  divMiddleHeight: 0
};