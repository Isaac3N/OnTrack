import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { HomeScreen } from "./src/Screens/HomeScreen";

export default function App() {
  return <HomeScreen />;
}

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
