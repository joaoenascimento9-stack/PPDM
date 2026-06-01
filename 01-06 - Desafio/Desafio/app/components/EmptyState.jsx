import { View, Text, StyleSheet } from 'react-native';

export function EmptyState({ emoji, title, description }) {
  return (
    <View style={estilos.container}>
      <Text style={estilos.emoji}>{emoji}</Text>
      <Text style={estilos.title}>{title}</Text>
      <Text style={estilos.description}>{description}</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  emoji: {
    fontSize: 64,
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 8,
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
  },
});
