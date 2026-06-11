import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Header from "../components/header";
import Tarefas from "./dados/tarefas";

function ItemTarefa({ item }) {
  return (
    <View style={estilos.card}>
      <Image source={{ uri: item.photo }} style={estilos.imagem} />
      <Text style={estilos.titulo}>{item.title}</Text>
      <Text style={estilos.descricao}>{item.description}</Text>
    </View>
  );
}

export default function Index() {
  return (
    <SafeAreaView style={estilos.container}>
      <Header titulo="Minha Lista de Tarefas" />
      <FlatList
        data={Tarefas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ItemTarefa item={item} />}
      />
    </SafeAreaView>
  );
}
const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f4f8",
    paddingVertical: 10,
  },
  card: {
    backgroundColor: "#fff",
    margin: 12,
    marginVertical: 8,
    borderRadius: 16,
    overflow: "hidden",
    elevation: 5,
    shadowColor: "#1a1a1a",
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  imagem: {
    width: "100%",
    height: 220,
    backgroundColor: "#e0e0e0",
  },
  titulo: {
    fontSize: 18,
    fontWeight: "700",
    padding: 14,
    paddingBottom: 8,
    color: "#1a1a1a",
    letterSpacing: 0.3,
  },
  status: {
    fontSize: 11,
    paddingHorizontal: 14,
    paddingBottom: 8,
    color: "#fff",
    fontWeight: "600",
    backgroundColor: "#6366f1",
    borderRadius: 20,
    alignSelf: "flex-start",
    marginLeft: 14,
    paddingVertical: 6,
    paddingHorizontal: 12,
    overflow: "hidden",
  },
  descricao: {
    fontSize: 13,
    padding: 14,
    paddingTop: 8,
    color: "#555",
    lineHeight: 20,
  },
});
