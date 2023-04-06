import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
const FavoriteScreen = () => {
  const [characters, setCharacters] = useState([]);
  const favoriteCharacterIds = useSelector((state) => state.favorites.ids);

  const getCharacterData = async () => {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character/${favoriteCharacterIds}`
    );

    setCharacters(response.data);
    console.log("tüm kter", response.data);
    // console.log("aw", response.data.characters);
  };
  useEffect(() => {
    getCharacterData();
  }, []);

  const renderItem = ({ item }) => <Text>{item.name}</Text>;

  return (
    <View>
      <Text>FavoriteScreen</Text>

      <FlatList
        data={characters}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default FavoriteScreen;

const styles = StyleSheet.create({});
