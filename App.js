import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Navigation from "./navigation/navigation";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { StatusBar } from "expo-status-bar";
const App = () => {
  return (
    <Provider store={store}>
      <StatusBar style="dark" />
      <Navigation />
    </Provider>
  );
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
