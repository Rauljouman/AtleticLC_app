import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header";

const CreatePost = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handlePost = async () => {
    if (!title || !content) {
      Alert.alert("Error", "Por favor, completa todos los campos.");
      return;
    }

    try {
      await addDoc(collection(db, "Publicacion_mural"), {
        title,
        content,
        createdAt: new Date(),
      });
      Alert.alert("Éxito", "Publicación creada con éxito.");
      navigation.goBack(); // Volver a la pantalla anterior
    } catch (error) {
      Alert.alert("Error", "No se pudo crear la publicación.");
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.label}>Título:</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe el título"
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.label}>Contenido:</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Escribe el contenido"
        value={content}
        onChangeText={(text) => setContent(text)}
        multiline
      />
      <Button title="Publicar" onPress={handlePost} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    backgroundColor: "#fff",
  },
  textArea: {
    height: 100,
    textAlignVertical: "top",
  },
});

export default CreatePost;

