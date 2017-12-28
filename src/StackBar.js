//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Easing,
  FlatList,
  Dimensions
} from "react-native";
import StackBarItem from "./StackBarItem";
import StackBarStyle from "./styles/StackBarStyle";
import MonthItem from "./MonthItem";
import PropTypes from "prop-types";

// create a component
class StackBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      containerHeight: 180,
      parameterMeasure: 3 // Here Show graph 1 px as 3 px
    };
  }
  render() {
    return (
      <View style={StackBarStyle.container}>
        <View
          style={[
            StackBarStyle.subcontainer,
            { height: this.state.containerHeight }
          ]}
        >
          <FlatList
            data={this.props.dataResult}
            numColumns={7}
            scrollEnabled={false}
            contentContainerStyle={{
              justifyContent: "center",
              alignContent: "center"
            }}
            keyExtractor={(item, index) => index}
            renderItem={({ item, index }) => (
              <View
                style={{
                  flexDirection: "column",
                  margin: 1
                }}
              >
                <View>
                  <StackBarItem
                    divMainHeight={
                      item.unmarkPeople +
                      item.absentPeople +
                      item.excusePeople +
                      item.prsentPeople
                    }
                    unmarkedDiv={item.unmarkPeople}
                    absentDiv={item.absentPeople}
                    excuseDiv={item.excusePeople}
                    presentDiv={item.prsentPeople}
                    itemIndex={index}
                    containerHeight={this.state.containerHeight}
                    parameterMeasure={this.state.parameterMeasure}
                  />
                </View>
              </View>
            )}
          />
        </View>
        <View style={StackBarStyle.lineBorder} />
        <View style={StackBarStyle.dateContainer}>
          <FlatList
            data={this.props.dataResult}
            scrollEnabled={false}
            numColumns={7}
            keyExtractor={(item, index) => index}
            renderItem={({ item }) => (
              <View
                style={{
                  flexDirection: "column",
                  margin: 1
                }}
              >
                <View>
                  <MonthItem monthText={item.month} />
                </View>
              </View>
            )}
          />
        </View>
      </View>
    );
  }
}

export default StackBar;

StackBar.propTypes = {
  dataResult: PropTypes.object
};
StackBar.defaultProps = {
  dataResult: null
};
