import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";
import React, { useState, useEffect } from "react";

const EpisodeList = ({ data }) => {
  const API_URL = data;

  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setEpisodes(data));
  }, []);

  const renderItem = ({ item }) => (
    <View style={{ padding: 10 }}>
      <Text>{item}</Text>
    </View>
  );
  return (
    <View>
      <Text>a</Text>

      <FlatList
        data={episodes}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
      <Text>a</Text>
    </View>
  );
};

export default EpisodeList;

const styles = StyleSheet.create({});
