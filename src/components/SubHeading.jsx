import Text from "./Text";
import { Alert, Pressable, StyleSheet, View } from "react-native";
import { Link } from "react-router-native";

const styles = StyleSheet.create({
  flexContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 20,
    display: "flex",
  },
  flexItem: {
  },
});

const onPressFunction = () => {
  Alert.alert("Tab pressed");
};

const Subheading = () => {
  return (
    <View style={styles.flexContainer}>
      <View style={styles.flexItem}>
        <Pressable onPress={onPressFunction}>
          <Link to="/">
            <Text color="primary" fontSize="subheading" fontWeight="bold">
              Repositories
            </Text>
          </Link>
        </Pressable>
      </View>
      <View style={styles.flexItem}>
        <Pressable onPress={onPressFunction}>
          <Link to="/signin">
            <Text color="primary" fontSize="subheading" fontWeight="bold">
              SignIn
            </Text>
          </Link>
        </Pressable>
      </View>
    </View>
  );
};

export default Subheading;
