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
import StackBarStyle from "../src/styles/StackBarStyle";
import PropTypes from "prop-types";
import ColorList from "./utils/ColorList";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
// create a component
class StackBarItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      PresentColor: ColorList.PresentColor,
      AbsentColor: ColorList.AbsentColor,
      ExcuseColor: ColorList.ExcuseColor,
      UnmarkColor: ColorList.UnmarkColor
    };
  }

  render() {
    const animatedStyle = { height: this.animatedValue };
    return (
      <View
        style={[
          StackBarStyle.itemContainer,
          { height: this.props.containerHeight }
        ]}
      >
        <View
          style={[
            StackBarStyle.mainDivStructure,
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
              StackBarStyle.unmarkedStructure,
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
              StackBarStyle.excuseStructure,
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
              StackBarStyle.absentStructure,
              {
                height: this.props.absentDiv / this.props.parameterMeasure,
                bottom: this.props.presentDiv / this.props.parameterMeasure + 2
              },
              { backgroundColor: this.state.AbsentColor[this.props.itemIndex] }
            ]}
          />
          <View
            style={[
              StackBarStyle.presentStructure,
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
