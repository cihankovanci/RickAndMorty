import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  FlatList,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import EpisodeItem from "../component/EpisodeItem";

const SeasonScreen = () => {
  const [season, setSeason] = useState([]);

  const getSeason = async () => {
    const response = await axios.get("https://rickandmortyapi.com/api/episode");
    setSeason(response.data.results);
    console.log(response.data.results);
  };

  useEffect(() => {
    getSeason();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={season}
        renderItem={EpisodeItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={"2"}
      />
    </View>
  );
};

export default SeasonScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
