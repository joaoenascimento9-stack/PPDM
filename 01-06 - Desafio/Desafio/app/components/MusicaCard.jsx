import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { useMusicaContext } from '../context/MusicaContext';

export function MusicaCard({ musica, onPress, onPressFavorito, showGenero = false }) {
  const { isFavorita } = useMusicaContext();
  const favoritada = isFavorita(musica.id);

  return (
    <TouchableOpacity
      style={[estilos.cardMusica, favoritada && estilos.cardFavoritada]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={estilos.iconeAlbum}>
        <Text style={estilos.emojiCapa}>{musica.capa}</Text>
      </View>
      <View style={estilos.infoMusica}>
        <Text style={estilos.tituloMusica} numberOfLines={1}>
          {musica.titulo}
        </Text>
        <Text style={estilos.artista} numberOfLines={1}>
          {musica.artista}
        </Text>
        {showGenero && (
          <Text style={estilos.genero} numberOfLines={1}>
            {musica.genero}
          </Text>
        )}
        <Text style={estilos.duracao}>{musica.duracao}</Text>
      </View>
      <TouchableOpacity
        style={estilos.botaoFavorito}
        onPress={() => onPressFavorito?.(musica.id)}
      >
        <Text style={estilos.iconeFavorito}>
          {favoritada ? '❤️' : '🤍'}
        </Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const estilos = StyleSheet.create({
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
  cardFavoritada: {
    borderLeftColor: '#FF69B4',
    backgroundColor: '#252541',
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
    marginBottom: 2,
  },
  artista: {
    fontSize: 13,
    color: '#999',
    marginBottom: 2,
  },
  genero: {
    fontSize: 11,
    color: '#8B5FBF',
    marginBottom: 2,
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
