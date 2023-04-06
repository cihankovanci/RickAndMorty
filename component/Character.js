import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import EpisodeList from "./EpisodeList";

const Character = ({ item }) => {
  return (
    <View>
      <Image
        source={{ uri: item.image }}
        style={{
          width: "100%",
          height: 400,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
      />
      <View style={styles.InfoContainer}>
        <View style={styles.Infos}>
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
        <View style={styles.Infos}>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.DefaultText}>Species: </Text>
            <Text>{item.species} </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.DefaultText}>Gender: </Text>
            <Text>{item.gender} </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.DefaultText}>Location: </Text>
            <Text>{item.location.name} </Text>
          </View>
        </View>
      </View>
      {/* <Text>{item.episode}</Text> */}
    </View>
  );
};

export default Character;

const styles = StyleSheet.create({
  InfoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  Infos: {
    backgroundColor: "#EBEBEB",
    flex: 1,
    height: 100,
    justifyContent: "space-around",
  },
  DefaultText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
