import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useState } from 'react';

export function SearchBar({ onSearch, onFilterPress }) {
  const [query, setQuery] = useState('');

  const handleChangeText = (text) => {
    setQuery(text);
    onSearch(text);
  };

  const handleClear = () => {
    setQuery('');
    onSearch('');
  };

  return (
    <View style={estilos.container}>
      <View style={estilos.searchContainer}>
        <Text style={estilos.icon}>🔍</Text>
        <TextInput
          style={estilos.input}
          placeholder="Buscar música, artista..."
          value={query}
          onChangeText={handleChangeText}
          placeholderTextColor="#999"
        />
        {query && (
          <TouchableOpacity onPress={handleClear}>
            <Text style={estilos.clearIcon}>✕</Text>
          </TouchableOpacity>
        )}
      </View>
      <TouchableOpacity
        style={estilos.filterButton}
        onPress={onFilterPress}
      >
        <Text style={estilos.filterIcon}>⚙️</Text>
      </TouchableOpacity>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#1A1A2E',
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0F0F1E',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#333',
    paddingHorizontal: 12,
  },
  icon: {
    fontSize: 18,
    marginRight: 8,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    fontSize: 14,
    color: '#FFF',
  },
  clearIcon: {
    fontSize: 18,
    color: '#999',
  },
  filterButton: {
    width: 44,
    height: 44,
    borderRadius: 10,
    backgroundColor: '#8B5FBF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterIcon: {
    fontSize: 20,
  },
});
