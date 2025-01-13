import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState('');  // Correo del usuario
  const [subject, setSubject] = useState('');  // Asunto
  const [message, setMessage] = useState('');  // Descripción del asunto
  
  const navigation = useNavigation();

  const handleSubmit = () => {
    if (!email || !subject || !message) {
      Alert.alert('Error', 'Por favor, rellena todos los campos.');
      return;
    }

    // Enviar los datos al servidor
    fetch('http://192.168.1.64:3001/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, subject, message }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === 'Correo enviado con éxito') {
          Alert.alert('Enviado', 'Mensaje enviado con éxito');
          setEmail('');
          setSubject('');
          setMessage('');
          navigation.goBack();  // Vuelve a la pantalla anterior
        } else {
          Alert.alert('Error', 'Hubo un problema al enviar el mensaje.');
        }
      })
      .catch((error) => {
        console.error(error);
        Alert.alert('Error', 'No se pudo conectar con el servidor.');
      });
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/Escudo_alc.jpg')}
        style={styles.escudo_alc}
      />
      <Text style={styles.title}>Formulario de Contacto</Text>
      <TextInput
        style={styles.input}
        placeholder="Tu correo electrónico"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Asunto"
        value={subject}
        onChangeText={setSubject}
      />
      <TextInput
        style={[styles.input, { height: 100 }]}
        placeholder="Descripción del asunto"
        value={message}
        onChangeText={setMessage}
        multiline
      />
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
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  escudo_alc: {
    width: 200,
    height: 200,
    transform: [{ rotate: '-45deg' }],
    marginBottom: 90,
  },
});

export default ForgotPasswordScreen;
