import { StyleSheet, Dimensions } from "react-native";
import PropTypes from "prop-types";
const window = Dimensions.get("window");
const SingleHorizontalBarStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    paddingTop: 30
  },
  lineBorder: {
    width: window.width - 20,
    height: 2,
    backgroundColor: "#d00000"
  },
  divMain: {
    width: 100,
    height: 320,
    backgroundColor: "#e6e6e6"
  },
  childDiv: {
    backgroundColor: "steelblue",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0
  }
});

export default SingleHorizontalBarStyle;
