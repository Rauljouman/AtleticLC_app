import React, { useState } from "react";
import { View, TextInput, Button, Text, Alert, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, firestore } from "../firebase/firebaseConfig";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const validateAndLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Introduce el email y la contraseña");
      return;
    }
  
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const userId = userCredential.user.uid; // Obtenemos el UID del usuario
  
      Alert.alert("Éxito", "Inicio de sesión exitoso");
      navigation.navigate("Main", { userId }); // Navegamos a Main y enviamos userId
    } catch (error) {
      Alert.alert("Error", "Email o contraseña incorrectos");
      console.error("Error de inicio de sesión:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require("../assets/Escudo_alc.jpg")} style={styles.escudo_alc} />
      <Text style={styles.title}>Atletic Les Corts</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text.trim())}
        style={styles.input}
      />
      <TextInput
        placeholder="Contraseña"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
        style={styles.input}
      />
      <Button title="Iniciar Sesión" onPress={validateAndLogin} />
      <Text
        style={styles.forgotPassword}
        onPress={() => navigation.navigate("ForgotPasswordScreen")}
      >
        ¿Olvidaste tus credenciales?
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  escudo_alc: {
    width: 200,
    height: 200,
    marginBottom: 50,
    transform: [{ rotate: "-45deg" }],
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    margin: 10,
    width: "80%",
    borderRadius: 5,
  },
  forgotPassword: {
    marginTop: 10,
    color: "#007bff",
  },
});

export default LoginScreen;
