import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const ForgotPasswordScreen = ({ navigation }) => {
  // Estados para los campos del formulario
  const [name, setName] = useState('');
  const [team, setTeam] = useState('');
  const [subject, setSubject] = useState('');

  const handleSubmit = () => {
    // Lógica de validación simple
    if (!name || !team || !subject) {
      Alert.alert('Error', 'Por favor, rellena todos los campos.');
      return;
    }
    if (!name) {
      Alert.alert('Error', 'Introduce tu nombre.');
      return;
    }
    if (!team) {
      Alert.alert('Error', 'Introduce el equipo.');
      return;
    }
    if (!subject) {
      Alert.alert('Error', 'Introduce el asunto.');
      return;
    }

    Alert.alert('Enviado', 'Formulario enviado con éxito');
    // Aquí puedes agregar cualquier otra acción después de enviar el formulario (como limpiar los campos)
  };

  return (
    <View style={styles.container}>
      {/* Botón de regresar al Login */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backButtonText}>←</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Formulario de Credenciales</Text>

      {/* Campo de nombre */}
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={name}
        onChangeText={setName}
      />

      {/* Campo de equipo */}
      <TextInput
        style={styles.input}
        placeholder="Equipo"
        value={team}
        onChangeText={setTeam}
      />

      {/* Campo de asunto */}
      <TextInput
        style={styles.input}
        placeholder="Asunto"
        value={subject}
        onChangeText={setSubject}
      />

      {/* Botón de enviar */}
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 1,
  },
  backButtonText: {
    fontSize: 24,
    color: '#000',
  },
});

export default ForgotPasswordScreen;
