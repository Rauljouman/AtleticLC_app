import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, Dimensions, Image, View, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TeamScreen = () => {

const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>¡Bienvenido al Feed!</Text>
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

export default TeamScreen;
