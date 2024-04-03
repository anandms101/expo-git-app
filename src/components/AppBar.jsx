import {  View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import Subheading from "./SubHeading";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#24292e",
  },
  // ...
});

const AppBar = () => {
  return (
    <View style={styles.container}>
        <Subheading />
    </View>
  );
};

export default AppBar;
