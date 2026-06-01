import { useState, useMemo } from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native';
import { musicas, categorias } from '../dados/musicas';
import { useMusicaContext } from '../context/MusicaContext';
import { MusicaCard } from '../components/MusicaCard';
import { SectionHeader } from '../components/SectionHeader';
import { SearchBar } from '../components/SearchBar';
import { EmptyState } from '../components/EmptyState';

export default function TelaInicial({ navigation }) {
  const { adicionarFavorito, adicionarAoHistorico } = useMusicaContext();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);

  const musicasFiltradas = useMemo(() => {
    let resultado = musicas;

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      resultado = resultado.filter(
        (m) =>
          m.titulo.toLowerCase().includes(query) ||
          m.artista.toLowerCase().includes(query) ||
          m.album.toLowerCase().includes(query)
      );
    }

    if (selectedCategory) {
      const categoria = categorias.find((c) => c.id === selectedCategory);
      if (categoria) {
        resultado = resultado.filter((m) =>
          categoria.generos.includes(m.genero)
        );
      }
    }

    return resultado;
  }, [searchQuery, selectedCategory]);

  const handleMusicaPress = (musica) => {
    adicionarAoHistorico(musica);
    navigation.navigate('TocandoMusica', { musica });
  };

  const handleFavoritoPress = (musicaId) => {
    adicionarFavorito(musicaId);
  };

  return (
    <View style={estilos.container}>
      <SectionHeader
        title="MusicFlow"
        subtitle="Sua música, seu ritmo"
      />

      <SearchBar
        onSearch={setSearchQuery}
        onFilterPress={() => {}}
      />

      {searchQuery.trim() ? (
        <View style={estilos.content}>
          {musicasFiltradas.length > 0 ? (
            <>
              <View style={estilos.searchResultHeader}>
                <Text style={estilos.searchResultTitle}>
                  🔍 {musicasFiltradas.length} resultado{musicasFiltradas.length !== 1 ? 's' : ''}
                </Text>
              </View>
              <FlatList
                data={musicasFiltradas}
                renderItem={({ item }) => (
                  <MusicaCard
                    musica={item}
                    onPress={() => handleMusicaPress(item)}
                    onPressFavorito={handleFavoritoPress}
                    showGenero
                  />
                )}
                keyExtractor={(item) => item.id}
                contentContainerStyle={estilos.listPadding}
                scrollEnabled={false}
              />
            </>
          ) : (
            <EmptyState
              emoji="🎵"
              title="Nenhuma música encontrada"
              description={`Nenhuma música encontrada para "${searchQuery}"`}
            />
          )}
        </View>
      ) : (
        <ScrollView style={estilos.content} showsVerticalScrollIndicator={false}>
          <View style={estilos.categorySection}>
            <Text style={estilos.categoriaTitle}>📂 Categorias</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={estilos.categoriasList}
            >
              {categorias.map((cat) => (
                <View
                  key={cat.id}
                  style={[
                    estilos.categoriaCard,
                    selectedCategory === cat.id && estilos.categoriaCardActive,
                  ]}
                >
                  <Text
                    style={[
                      estilos.categoriaText,
                      selectedCategory === cat.id && estilos.categoriaTextActive,
                    ]}
                    onPress={() => setSelectedCategory(selectedCategory === cat.id ? null : cat.id)}
                  >
                    {cat.nome}
                  </Text>
                </View>
              ))}
            </ScrollView>
          </View>

          <View style={estilos.secao}>
            <View style={estilos.cabecalhoSecao}>
              <Text style={estilos.tituloSecao}>🎵 {selectedCategory ? 'Filtrado' : 'Recomendado para você'}</Text>
            </View>
            <FlatList
              data={selectedCategory ? musicasFiltradas : musicas}
              renderItem={({ item }) => (
                <MusicaCard
                  musica={item}
                  onPress={() => handleMusicaPress(item)}
                  onPressFavorito={handleFavoritoPress}
                  showGenero
                />
              )}
              keyExtractor={(item) => item.id}
              scrollEnabled={false}
            />
          </View>
        </ScrollView>
      )}
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F0F1E',
  },
  content: {
    flex: 1,
    paddingHorizontal: 15,
  },
  listPadding: {
    paddingBottom: 20,
  },
  searchResultHeader: {
    paddingVertical: 12,
    paddingHorizontal: 5,
  },
  searchResultTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#8B5FBF',
  },
  categorySection: {
    marginTop: 16,
    marginBottom: 20,
  },
  categoriaTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 12,
  },
  categoriasList: {
    gap: 8,
    paddingRight: 15,
  },
  categoriaCard: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#1A1A2E',
    borderWidth: 2,
    borderColor: 'transparent',
  },
  categoriaCardActive: {
    backgroundColor: '#8B5FBF',
    borderColor: '#FF69B4',
  },
  categoriaText: {
    color: '#999',
    fontSize: 14,
    fontWeight: '600',
  },
  categoriaTextActive: {
    color: '#FFF',
  },
  secao: {
    marginTop: 20,
    marginBottom: 30,
  },
  cabecalhoSecao: {
    marginBottom: 15,
  },
  tituloSecao: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },
});
