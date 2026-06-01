import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useMusicaContext } from '../context/MusicaContext';
import { Button } from '../components/Button';

export default function TocandoMusica({ route, navigation }) {
  const { musica } = route.params || {};
  const { adicionarFavorito, isFavorita } = useMusicaContext();
  const [tocando, setTocando] = useState(true);
  const [progresso, setProgresso] = useState(0);
  const [tempoAtual, setTempoAtual] = useState('0:00');
  const [volume, setVolume] = useState(70);

  const favoritada = isFavorita(musica?.id);

  useEffect(() => {
    if (!tocando) return;

    const intervalo = setInterval(() => {
      setProgresso((prev) => {
        if (prev >= 100) {
          setTocando(false);
          return 0;
        }
        return prev + 2;
      });
    }, 500);

    return () => clearInterval(intervalo);
  }, [tocando]);

  useEffect(() => {
    const minutos = Math.floor((progresso / 100) * 180);
    const segundos = Math.floor(((progresso / 100) * 180) % 60);
    setTempoAtual(`${minutos}:${segundos.toString().padStart(2, '0')}`);
  }, [progresso]);

  if (!musica) {
    return (
      <View style={estilos.container}>
        <Text style={estilos.erro}>Música não encontrada</Text>
      </View>
    );
  }

  const proximaMusica = () => {
    setProgresso(0);
    setTocando(true);
  };

  const musicaAnterior = () => {
    setProgresso(0);
    setTocando(true);
  };

  return (
    <ScrollView style={estilos.container} showsVerticalScrollIndicator={false}>
      {/* Capa do álbum */}
      <View style={estilos.capaMaior}>
        <Text style={estilos.emojiCapaMaior}>{musica.capa}</Text>
      </View>

      {/* Informações da música */}
      <View style={estilos.infoMusica}>
        <Text style={estilos.tituloMusica}>{musica.titulo}</Text>
        <Text style={estilos.artista}>{musica.artista}</Text>
        <Text style={estilos.album}>{musica.album}</Text>
        <Text style={estilos.genero}>{musica.genero}</Text>
      </View>

      {/* Barra de progresso */}
      <View style={estilos.progressoContainer}>
        <View
          style={[
            estilos.barraProgresso,
            { width: `${progresso}%` },
          ]}
        />
      </View>
      <View style={estilos.tempoContainer}>
        <Text style={estilos.tempo}>{tempoAtual}</Text>
        <Text style={estilos.tempo}>{musica.duracao}</Text>
      </View>

      {/* Controles de reprodução */}
      <View style={estilos.controlesContainer}>
        <TouchableOpacity
          style={estilos.botaoControle}
          onPress={musicaAnterior}
        >
          <Text style={estilos.textoBotaoControle}>⏮️</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={estilos.botaoPlayGrande}
          onPress={() => setTocando(!tocando)}
        >
          <Text style={estilos.textoBotaoPlay}>
            {tocando ? '⏸️' : '▶️'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={estilos.botaoControle}
          onPress={proximaMusica}
        >
          <Text style={estilos.textoBotaoControle}>⏭️</Text>
        </TouchableOpacity>
      </View>

      {/* Botão de favorito */}
      <TouchableOpacity
        style={[
          estilos.botaoFavoritoGrande,
          favoritada && estilos.botaoFavoritoAtivo,
        ]}
        onPress={() => adicionarFavorito(musica.id)}
      >
        <Text style={estilos.textoBotaoFavorito}>
          {favoritada ? '❤️ Adicionado aos Favoritos' : '🤍 Adicionar aos Favoritos'}
        </Text>
      </TouchableOpacity>

      {/* Volume */}
      <View style={estilos.volumeContainer}>
        <Text style={estilos.volumeLabel}>🔊 Volume</Text>
        <View style={estilos.volumeBar}>
          <View
            style={[
              estilos.volumeFill,
              { width: `${volume}%` },
            ]}
          />
        </View>
        <Text style={estilos.volumeValue}>{volume}%</Text>
      </View>

      {/* Outras opções */}
      <View style={estilos.opcoesContainer}>
        <TouchableOpacity style={estilos.opcao}>
          <Text style={estilos.textoOpcao}>📱 Compartilhar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={estilos.opcao}>
          <Text style={estilos.textoOpcao}>➕ Playlist</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F0F1E',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  capaMaior: {
    width: 260,
    height: 260,
    backgroundColor: '#8B5FBF',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 30,
    shadowColor: '#FF69B4',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 15,
  },
  emojiCapaMaior: {
    fontSize: 120,
  },
  infoMusica: {
    alignItems: 'center',
    marginBottom: 30,
  },
  tituloMusica: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 8,
    textAlign: 'center',
  },
  artista: {
    fontSize: 18,
    color: '#8B5FBF',
    marginBottom: 4,
    textAlign: 'center',
    fontWeight: '600',
  },
  album: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
    marginBottom: 4,
  },
  genero: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    marginTop: 4,
  },
  progressoContainer: {
    height: 4,
    backgroundColor: '#333',
    borderRadius: 2,
    overflow: 'hidden',
    marginBottom: 10,
  },
  barraProgresso: {
    height: '100%',
    backgroundColor: '#FF69B4',
  },
  tempoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  tempo: {
    color: '#999',
    fontSize: 12,
  },
  controlesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 30,
  },
  botaoControle: {
    padding: 15,
  },
  textoBotaoControle: {
    fontSize: 28,
  },
  botaoPlayGrande: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#FF69B4',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#FF69B4',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 8,
  },
  textoBotaoPlay: {
    fontSize: 36,
  },
  botaoFavoritoGrande: {
    backgroundColor: '#1A1A2E',
    borderWidth: 2,
    borderColor: '#8B5FBF',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  botaoFavoritoAtivo: {
    backgroundColor: '#8B5FBF',
    borderColor: '#FF69B4',
  },
  textoBotaoFavorito: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  volumeContainer: {
    marginBottom: 30,
  },
  volumeLabel: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
  },
  volumeBar: {
    height: 6,
    backgroundColor: '#333',
    borderRadius: 3,
    overflow: 'hidden',
    marginBottom: 8,
  },
  volumeFill: {
    height: '100%',
    backgroundColor: '#FF69B4',
  },
  volumeValue: {
    color: '#999',
    fontSize: 12,
    textAlign: 'right',
  },
  opcoesContainer: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 30,
  },
  opcao: {
    flex: 1,
    backgroundColor: '#1A1A2E',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#333',
  },
  textoOpcao: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '600',
  },
  erro: {
    color: '#FFF',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 100,
  },
});
