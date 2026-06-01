import { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

// Import das telas
import Login from '../pages/login';
import Cadastro from '../pages/cadastro';
import TelaInicial from '../pages/inicial';
import Favoritos from '../pages/favoritos';
import TocandoMusica from '../pages/tocandoMusica';

// Import dos navegadores
const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

function abasInferiores({ musicasFavoritas, setMusicasFavoritas }) {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        headerShown: true,
        tabBarActiveTintColor: '#FF69B4',
        tabBarInactiveTintColor: '#999',
        tabBarStyle: {
          backgroundColor: '#1A1A2E',
          borderTopColor: '#333',
        },
        tabBarIcon: ({ color, size, focused }) => {
          let nomeIcone = 'home-outline';

          if (route.name === 'Inicial') {
            nomeIcone = focused ? 'home' : 'home-outline';
          }
          if (route.name === 'Favoritos') {
            nomeIcone = focused ? 'heart' : 'heart-outline';
          }

          return <Ionicons name={nomeIcone} size={size} color={color} />;
        },
        headerStyle: {
          backgroundColor: '#1A1A2E',
        },
        headerTintColor: '#FF69B4',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      })}
    >
      <Tabs.Screen
        name="Inicial"
        component={TelaInicial}
        options={{
          title: 'SoundWave',
        }}
      />
      <Tabs.Screen
        name="Favoritos"
        component={Favoritos}
        options={{
          title: 'Minhas Favoritas',
        }}
        initialParams={{ musicasFavoritas, setMusicasFavoritas }}
      />
    </Tabs.Navigator>
  );
}

export default function Rotas() {
  const [musicasFavoritas, setMusicasFavoritas] = useState([]);

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#1A1A2E',
        },
        headerTintColor: '#FF69B4',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Cadastro"
        component={Cadastro}
        options={{ title: 'Criar Conta' }}
      />
      <Stack.Screen
        name="Principal"
        component={() => abasInferiores({ musicasFavoritas, setMusicasFavoritas })}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TocandoMusica"
        component={TocandoMusica}
        options={{
          title: 'Tocando Agora',
          headerBackTitle: 'Voltar',
        }}
      />
    </Stack.Navigator>
  );
}