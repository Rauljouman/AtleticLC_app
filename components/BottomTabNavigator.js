import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import TeamScreen from '../screens/TeamScreen';
import ClubScreen from '../screens/ClubScreen';
import ProfileScreen from '../screens/ProfileScreen';
import EventsScreen from '../screens/EventsScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Equipo') {
            iconName = 'people';
          } else if (route.name === 'Club') {
            iconName = 'football';
          } else if (route.name === 'Eventos') {
            iconName = 'calendar';
          } else if (route.name === 'Perfil') {
            iconName = 'person';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: '#FF7F00', 
        },
      })}
    >
      <Tab.Screen name="Equipo" component={TeamScreen} />
      <Tab.Screen name="Club" component={ClubScreen} />
      <Tab.Screen name="Eventos" component={EventsScreen} />
      <Tab.Screen name="Perfil" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
