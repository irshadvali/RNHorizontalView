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
      PresentColor: ColorList.PresentColor,
      AbsentColor: ColorList.AbsentColor,
      ExcuseColor: ColorList.ExcuseColor,
      UnmarkColor: ColorList.UnmarkColor
    };
  }

  render() {
    const animatedStyle = { height: this.animatedValue };
    return (
      <View style={[styles.container, { height: this.props.containerHeight }]}>
        <View
          style={[
            styles.mainDivStructure,
            {
              height:
                this.props.divMainHeight / this.props.parameterMeasure + 50,
              width: 50
            }
          ]}
        >
          <Text
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: this.props.divMainHeight / this.props.parameterMeasure,
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
                height: this.props.unmarkedDiv / this.props.parameterMeasure,
                bottom:
                  this.props.absentDiv / this.props.parameterMeasure +
                  this.props.excuseDiv / this.props.parameterMeasure +
                  this.props.presentDiv / this.props.parameterMeasure +
                  6
              },
              { backgroundColor: this.state.UnmarkColor[this.props.itemIndex] }
            ]}
          />
          <View
            style={[
              styles.excuseStructure,
              {
                height: this.props.excuseDiv / this.props.parameterMeasure,
                bottom:
                  this.props.absentDiv / this.props.parameterMeasure +
                  this.props.presentDiv / this.props.parameterMeasure +
                  4
              },
              { backgroundColor: this.state.ExcuseColor[this.props.itemIndex] }
            ]}
          />

          <View
            style={[
              styles.absentStructure,
              {
                height: this.props.absentDiv / this.props.parameterMeasure,
                bottom: this.props.presentDiv / this.props.parameterMeasure + 2
              },
              { backgroundColor: this.state.AbsentColor[this.props.itemIndex] }
            ]}
          />
          <View
            style={[
              styles.presentStructure,
              {
                backgroundColor: this.state.PresentColor[this.props.itemIndex]
              },
              { height: this.props.presentDiv / this.props.parameterMeasure }
            ]}
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
  presentDiv: PropTypes.number,
  itemIndex: PropTypes.number,
  containerHeight: PropTypes.number,
  parameterMeasure: PropTypes.number
};

StackBarItem.defaultProps = {
  divMainHeight: 0,
  unmarkedDiv: 0,
  absentDiv: 0,
  excuseDiv: 0,
  presentDiv: 0,
  itemIndex: 4,
  containerHeight: 300,
  parameterMeasure: 1
};
const styles = StyleSheet.create({
  container: {
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
    position: "absolute",
    left: 0,
    right: 0
  },
  presentStructure: {
    width: 50,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0
  },
  excuseStructure: {
    width: 50,
    position: "absolute",
    left: 0,
    right: 0
  },
  unmarkedStructure: {
    width: 50,
    position: "absolute",
    left: 0,
    right: 0
  }
});
