import { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { musicas } from '../dados/musicas';

export default function TelaInicial({ navigation }) {
  const [musicasFavoritas, setMusicasFavoritas] = useState([]);

  const adicionarFavorito = (id) => {
    if (musicasFavoritas.includes(id)) {
      setMusicasFavoritas(musicasFavoritas.filter(fav => fav !== id));
    } else {
      setMusicasFavoritas([...musicasFavoritas, id]);
    }
  };

  const renderMusicaCard = ({ item }) => (
    <TouchableOpacity
      style={estilos.cardMusica}
      onPress={() =>
        navigation.navigate('TocandoMusica', {
          musica: item,
          musicasFavoritas,
          setMusicasFavoritas,
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
      <TouchableOpacity
        style={estilos.botaoFavorito}
        onPress={() => adicionarFavorito(item.id)}
      >
        <Text style={estilos.iconeFavorito}>
          {musicasFavoritas.includes(item.id) ? '❤️' : '🤍'}
        </Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={estilos.container}>
      <View style={estilos.header}>
        <Text style={estilos.saudacao}>Bem-vindo ao</Text>
        <Text style={estilos.nomeApp}>SoundWave</Text>
      </View>

      <ScrollView style={estilos.secoes}>
        <View style={estilos.secao}>
          <View style={estilos.cabecalhoSecao}>
            <Text style={estilos.tituloSecao}>🎵 Recomendado para você</Text>
          </View>
          <FlatList
            data={musicas}
            renderItem={renderMusicaCard}
            keyExtractor={(item) => item.id}
            scrollEnabled={false}
          />
        </View>
      </ScrollView>
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
  saudacao: {
    fontSize: 14,
    color: '#999',
    marginBottom: 5,
  },
  nomeApp: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#8B5FBF',
  },
  secoes: {
    flex: 1,
    paddingHorizontal: 15,
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
    backgroundColor: '#8B5FBF',
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
  botaoFavorito: {
    padding: 8,
  },
  iconeFavorito: {
    fontSize: 20,
  },
});
