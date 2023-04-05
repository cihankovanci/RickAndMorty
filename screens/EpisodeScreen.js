import { StyleSheet, Text, View } from "react-native";
import React from "react";

const EpisodeScreen = ({ route, navigation }) => {
  const { itemName } = route.params;
  const url = JSON.stringify(itemName.url);
  return (
    <View>
      <Text>EpisodeScreen</Text>
      {/* <Text>{JSON.stringify(itemName.id)}</Text>
      <Text>{JSON.stringify(itemName.name)}</Text>
      <Text>{JSON.stringify(itemName.air_date)}</Text>
      <Text>{JSON.stringify(itemName.characters[0])}</Text>
      <Text>{JSON.stringify(itemName.url)}</Text>
      <Text>{JSON.stringify(itemName.episode)}</Text>
      <Text>{JSON.stringify(itemName.episode)}</Text> */}
      <Text>{url}</Text>
    </View>
  );
};

export default EpisodeScreen;

const styles = StyleSheet.create({});
