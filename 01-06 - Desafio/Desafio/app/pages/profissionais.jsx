import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { profissionais } from '../dados/atendimentos';

export default function ProfissionaisScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Profissionais</Text>
      <FlatList
        data={profissionais}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.especialidade}>{item.especialidade}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 12,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
    color: '#333',
  },
  especialidade: {
    fontSize: 14,
    color: '#666',
  },
});