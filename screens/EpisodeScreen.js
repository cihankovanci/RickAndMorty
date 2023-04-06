import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import React, { useState, useEffect } from "react";
import EpisodeItem from "../component/EpisodeItem";
import axios from "axios";
import EpisodeCard from "../component/EpisodeCard";
const EpisodeScreen = ({ route, navigation }) => {
  const [episode, setEpisode] = useState([]);
  const [charactersData, setCharactersData] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { itemName } = route.params;
  //   const url = JSON.stringify(itemName.url);

  const getEpisode = async () => {
    const response = await axios.get(itemName.url);

    setEpisode(response.data);
    setCharactersData(response.data.characters);
    console.log("aw", response.data.characters);
  };

  useEffect(() => {
    getEpisode();
  }, []);

  const fetchCharacters = async () => {
    setIsLoading(true);
    const promises = charactersData.map((url) => fetch(url));
    const responses = await Promise.all(promises);
    const data = await Promise.all(
      responses.map((response) => response.json())
    );

    setCharacters(data);
    setIsLoading(false);
    console.log("DATA", data);
  };

  useEffect(() => {
    fetchCharacters();
  }, [charactersData]);

  const renderItem = ({ item }) => (
    <View style={{ margin: 10 }}>
      <Image source={{ uri: item.image }} style={{ width: 150, height: 150 }} />
      <Text>{item.name}</Text>
      <Text>{item.status} </Text>
      {/* Kart rengi değişecek */}
      <Text>{item.origin.name}</Text>
    </View>
  );

  return (
    <View>
      <EpisodeCard data={episode} />
      <FlatList
        data={characters}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={"2"}
      />
    </View>
  );
};

export default EpisodeScreen;

const styles = StyleSheet.create({});
