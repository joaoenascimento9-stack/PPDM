import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  StyleSheet,
  Image,
} from "react-native";
import Header from "../components/header";
import Tarefas from "./dados/tarefas";

export default function Index() {
  return (
    <View>
      <Header titulo="Minha Lista de Tarefas" />
    </View>
  );
}
