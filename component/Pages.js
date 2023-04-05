import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Pages = ({ totalPosts, postsPerPage, currentPage, setCurrentPage }) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }
  return (
    <View style={{ flexDirection: "row" }}>
      {pages.map((page, index) => {
        return (
          <TouchableOpacity
            key={index}
            style={{
              width: 40,
              height: 40,
              margin: 10,
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: page == currentPage ? "#B9DAF6" : "lightgray",
            }}
            onPress={() => setCurrentPage(page)}
          >
            <Text>{page}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Pages;

const styles = StyleSheet.create({});
