import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from "../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";

const ClubScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
    <View style={styles.container}>
      <Text>Pantalla Club</Text>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ClubScreen;
