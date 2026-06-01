import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { musicas } from '../dados/musicas';

export default function Favoritos({ route, navigation }) {
  const { musicasFavoritas = [] } = route.params || {};

  const musicasFavoritadas = musicas.filter((musica) =>
    musicasFavoritas.includes(musica.id)
  );

  const renderMusicaCard = ({ item }) => (
    <TouchableOpacity
      style={estilos.cardMusica}
      onPress={() =>
        navigation.navigate('TocandoMusica', {
          musica: item,
          musicasFavoritas,
        })
      }
    >
      <View style={estilos.iconeAlbum}>
        <Text style={estilos.emojiCapa}>{item.capa}</Text>
      </View>
      <View style={estilos.infoMusica}>
        <Text style={estilos.tituloMusica}>{item.titulo}</Text>
        <Text style={estilos.artista}>{item.artista}</Text>
        <Text style={estilos.duracao}>{item.duracao}</Text>
      </View>
      <Text style={estilos.iconeFavorito}>❤️</Text>
    </TouchableOpacity>
  );

  return (
    <View style={estilos.container}>
      <View style={estilos.header}>
        <Text style={estilos.nomeApp}>❤️ Minhas Favoritas</Text>
        <Text style={estilos.quantidade}>
          {musicasFavoritadas.length} música{musicasFavoritadas.length !== 1 ? 's' : ''}
        </Text>
      </View>

      {musicasFavoritadas.length > 0 ? (
        <FlatList
          data={musicasFavoritadas}
          renderItem={renderMusicaCard}
          keyExtractor={(item) => item.id}
          contentContainerStyle={estilos.listaPadding}
        />
      ) : (
        <View style={estilos.vazio}>
          <Text style={estilos.textoVazio}>Nenhuma música favoritada</Text>
          <Text style={estilos.textoSubVazio}>
            Adicione suas músicas favoritas na tela inicial!
          </Text>
        </View>
      )}
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F0F1E',
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#1A1A2E',
  },
  nomeApp: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FF69B4',
    marginBottom: 5,
  },
  quantidade: {
    fontSize: 14,
    color: '#999',
  },
  listaPadding: {
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  cardMusica: {
    flexDirection: 'row',
    backgroundColor: '#1A1A2E',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    alignItems: 'center',
    borderLeftWidth: 4,
    borderLeftColor: '#FF69B4',
  },
  iconeAlbum: {
    width: 60,
    height: 60,
    backgroundColor: '#FF69B4',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  emojiCapa: {
    fontSize: 32,
  },
  infoMusica: {
    flex: 1,
  },
  tituloMusica: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 4,
  },
  artista: {
    fontSize: 13,
    color: '#999',
    marginBottom: 4,
  },
  duracao: {
    fontSize: 12,
    color: '#666',
  },
  iconeFavorito: {
    fontSize: 20,
    marginLeft: 10,
  },
  vazio: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  textoVazio: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#999',
    marginBottom: 10,
    textAlign: 'center',
  },
  textoSubVazio: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
});
