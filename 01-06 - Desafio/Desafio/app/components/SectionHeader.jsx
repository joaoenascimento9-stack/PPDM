import { View, Text, StyleSheet } from 'react-native';

export function SectionHeader({ title, subtitle, showCounter, count }) {
  return (
    <View style={estilos.container}>
      <View>
        <Text style={estilos.titulo}>{title}</Text>
        {subtitle && <Text style={estilos.subtitulo}>{subtitle}</Text>}
      </View>
      {showCounter && <Text style={estilos.contador}>{count}</Text>}
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#1A1A2E',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 4,
  },
  subtitulo: {
    fontSize: 14,
    color: '#999',
  },
  contador: {
    fontSize: 14,
    color: '#8B5FBF',
    fontWeight: '600',
    backgroundColor: '#0F0F1E',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
});
