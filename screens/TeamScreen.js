import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "../components/Header";

const TeamScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.content}>Contenido del mural del equipo</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  content: {
    marginTop: 20,
    textAlign: "center",
    fontSize: 16,
  },
});

export default TeamScreen;
