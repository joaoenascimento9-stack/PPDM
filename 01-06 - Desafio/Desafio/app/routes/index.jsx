import { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useMusicaContext } from '../context/MusicaContext';

// Import das telas
import Login from '../pages/login';
import Cadastro from '../pages/cadastro';
import TelaInicial from '../pages/inicial';
import Favoritos from '../pages/favoritos';
import TocandoMusica from '../pages/tocandoMusica';
import Explorar from '../pages/explorar';
import Historico from '../pages/historico';
import Perfil from '../pages/perfil';

// Import dos navegadores
const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

function AbasInferiores() {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#FF69B4',
        tabBarInactiveTintColor: '#999',
        tabBarStyle: {
          backgroundColor: '#1A1A2E',
          borderTopColor: '#333',
          borderTopWidth: 1,
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarIcon: ({ color, size, focused }) => {
          let nomeIcone = 'home-outline';

          if (route.name === 'Inicial') {
            nomeIcone = focused ? 'home' : 'home-outline';
          }
          if (route.name === 'Explorar') {
            nomeIcone = focused ? 'compass' : 'compass-outline';
          }
          if (route.name === 'Favoritos') {
            nomeIcone = focused ? 'heart' : 'heart-outline';
          }
          if (route.name === 'Historico') {
            nomeIcone = focused ? 'time' : 'time-outline';
          }
          if (route.name === 'Perfil') {
            nomeIcone = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={nomeIcone} size={size} color={color} />;
        },
        tabBarLabel: ({ focused, color }) => {
          const labels = {
            Inicial: 'Início',
            Explorar: 'Explorar',
            Favoritos: 'Favoritos',
            Historico: 'Histórico',
            Perfil: 'Perfil',
          };
          return null; // Hide labels for more space
        },
      })}
    >
      <Tabs.Screen
        name="Inicial"
        component={TelaInicial}
        options={{ title: 'MusicFlow' }}
      />
      <Tabs.Screen
        name="Explorar"
        component={Explorar}
        options={{ title: 'Explorar' }}
      />
      <Tabs.Screen
        name="Favoritos"
        component={Favoritos}
        options={{ title: 'Minhas Favoritas' }}
      />
      <Tabs.Screen
        name="Historico"
        component={Historico}
        options={{ title: 'Histórico' }}
      />
      <Tabs.Screen
        name="Perfil"
        component={Perfil}
        options={{ title: 'Perfil' }}
      />
    </Tabs.Navigator>
  );
}

export default function Rotas() {
  const { usuarioLogado } = useMusicaContext();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#1A1A2E',
          borderBottomColor: '#333',
          borderBottomWidth: 1,
        },
        headerTintColor: '#FF69B4',
        headerTitleStyle: {
          fontWeight: 'bold',
          color: '#FFF',
          fontSize: 18,
        },
        cardStyle: {
          backgroundColor: '#0F0F1E',
        },
        animationEnabled: true,
      }}
    >
      {!usuarioLogado ? (
        <>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Cadastro"
            component={Cadastro}
            options={{
              title: 'Criar Conta',
              animationEnabled: true,
            }}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="Principal"
            component={AbasInferiores}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="TocandoMusica"
            component={TocandoMusica}
            options={{
              title: 'Tocando Agora',
              headerBackTitle: 'Voltar',
              animationEnabled: true,
            }}
          />
        </>
      )}
    </Stack.Navigator>
  );
}