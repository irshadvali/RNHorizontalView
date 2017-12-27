//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Easing,
  Dimensions
} from "react-native";
import SingleHorizontalBarStyle from "./SingleHorizontalBarStyle";
import PropTypes from "prop-types";
import ColorList from "./utils/ColorList";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
// create a component
class StackBarItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      childDivHeight: "0%",
      MulliColorListTwo: ColorList.MulliColorListTwo
    };
  }

  render() {
    const animatedStyle = { height: this.animatedValue };
    return (
      <View style={styles.container}>
        <View
          style={[
            styles.mainDivStructure,
            {
              height: this.props.divMainHeight + 50,
              width: 50
            }
          ]}
        >
          <Text
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: this.props.divMainHeight,
              textAlign: "center",
              color: "#fff",
              marginBottom: 5
            }}
          >
            {this.props.divMainHeight}
          </Text>
          <View
            style={[
              styles.unmarkedStructure,
              {
                height: this.props.unmarkedDiv,
                bottom:
                  this.props.absentDiv +
                  this.props.excuseDiv +
                  this.props.presentDiv +
                  6
              }
            ]}
          />
          <View
            style={[
              styles.excuseStructure,
              {
                height: this.props.excuseDiv,
                bottom: this.props.absentDiv + this.props.presentDiv + 4
              }
            ]}
          />

          <View
            style={[
              styles.absentStructure,
              {
                height: this.props.absentDiv,
                bottom: this.props.presentDiv + 2
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
const styles = StyleSheet.create({
  container: {
    height: height,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#272c35"
  },
  lineBorder: {
    width: "100%",
    height: 2,
    backgroundColor: "#d00000"
  },
  mainDivStructure: {
    width: 50,
    backgroundColor: "#272c35",
    position: "absolute",
    bottom: 0
  },
  absentStructure: {
    width: 50,
    backgroundColor: "#FF6366",
    position: "absolute",
    left: 0,
    right: 0
  },
  presentStructure: {
    width: 50,
    backgroundColor: "#35C07C",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0
  },
  excuseStructure: {
    width: 50,
    position: "absolute",
    left: 0,
    right: 0,
    backgroundColor: "#FFC20F"
  },
  unmarkedStructure: {
    width: 50,
    position: "absolute",
    left: 0,
    right: 0,
    backgroundColor: "#384355"
  }
});
