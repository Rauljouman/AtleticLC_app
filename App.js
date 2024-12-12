import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen'; 
import ForgotPasswordScreen from './screens/ForgotPasswordScreen'; 
import TeamScreen from './screens/TeamScreen'; 
import BottomTabNavigator from './components/BottomTabNavigator';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TeamScreen">
        <Stack.Screen
          name="ForgotPasswordScreen"
          component={ForgotPasswordScreen}
          options={{
            headerShown: true, 
            title: 'Recuperar Contraseña', 
          }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }} 
        />
        <Stack.Screen
          name="TeamScreen"
          component={BottomTabNavigator}
          options={{ headerShown: false , title:"Equipo"}} 
        />
        <Stack.Screen
          name="ClubScreen"
          component={BottomTabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EventsScreen"
          component={BottomTabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProfileScreen"
          component={BottomTabNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
