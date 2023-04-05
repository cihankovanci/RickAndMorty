import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Navigation from "./navigation/navigation";

const App = () => {
  return <Navigation />;
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgray",
    justifyContent: "center",
    alignItems: "center",
  },
});
