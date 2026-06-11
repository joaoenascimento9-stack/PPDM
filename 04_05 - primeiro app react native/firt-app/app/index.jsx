import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import Foto from "../assets/images/choso.jpg";

export default function Index() {
  return (
    <ScrollView style={estilos.container}>
      <Text style={estilos.titulo}>Meu primeiro app</Text>
      <Image source={Foto} style={estilos.Imagem} />

      <View style={estilos.card}>
        <Text style={estilos.subtitulo}>Sobre o App</Text>
        <Text style={estilos.texto}>
          Motivos do porque a LOUD vai se classificar
        </Text>
      </View>

      <View style={estilos.card}>
        <Text style={estilos.subtitulo}>motivos:</Text>
        <Text style={estilos.item}>- Temos o luk-xo</Text>
        <Text style={estilos.item}>- temos um prodigio chamado Edge</Text>
        <Text style={estilos.item}>- TEMOS O MELHOR PODER DE TODOS A FÉ</Text>
      </View>

      <View style={estilos.card}>
        <Text style={estilos.subtitulo}>
          O que eu preciso para assistir o jogo da loud
        </Text>
        <Text style={estilos.item}>- Bíblia</Text>
        <Text style={estilos.item}>- Água benta</Text>
        <Text style={estilos.item}>- Fé</Text>
        <Text style={estilos.item}>- Oração</Text>
      </View>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5e0909",
    paddingTop: 20,
  },
  titulo: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  Imagem: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
    alignSelf: "center",
  },
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    marginTop: 20,
    marginHorizontal: 10,
    marginBottom: 20,
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  texto: {
    fontSize: 16,
    color: "#666",
    lineHeight: 24,
  },
  item: {
    fontSize: 16,
    color: "#333",
    marginBottom: 8,
  },
});
