import { useState } from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import logo from "../assets/images/logo.jpg";

export default function Index() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function login() {
    console.log("Dados do Login");
    console.log({ email, senha });
  }

  return (
    <ScrollView contentContainerStyle={estilo.scrollContainer}>
      <View style={estilo.container}>
        <Image source={logo} resizeMode="contain" style={estilo.Imagem} />
        <Text style={estilo.titulo}>Login</Text>
        <Text style={estilo.sub}>Para prosseguir, insira os seus dados</Text>
      </View>
    </ScrollView>
  );
}

const estilo = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: "#f5f5f5",
  },
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  Imagem: {
    width: 150,
    height: 150,
    marginBottom: 40,
  },
  titulo: {
    fontSize: 32,
    fontWeight: "700",
    marginBottom: 12,
    color: "#222",
    textAlign: "center",
  },
  sub: {
    fontSize: 16,
    color: "#777",
    marginBottom: 0,
    textAlign: "center",
    lineHeight: 24,
  },
});
