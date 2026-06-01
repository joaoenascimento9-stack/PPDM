import { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { musicas, categorias } from '../dados/musicas';
import { useMusicaContext } from '../context/MusicaContext';
import { MusicaCard } from '../components/MusicaCard';
import { SectionHeader } from '../components/SectionHeader';

export default function Explorar({ navigation }) {
  const { adicionarFavorito, adicionarAoHistorico } = useMusicaContext();
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(null);

  const musicasFiltradas = categoriaSelecionada
    ? musicas.filter((m) => {
        const categoria = categorias.find((c) => c.id === categoriaSelecionada);
        return categoria && categoria.generos.includes(m.genero);
      })
    : [];

  const handleMusicaPress = (musica) => {
    adicionarAoHistorico(musica);
    navigation.navigate('TocandoMusica', { musica });
  };

  const handleFavoritoPress = (musicaId) => {
    adicionarFavorito(musicaId);
  };

  if (categoriaSelecionada) {
    const categoria = categorias.find((c) => c.id === categoriaSelecionada);
    return (
      <View style={estilos.container}>
        <View style={[estilos.headerCategoria, { backgroundColor: categoria.cor }]}>
          <TouchableOpacity
            style={estilos.botaoVoltar}
            onPress={() => setCategoriaSelecionada(null)}
          >
            <Text style={estilos.botaoVoltarTexto}>← Voltar</Text>
          </TouchableOpacity>
          <Text style={estilos.tituloCat}>{categoria.nome}</Text>
          <Text style={estilos.descricaoCat}>
            {musicasFiltradas.length} música{musicasFiltradas.length !== 1 ? 's' : ''}
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
          contentContainerStyle={estilos.listaPadding}
        />
      </View>
    );
  }

  return (
    <View style={estilos.container}>
      <SectionHeader
        title="🎵 Explorar"
        subtitle="Descubra músicas por gênero"
      />

      <ScrollView style={estilos.content} showsVerticalScrollIndicator={false}>
        <View style={estilos.categoriasGrid}>
          {categorias.map((categoria) => (
            <TouchableOpacity
              key={categoria.id}
              style={[
                estilos.cartaoCategoria,
                { backgroundColor: categoria.cor },
              ]}
              onPress={() => setCategoriaSelecionada(categoria.id)}
            >
              <Text style={estilos.emojiCategoria}>
                {categoria.nome.split(' ')[0]}
              </Text>
              <Text style={estilos.nomeCategoria}>{categoria.nome}</Text>
              <Text style={estilos.contagem}>
                {musicas.filter((m) =>
                  categoria.generos.includes(m.genero)
                ).length}{' '}
                músicas
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={estilos.secaoGeneros}>
          <Text style={estilos.tituloGeneros}>📊 Todos os Gêneros</Text>
          <View style={estilos.generosList}>
            {[
              'Pop',
              'Rock',
              'Hip-Hop/Rap',
              'Pop Eletrônico',
              'Indie Pop',
              'Disco-Pop',
              'Indie Rock',
            ].map((genero, idx) => (
              <TouchableOpacity key={idx} style={estilos.tagGenero}>
                <Text style={estilos.textGenero}>{genero}</Text>
              </TouchableOpacity>
            ))}
          </View>
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
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  headerCategoria: {
    paddingTop: 20,
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  botaoVoltar: {
    marginBottom: 12,
  },
  botaoVoltarTexto: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
  tituloCat: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 4,
  },
  descricaoCat: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.7)',
  },
  categoriasGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginVertical: 20,
  },
  cartaoCategoria: {
    width: '48%',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 5,
  },
  emojiCategoria: {
    fontSize: 32,
    marginBottom: 8,
  },
  nomeCategoria: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center',
    marginBottom: 4,
  },
  contagem: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.7)',
  },
  secaoGeneros: {
    marginVertical: 20,
    marginBottom: 30,
  },
  tituloGeneros: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 12,
  },
  generosList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  tagGenero: {
    backgroundColor: '#1A1A2E',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#8B5FBF',
  },
  textGenero: {
    color: '#8B5FBF',
    fontSize: 12,
    fontWeight: '600',
  },
  listaPadding: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    paddingBottom: 30,
  },
});
