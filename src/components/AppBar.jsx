import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";
import Subheading from "./SubHeading";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#24292e",
  },
  scrollView: {
    marginHorizontal: 20,

  },
  // ...
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      {/* <ScrollView style={styles.scrollView} horizontal> */}
        <Subheading />
      {/* </ScrollView> */}
    </View>
  );
};

export default AppBar;
