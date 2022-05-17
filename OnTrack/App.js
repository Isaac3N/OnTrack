import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textColour}>Hello World! Let's Stay On Track</Text>
      <StatusBar style="auto" />
    </View>
  );
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
