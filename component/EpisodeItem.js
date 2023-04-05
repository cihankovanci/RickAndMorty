import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const EpisodeItem = ({ item }) => {
  return (
    <TouchableOpacity style={styles.card}>
      <View style={styles.name}>
        <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
      </View>
      <View style={styles.row}>
        <View style={styles.episode}>
          <Text style={styles.episodeText}>{item.episode}</Text>
        </View>
        <View style={styles.date}>
          <Text style={styles.dateText}>{item.air_date}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default EpisodeItem;

const styles = StyleSheet.create({
  card: {
    width: "45%",
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
  episodeText: { fontSize: 15 },
  dateText: { fontSize: 10 },
});
