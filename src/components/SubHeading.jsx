import Text from "./Text";
import { Alert, Pressable, StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  flexContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    paddingVertical: 20,
  },
  flexItem: {
    alignItems: "flex-start",
  },
});

const onPressFunction = () => {
  Alert.alert("Repositories pressed");
};

const Subheading = () => {
  return (
    <View style={styles.flexContainer}>
      <View style={styles.flexItem}>
        <Pressable onPress={onPressFunction}>
          <Text color="primary" fontSize="subheading" fontWeight="bold">
            Repositories
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Subheading;
