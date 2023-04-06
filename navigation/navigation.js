import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EpisodeScreen from "../screens/EpisodeScreen";
import SeasonScreen from "../screens/SeasonScreen";
import CharacterScreen from "../screens/CharacterScreen";

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Season" component={SeasonScreen} />
        <Stack.Screen name="Episode" component={EpisodeScreen} />
        <Stack.Screen name="Character" component={CharacterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
