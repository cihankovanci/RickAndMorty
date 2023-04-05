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
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);

  const getSeason = async () => {
    const response = await axios.get("https://rickandmortyapi.com/api/episode");
    setSeason(response.data.results);
    console.log(response.data.results);
  };

  useEffect(() => {
    getSeason();
  }, []);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  const currentPosts = season.slice(firstPostIndex, lastPostIndex);

  return (
    <View style={styles.container}>
      {/* <View style={{ height: "90%" }}></View> */}
      <FlatList
        data={currentPosts}
        renderItem={EpisodeItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={"2"}
      />

      {/* <View
        style={{
          height: "10%",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      ></View> */}
      <Pages
        totalPosts={season.length}
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
