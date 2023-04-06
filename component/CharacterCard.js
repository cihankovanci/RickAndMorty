import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const CharacterCard = ({ item, onClick }) => {
  const navigation = useNavigation();

  const handleNavigate = () => {
    navigation.navigate("Character", { itemName: item });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <View>
        <Image
          source={{ uri: item.image }}
          style={{
            width: 180,
            height: 180,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}
        />
      </View>
      <TouchableOpacity
        style={{ width: 50, height: 50, backgroundColor: "red" }}
        onPress={onClick}
      >
        <Text>Fav</Text>
      </TouchableOpacity>
      <View style={styles.InfoContainer}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.DefaultText}>Name: </Text>
          <Text>{item.name}</Text>
        </View>
        {/* Kart rengi değişecek */}
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.DefaultText}>Origin: </Text>
          <Text>{item.origin.name}</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.DefaultText}>Status: </Text>
          <Text>{item.status} </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CharacterCard;

const styles = StyleSheet.create({
  container: {
    width: 180,
    height: 250,

    justifyContent: "center",
    alignItems: "center",
    padding: 2,
    margin: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },
  imageContainer: {},
  InfoContainer: {
    width: 180,
    height: 70,
    backgroundColor: "#EBEBEB",
    justifyContent: "center",
    borderBottomEndRadius: 10,
  },
  DefaultText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
