import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import InputFieldLogin from '../components/InputFieldLogin';
import ButtonLogin from '../components/ButtonLogin';

const ForgotPasswordScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [team, setTeam] = useState('');
  const [subject, setSubject] = useState('');

  const handleSubmit = () => {
    if (!name || !team || !subject) {
      Alert.alert('Error', 'Por favor, rellena todos los campos.');
      return;
    }

    // Envía los datos del formulario al backend
    fetch('http://localhost:5000/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        team: team,
        subject: subject,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === 'Correo enviado exitosamente') {
          Alert.alert('Enviado', 'Formulario enviado con éxito');
          // Opcionalmente, limpiar los campos del formulario
          setName('');
          setTeam('');
          setSubject('');
        } else {
          Alert.alert('Error', 'Hubo un problema al enviar el formulario');
        }
      })
      .catch((error) => {
        console.error(error);
        Alert.alert('Error', 'No se pudo conectar con el servidor');
      });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backButtonText}>←</Text>
      </TouchableOpacity>

      <Image source={require('../assets/Escudo_alc.jpg')} style={styles.escudo_alc} />

      <Text style={styles.titleForm}>Formulario de credenciales</Text>

      <InputFieldLogin
        style={styles.input}
        placeholder="Nombre"
        value={name}
        onChangeText={setName}
      />
      <InputFieldLogin
        style={styles.input}
        placeholder="Equipo"
        value={team}
        onChangeText={setTeam}
      />
      <InputFieldLogin
        style={styles.input}
        placeholder="Asunto"
        value={subject}
        onChangeText={setSubject}
      />
      <ButtonLogin onPress={handleSubmit} title="Enviar" />
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
  escudo_alc: {
    width: 200,
    height: 200,
    transform: [{ rotate: '-45deg' }],
    marginBottom: 90,
  },
  titleForm: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default ForgotPasswordScreen;
