import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState, useEffect } from "react";
import EpisodeItem from "../component/EpisodeItem";
import axios from "axios";
import EpisodeCard from "../component/EpisodeCard";
import CharacterCard from "../component/CharacterCard";
import Pages from "../component/Pages";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";

const EpisodeScreen = ({ route, navigation }) => {
  const [episode, setEpisode] = useState([]);
  const [charactersData, setCharactersData] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [searchText, setSearchText] = useState("");

  const { itemName } = route.params;
  //   const url = JSON.stringify(itemName.url);

  const getEpisode = async () => {
    const response = await axios.get(itemName.url);

    setEpisode(response.data);
    setCharactersData(response.data.characters);
    // console.log("aw", response.data.characters);
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
    // console.log("DATA", data);
  };

  useEffect(() => {
    fetchCharacters();
  }, [charactersData]);

  const renderItem = ({ item }) => (
    <View style={{ margin: 10 }}>
      <Image source={{ uri: item.image }} style={{ width: 149, height: 150 }} />
      <TouchableOpacity>FAV</TouchableOpacity>
      <Text>{item.name}</Text>
      <Text>{item.status} </Text>
      {/* Kart rengi değişecek */}
      <Text>{item.origin.name}</Text>
    </View>
  );
  const handleSearch = (text) => {
    setSearchText(text);
  };
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  const currentPosts = characters.slice(firstPostIndex, lastPostIndex);

  const filteredSeasons = currentPosts.filter(
    (item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase()) ||
      item.status.toLowerCase().includes(searchText.toLowerCase()) ||
      item.origin.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      <EpisodeCard data={episode} />
      <TextInput
        placeholder="Search for name, status, origin ..."
        onChangeText={handleSearch}
        value={searchText}
      />
      <FlatList
        data={filteredSeasons}
        renderItem={({ item }) => (
          <CharacterCard onClick={() => {}} item={item} isRemovable={false} />
        )}
        keyExtractor={(item) => item.id}
        numColumns={"2"}
      />
      <Pages
        totalPosts={characters.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </View>
  );
};

export default EpisodeScreen;

const styles = StyleSheet.create({});
