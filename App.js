import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen'; // Asegúrate de ajustar la ruta
import ForgotPasswordScreen from './screens/ForgotPasswordScreen'; // Asegúrate de ajustar la ruta

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ headerShown: false }} // Puedes ocultar el header si lo prefieres
        />
        <Stack.Screen 
          name="ForgotPassword" 
          component={ForgotPasswordScreen} 
          options={{
            title: 'Restablecer Contraseña', // Título del header
            headerLeft: () => null, // Si no deseas la flecha por defecto en la parte izquierda
          }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
