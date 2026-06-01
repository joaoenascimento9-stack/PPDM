import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { atendimentos } from '../dados/atendimentos';

export default function Atendimentos() {
  return (
    <View style = {estilos.container}>
      <Text >Atendimentos</Text>
      <FlatList
        data={atendimentos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={estilos.card}>
            <Text style={estilos.nome}>{item.pet}</Text>
            <Text style={estilos.servico}>{item.servico}</Text>
            <Text style={estilos.horario}>{item.horario}</Text>
          </View>
        )}
      />
    </View>
  );
}

const estilos = StyleSheet.create ({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  card: {
    backgroundColor: '#fff',
    padding: 12,
    marginBottom: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  nome: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  servico: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  horario: {
    fontSize: 12,
    color: '#999',
  },
})