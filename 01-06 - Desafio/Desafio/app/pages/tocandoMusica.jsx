import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function TocandoMusica({ route, navigation }) {
  const { musica } = route.params || {};
  const [tocando, setTocando] = useState(true);
  const [isFavorita, setIsFavorita] = useState(false);
  const [progresso, setProgresso] = useState(0);

  if (!musica) {
    return (
      <View style={estilos.container}>
        <Text style={estilos.erro}>Música não encontrada</Text>
      </View>
    );
  }

  const simularProgresso = () => {
    if (progresso < 100) {
      setProgresso(progresso + 10);
    } else {
      setProgresso(0);
    }
  };

  return (
    <View style={estilos.container}>
      <TouchableOpacity
        style={estilos.botaoVoltar}
        onPress={() => navigation.goBack()}
      >
        <Text style={estilos.textoBotaoVoltar}>← Voltar</Text>
      </TouchableOpacity>

      {/* Capa do álbum */}
      <View style={estilos.capaMaior}>
        <Text style={estilos.emojiCapaMaior}>{musica.capa}</Text>
      </View>

      {/* Informações da música */}
      <View style={estilos.infoMusica}>
        <Text style={estilos.tituloMusica}>{musica.titulo}</Text>
        <Text style={estilos.artista}>{musica.artista}</Text>
        <Text style={estilos.album}>{musica.album}</Text>
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
        <Text style={estilos.tempo}>0:00</Text>
        <Text style={estilos.tempo}>{musica.duracao}</Text>
      </View>

      {/* Controles de reprodução */}
      <View style={estilos.controlesContainer}>
        <TouchableOpacity style={estilos.botaoControle}>
          <Text style={estilos.textoBotaoControle}>⏮️</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={estilos.botaoPlayGrande}
          onPress={() => {
            setTocando(!tocando);
            simularProgresso();
          }}
        >
          <Text style={estilos.textoBotaoPlay}>
            {tocando ? '⏸️' : '▶️'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={estilos.botaoControle}>
          <Text style={estilos.textoBotaoControle}>⏭️</Text>
        </TouchableOpacity>
      </View>

      {/* Botão de favorito */}
      <TouchableOpacity
        style={estilos.botaoFavoritoGrande}
        onPress={() => setIsFavorita(!isFavorita)}
      >
        <Text style={estilos.textoBotaoFavorito}>
          {isFavorita ? '❤️ Adicionado aos Favoritos' : '🤍 Adicionar aos Favoritos'}
        </Text>
      </TouchableOpacity>

      {/* Outras opções */}
      <View style={estilos.opcoesContainer}>
        <TouchableOpacity style={estilos.opcao}>
          <Text style={estilos.textoOpcao}>🔊 Volume</Text>
        </TouchableOpacity>
        <TouchableOpacity style={estilos.opcao}>
          <Text style={estilos.textoOpcao}>📱 Compartilhar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F0F1E',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 30,
  },
  botaoVoltar: {
    paddingVertical: 10,
    marginBottom: 20,
  },
  textoBotaoVoltar: {
    color: '#8B5FBF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  erro: {
    color: '#FFF',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 100,
  },
  capaMaior: {
    width: 250,
    height: 250,
    backgroundColor: '#8B5FBF',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 40,
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
  },
  album: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
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
    backgroundColor: '#FF69B4',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#FF69B4',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 15,
    elevation: 12,
  },
  textoBotaoPlay: {
    fontSize: 40,
  },
  botaoFavoritoGrande: {
    backgroundColor: '#1A1A2E',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FF69B4',
    marginBottom: 20,
  },
  textoBotaoFavorito: {
    color: '#FF69B4',
    fontSize: 16,
    fontWeight: 'bold',
  },
  opcoesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  opcao: {
    padding: 12,
    backgroundColor: '#1A1A2E',
    borderRadius: 8,
    paddingHorizontal: 20,
  },
  textoOpcao: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '600',
  },
});
