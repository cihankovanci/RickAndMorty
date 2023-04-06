import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import Character from "../component/Character";
import EpisodeItem from "../component/EpisodeItem";
import EpisodeList from "../component/EpisodeList";
import axios from "axios";

const CharacterScreen = ({ route, navigation }) => {
  const [characterData, setCharacterData] = useState([]);
  const [episode, setEpisode] = useState([]);
  const [data, setData] = useState([]);

  const { itemName } = route.params;
  console.log("item", JSON.stringify(itemName));

  const getEpisodes = async () => {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character/${itemName.id}`
    );

    setEpisode(response.data.episode);
    setCharacterData(response.data);
    console.log("aw", response.data.episode);
  };

  useEffect(() => {
    getEpisodes();
  }, []);

  const numbers = episode.map((url) => parseInt(url.match(/\d+$/)));

  //   const getEpis = async () => {
  //     const episodes = {};
  //     for (let i = 0; i < episode.length; i++) {
  //       const response = await axios.get(episode[i]);
  //       episodes[response.data.id] = response.data;
  //     }
  //     return setData(episodes);
  //   };

  //   getEpis().then((episodes) => console.log("episode", episodes));

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Episode", {
          navData: `https://rickandmortyapi.com/api/episode/${item}`,
          isBool: true,
        })
      }
      style={{
        width: 20,
        height: 20,
        justifyContent: "center",
        alignItems: "center",
        margin: 5,
        backgroundColor: "#EBEBEB",
      }}
    >
      <Text>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <View>
      <Character item={itemName} />
      {/* <Text>{itemName.id}</Text> */}

      <View style={{ width: "100%" }}>
        <Text>EPISODES</Text>
        <FlatList
          numColumns={"12"}
          data={numbers}
          renderItem={renderItem}
          keyExtractor={(item) => item.toString()}
        />
      </View>
      {/* <EpisodeList /> */}
    </View>
  );
};

export default CharacterScreen;

const styles = StyleSheet.create({});
