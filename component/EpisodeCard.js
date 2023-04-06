import React from "react";

import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const EpisodeCard = ({ data }) => {
  const str = `${data.episode}`;

  const season = str.slice(1, 3);
  const episode = str.slice(4);
  const formattedStr = `Season ${parseInt(season)} bölüm ${parseInt(episode)}`;

  return (
    <TouchableOpacity style={styles.card} onPress={() => {}}>
      <View style={styles.name}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 24,
            numberOflines: 2,
            ellipsizeMode: "tail",
          }}
        >
          {data.name}
        </Text>
      </View>
      <View style={styles.row}>
        <View style={styles.episode}>
          <Text style={styles.episodeText}>{formattedStr}</Text>
        </View>
        <View style={styles.date}>
          <Text style={styles.dateText}>{data.air_date}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default EpisodeCard;

const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: 100,
    backgroundColor: "#B9DAF6",
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    justifyContent: "center",
    alignItems: "center",
    flex: 3,
    width: "100%",
  },
  row: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  episode: {
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  date: {
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  episodeText: { fontSize: 15 },
  dateText: { fontSize: 10 },
});
