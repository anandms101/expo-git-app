import { StyleSheet, Image, Text, View } from "react-native";

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
  },
  flexContainer: {
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    paddingVertical: 10,
  },
  flexRepoSubDetailsContainer: {
    flexDirection: "row",
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  flexRepoDetailsContainer: {
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  flexRepoSubDetailsItems: {
    alignItems: "stretch",
    paddingRight: 10,
    textAlign: "center",
  },
  flexRepoSubDetailsItemsBold: {
    fontWeight: "bold",
  },
  flexImageContainer: {
    flexDirection: "row",
    padding: 10,
  },
  flexProjectDetailsContainer: {
    padding: 10,
  },
  flexProjectHeadingItem: {
    fontWeight: "bold",
    padding: 5
  },
  flexProjectDescriptionItem: {
    fontWeight: "300",
    padding: 5
  },
  flexProjectLanguageItem: {
    fontWeight: "600",
    padding: 5,
  },
});

const formatCount = (count) => {
  if (count >= 1000) {
    return (count / 1000).toFixed(1) + "k";
  }
  return count;
};

const RenderItem = ({ item }) => {
  const { ownerAvatarUrl, fullName, description, language, stargazersCount, forksCount, reviewCount, ratingAverage } = item;

  return (
    <View style={styles.flexContainer}>
      {/* main info */}
      <View style={styles.flexRepoDetailsContainer}>
        <View style={styles.flexImageContainer}>
          <Image
            style={styles.image}
            source={{ uri: ownerAvatarUrl }}
          />
        </View>
        <View style={styles.flexProjectDetailsContainer}>
          <Text style={styles.flexProjectHeadingItem}>{fullName}</Text>
          <Text style={styles.flexProjectDescriptionItem}>{description}</Text>
          <Text style={styles.flexProjectLanguageItem}>{language}</Text>
        </View>
      </View>

      {/* stats for repo */}
      <View style={styles.flexRepoSubDetailsContainer}>
        <View>
          <Text style={[styles.flexRepoSubDetailsItems, styles.flexRepoSubDetailsItemsBold]}>
            {formatCount(stargazersCount)}
          </Text>
          <Text style={styles.flexRepoSubDetailsItems}>Stars</Text>
        </View>
        <View>
          <Text style={[styles.flexRepoSubDetailsItems, styles.flexRepoSubDetailsItemsBold]}>
            {formatCount(forksCount)}
          </Text>
          <Text style={styles.flexRepoSubDetailsItems}>Forks</Text>
        </View>
        <View>
          <Text style={[styles.flexRepoSubDetailsItems, styles.flexRepoSubDetailsItemsBold]}>
            {reviewCount}
          </Text>
          <Text style={styles.flexRepoSubDetailsItems}>Review</Text>
        </View>
        <View>
          <Text style={[styles.flexRepoSubDetailsItems, styles.flexRepoSubDetailsItemsBold]}>
            {ratingAverage}
          </Text>
          <Text style={styles.flexRepoSubDetailsItems}>Rating</Text>
        </View>
      </View>
    </View>
  );
};

export default RenderItem;