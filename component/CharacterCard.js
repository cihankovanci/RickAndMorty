import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const CharacterCard = ({ item }) => {
  return (
    <TouchableOpacity style={styles.container}>
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
