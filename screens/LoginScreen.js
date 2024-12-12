import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, Dimensions, Image, View, Alert } from 'react-native';
import ButtonLogin from '../components/BottomTabNavigator';
import InputFieldLogin from '../components/InputFieldLogin'; // Importar el componente InputField
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

// Función que simula la verificación de login
const mockLogin = (email, password) => {
  return new Promise((resolve, reject) => {
    if (email === 'test@example.com' && password === 'password123') {
      resolve('Login successful');
    } else {
      reject('Invalid email or password');
    }
  });
};

const LoginScreen = () => { 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Obtén el objeto navigation
  const navigation = useNavigation();

  // Validación y login
  const validateAndLogin = async () => {
    if (!email && !password) {
        Alert.alert('Introduce el email y la contraseña');
        return;
    }
    if (!email) {
        Alert.alert('Introduce el email');
        return;
    }
    if (!password) {
        Alert.alert('Introduce la contraseña');
        return;
    }

    try {
      const response = await mockLogin(email, password);
      Alert.alert('Éxito', response);
      navigation.navigate('TeamScreen');
    } catch (error) {
      Alert.alert('Error', error);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/Escudo_alc.jpg')}
        style={styles.escudo_alc}
      />
      <Text style={styles.titulo}>Atletic Les Corts</Text>

      <InputFieldLogin
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <InputFieldLogin
        placeholder="Contraseña"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
      />

      <ButtonLogin
        title="Iniciar Sesión"
        onPress={validateAndLogin}
      />

      {/* Para ir a la pantalla 'ForgotPasswordScreen' */ }
      <TouchableOpacity onPress={() => navigation.navigate('ForgotPasswordScreen')}>
        <Text style={styles.forgotPasswordText}>¿Olvidaste tus credenciales?</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  escudo_alc: {
    width: 200,
    height: 200,
    transform: [{ rotate: '-45deg' }],
    marginBottom: 90,
  },
  forgotPasswordText: {
    fontSize: 17,
    color: '#007bff',
  },
});

export default LoginScreen;