import { useMemo } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { musicas } from '../dados/musicas';
import { useMusicaContext } from '../context/MusicaContext';
import { MusicaCard } from '../components/MusicaCard';
import { SectionHeader } from '../components/SectionHeader';
import { EmptyState } from '../components/EmptyState';

export default function Historico({ navigation }) {
  const { historico, adicionarFavorito, adicionarAoHistorico } = useMusicaContext();

  const musicasHistorico = useMemo(() => {
    const idsUnicos = [...new Set(historico.map((h) => h.id))];
    return idsUnicos
      .map((id) => musicas.find((m) => m.id === id))
      .filter((m) => m !== undefined);
  }, [historico]);

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
        title="📜 Histórico"
        subtitle={musicasHistorico.length > 0 ? 'Músicas reproduzidas recentemente' : ''}
        showCounter={true}
        count={musicasHistorico.length}
      />

      {musicasHistorico.length > 0 ? (
        <FlatList
          data={musicasHistorico}
          renderItem={({ item }) => (
            <MusicaCard
              musica={item}
              onPress={() => handleMusicaPress(item)}
              onPressFavorito={handleFavoritoPress}
            />
          )}
          keyExtractor={(item) => `${item.id}-${Math.random()}`}
          contentContainerStyle={estilos.listaPadding}
        />
      ) : (
        <EmptyState
          emoji="📼"
          title="Nenhuma música reproduzida"
          description="Seu histórico aparecerá aqui quando você começar a ouvir!"
        />
      )}
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F0F1E',
  },
  listaPadding: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    paddingBottom: 30,
  },
});
