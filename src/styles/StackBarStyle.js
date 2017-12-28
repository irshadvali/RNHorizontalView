import { StyleSheet, Dimensions } from "react-native";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const StackBarStyle = StyleSheet.create({
  container: {
    paddingTop: 30,
    backgroundColor: "#272c35"
  },

  subcontainer: {
    width: width,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center"
  },
  lineBorder: {
    width: window.width,
    height: 2,
    backgroundColor: "#ffffff"
  },
  dateContainer: {
    height: 50,
    width: width,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center"
  },
  itemContainer: {
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#272c35"
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

export default StackBarStyle;
