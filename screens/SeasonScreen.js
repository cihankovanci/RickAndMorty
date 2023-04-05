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
import Pages from "../component/Pages";

const SeasonScreen = () => {
  const [season, setSeason] = useState([]);
  const [season2, setSeason2] = useState([]);
  const [season3, setSeason3] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [apiPage, setApiPage] = useState(1);

  const getSeason = async () => {
    const response = await axios.get(
      "https://rickandmortyapi.com/api/episode?page=1"
    );
    setSeason(response.data.results);
    console.log(response.data.results);
  };

  useEffect(() => {
    getSeason();
  }, []);

  const getSeason2 = async () => {
    const response = await axios.get(
      "https://rickandmortyapi.com/api/episode?page=2"
    );
    setSeason2(response.data.results);
    console.log(response.data.results);
  };

  useEffect(() => {
    getSeason2();
  }, []);

  const getSeason3 = async () => {
    const response = await axios.get(
      "https://rickandmortyapi.com/api/episode?page=3"
    );
    setSeason3(response.data.results);
    console.log(response.data.results);
  };

  useEffect(() => {
    getSeason3();
  }, []);

  const mergedSeason = season.concat(season2, season3);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  const currentPosts = mergedSeason.slice(firstPostIndex, lastPostIndex);

  return (
    <View style={styles.container}>
      <FlatList
        data={currentPosts}
        renderItem={({ item }) => <EpisodeItem data={item} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={"2"}
      />
      <Pages
        totalPosts={mergedSeason.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
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
