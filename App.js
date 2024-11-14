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
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen 
          name="LoginScreen" 
          component={LoginScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="ForgotPasswordScreen" 
          component={ForgotPasswordScreen} 
          options=
            {{headerLeft: () => null,
              headerShown: false,
          }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
