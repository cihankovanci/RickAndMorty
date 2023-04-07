import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import CharacterCard from "../component/CharacterCard";
import { Alert } from "react-native";
import { useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from "../store/favoritesSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";

const FavoriteScreen = ({ route, navigation }) => {
  const [characters, setCharacters] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [myData, setMyData] = useState([]);

  const { charid } = route.params;

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
  }, [favoriteCharacterIds]);

  useEffect(() => {
    saveData(characters);
  }, [characters]);

  useEffect(() => {
    // AsyncStorage'den verileri almak için async fonksiyonunu kullanın.
    const getData = async () => {
      try {
        const data = await AsyncStorage.getItem("@MyApp_Data");
        if (data) {
          setMyData(JSON.parse(data));
        }
      } catch (e) {
        console.log("Error getting data from AsyncStorage:", e);
      }
    };

    getData();
  }, []);

  const dispatch = useDispatch();
  const renderItem = ({ item }) => <Text>{item.name}</Text>;

  const saveData = async (data) => {
    try {
      await AsyncStorage.setItem("@MyApp_Data", JSON.stringify(data));
      console.log("Data saved successfully");
    } catch (e) {
      console.log("Error saving data:", e);
    }
  };

  const totalItems = characters.length;
  if (totalItems > 10) {
    Alert.alert(
      "Uyarı",
      "“Favori karakter ekleme sayısını aştınız. Başka bir karakteri favorilerden çıkarmalısınız"
    );
  }

  const handleRemove = ({ item }) => {};

  return (
    <View>
      <Text>FavoriteScreen{totalItems}</Text>

      {/* <FlatList
        data={characters}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      /> */}
      <FlatList
        data={characters}
        renderItem={({ item }) => (
          <CharacterCard
            isRemovable={true}
            onRemove={() =>
              Alert.alert(
                `Silme işlemi`,
                `${item.name} isimli karakteri
              favorilerden kaldırmak istediğinize emin misiniz?”`,
                [
                  {
                    text: "Evet",
                    onPress: () => {
                      dispatch(removeFavorite({ id: item.id }));
                    },
                  },
                  {
                    text: "Hayır",
                    onPress: () => {},
                    style: "cancel",
                  },
                ]
              )
            }
            item={item}
          />
        )}
        keyExtractor={(item) => item.id}
        numColumns={"2"}
      />
    </View>
  );
};

export default FavoriteScreen;

const styles = StyleSheet.create({});
