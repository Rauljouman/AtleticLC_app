import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from "../components/Header";


const EventsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Pantalla Eventos</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default EventsScreen;
