import React from "react";

import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const EpisodeItem = ({ data }) => {
  const navigation = useNavigation();

  const handleNavigate = () => {
    navigation.navigate("Episode", { itemName: data, bool: false });
  };
  return (
    <TouchableOpacity style={styles.card} onPress={handleNavigate}>
      <View style={styles.name}>
        <Text style={{ fontWeight: "bold" }}>{data.name}</Text>
      </View>
      <View style={styles.row}>
        <View style={styles.episode}>
          <Text style={styles.episodeText}>{data.episode}</Text>
        </View>
        <View style={styles.date}>
          <Text style={styles.dateText}>{data.air_date}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default EpisodeItem;

const styles = StyleSheet.create({
  card: {
    width: 180,
    height: 150,
    backgroundColor: "#B9DAF6",
    justifyContent: "center",
    alignItems: "center",
    padding: 2,
    margin: 10,
    borderRadius: 10,
  },
  name: {
    justifyContent: "center",
    alignItems: "center",
    flex: 3,
    width: "100%",
  },
  row: {
    flexDirection: "row",
    flex: 1,
  },
  episode: {
    flex: 1,

    margin: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  date: {
    flex: 2,

    margin: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  episodeText: { fontSize: 12 },
  dateText: { fontSize: 10 },
});
