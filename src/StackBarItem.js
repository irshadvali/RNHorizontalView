//https://hackernoon.com/playing-with-react-native-animations-d065e7e97391
import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Easing,
  Dimensions
} from "react-native";
const window = Dimensions.get("window");
// create a component
const DELAY = 100;
class StackBarItem extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View
          style={[
            styles.mainDivStructure,
            { height: this.props.divMainHeight }
          ]}
        >
          <View
            style={[
              styles.unmarkedStructure,
              {
                height: this.props.unmarkedDiv,
                bottom:
                  this.props.absentDiv +
                  this.props.excuseDiv +
                  this.props.presentDiv
              }
            ]}
          />
          <View
            style={[
              styles.excuseStructure,
              {
                height: this.props.excuseDiv,
                bottom: this.props.absentDiv + this.props.presentDiv
              }
            ]}
          />

          <View
            style={[
              styles.absentStructure,
              {
                height: this.props.absentDiv,
                bottom: +this.props.presentDiv
              }
            ]}
          />
          <View
            style={[styles.presentStructure, { height: this.props.presentDiv }]}
          />
        </View>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    width: window.width,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    paddingTop: 30,
    zIndex: 100
  },
  lineBorder: {
    width: "100%",
    height: 2,
    backgroundColor: "#d00000"
  },
  mainDivStructure: {
    width: 100,
    backgroundColor: "#f9f9f9",
    position: "absolute",
    bottom: 0
  },
  absentStructure: {
    width: 100,
    backgroundColor: "#004D40",
    position: "absolute",
    left: 0,
    right: 0
  },
  presentStructure: {
    width: 100,
    backgroundColor: "#4A148C",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0
  },
  excuseStructure: {
    position: "absolute",
    left: 0,
    right: 0,
    backgroundColor: "#FF8F00"
  },
  unmarkedStructure: {
    position: "absolute",
    left: 0,
    right: 0,
    backgroundColor: "#FF5733"
  }
});

//make this component available to the app
export default StackBarItem;

StackBarItem.propTypes = {
  divMainHeight: PropTypes.number,
  unmarkedDiv: PropTypes.number,
  absentDiv: PropTypes.number,
  excuseDiv: PropTypes.number,
  presentDiv: PropTypes.number
};

StackBarItem.defaultProps = {
  divMainHeight: 0,
  unmarkedDiv: 0,
  absentDiv: 0,
  excuseDiv: 0,
  presentDiv: 0
};
