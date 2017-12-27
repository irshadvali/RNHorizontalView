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
import DataResult from "./utils/DataResult";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
import SingleHorizontalBarStyle from "./SingleHorizontalBarStyle";
import MonthItem from "./MonthItem";
import PropTypes from "prop-types";

// create a component
class StackBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      DataList: DataResult.StackList
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            alignContent: "center",
            width: width,

            zIndex: 0
          }}
        >
          <FlatList
            data={this.state.DataList}
            numColumns={7}
            contentContainerStyle={{}}
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
                  />
                </View>
              </View>
            )}
          />
          <View style={styles.lineBorder} />

          <FlatList
            data={this.props.dataResult}
            numColumns={6}
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

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#272c35",
    position: "absolute",
    bottom: 2
  },
  lineBorder: {
    width: window.width - 20,
    height: 2,
    backgroundColor: "#ffffff",
    position: "absolute",
    bottom: 0
  }
});

//make this component available to the app
export default StackBar;
