import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textColour}>Hello Friends, Time to stay OnTrack</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1513",
    alignItems: "center",
    justifyContent: "center",
  },
  textColour: {
    color: "white",
  },
});
