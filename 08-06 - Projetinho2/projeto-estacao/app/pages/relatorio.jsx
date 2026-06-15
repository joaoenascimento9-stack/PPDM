import { useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

// Dados fictícios de medições da estação meteorológica
const medicoes = [
  {
    id: "1",
    bairro: "Centro",
    data: "15/06/2026 08:00",
    temperatura: 24,
    humidade: 72,
    vento: 12,
    icone: "https://cdn-icons-png.flaticon.com/512/869/869869.png",
  },
  {
    id: "2",
    bairro: "Amandaba",
    data: "15/06/2026 08:15",
    temperatura: 23,
    humidade: 80,
    vento: 8,
    icone: "https://cdn-icons-png.flaticon.com/512/414/414825.png",
  },
  {
    id: "3",
    bairro: "Aliança",
    data: "15/06/2026 08:30",
    temperatura: 26,
    humidade: 65,
    vento: 18,
    icone: "https://cdn-icons-png.flaticon.com/512/1163/1163624.png",
  },
  {
    id: "4",
    bairro: "Colina",
    data: "15/06/2026 08:45",
    temperatura: 28,
    humidade: 58,
    vento: 22,
    icone: "https://cdn-icons-png.flaticon.com/512/869/869869.png",
  },
  {
    id: "5",
    bairro: "Nosso Teto",
    data: "15/06/2026 09:00",
    temperatura: 25,
    humidade: 70,
    vento: 15,
    icone: "https://cdn-icons-png.flaticon.com/512/414/414825.png",
  },
  {
    id: "6",
    bairro: "Jardim Europa",
    data: "15/06/2026 09:15",
    temperatura: 27,
    humidade: 62,
    vento: 10,
    icone: "https://cdn-icons-png.flaticon.com/512/1163/1163624.png",
  },
];

// Função para colorir a temperatura
function corTemperatura(temp) {
  if (temp <= 20) return "#60A5FA"; // azul frio
  if (temp <= 26) return "#34D399"; // verde ameno
  if (temp <= 30) return "#FBBF24"; // amarelo quente
  return "#F87171"; // vermelho muito quente
}

// Card de cada medição
function CardMedicao({ item, onPress }) {
  return (
    <TouchableOpacity
      style={estilos.card}
      onPress={onPress}
      activeOpacity={0.8}
    >
      {/* Ícone do tempo */}
      <Image source={{ uri: item.icone }} style={estilos.icone} />

      {/* Informações do bairro */}
      <View style={estilos.cardInfo}>
        <Text style={estilos.cardBairro}>{item.bairro}</Text>
        <Text style={estilos.cardData}>{item.data}</Text>

        {/* Linha de métricas */}
        <View style={estilos.metricas}>
          {/* Temperatura */}
          <View style={estilos.metricaItem}>
            <Text style={estilos.metricaLabel}>🌡 Temp.</Text>
            <Text
              style={[
                estilos.metricaValor,
                { color: corTemperatura(item.temperatura) },
              ]}
            >
              {item.temperatura}°C
            </Text>
          </View>

          {/* Humidade */}
          <View style={estilos.metricaItem}>
            <Text style={estilos.metricaLabel}>💧 Umid.</Text>
            <Text style={[estilos.metricaValor, { color: "#60A5FA" }]}>
              {item.humidade}%
            </Text>
          </View>

          {/* Vento */}
          <View style={estilos.metricaItem}>
            <Text style={estilos.metricaLabel}>💨 Vento</Text>
            <Text style={[estilos.metricaValor, { color: "#A78BFA" }]}>
              {item.vento} km/h
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default function Relatorio() {
  const [selecionado, setSelecionado] = useState(null);

  // Calcular médias
  const mediaTemp = (
    medicoes.reduce((acc, m) => acc + m.temperatura, 0) / medicoes.length
  ).toFixed(1);
  const mediaUmid = (
    medicoes.reduce((acc, m) => acc + m.humidade, 0) / medicoes.length
  ).toFixed(1);
  const mediaVento = (
    medicoes.reduce((acc, m) => acc + m.vento, 0) / medicoes.length
  ).toFixed(1);

  const handleCardPress = (id) => {
    setSelecionado(selecionado === id ? null : id);
  };

  return (
    <View style={estilos.container}>
      {/* Cabeçalho */}
      <View style={estilos.header}>
        <Text style={estilos.headerTitulo}>📊 Relatório de Medições</Text>
        <Text style={estilos.headerSubtitulo}>Mirandópolis, SP — Hoje</Text>
      </View>

      {/* Cards de resumo */}
      <View style={estilos.resumoRow}>
        <View style={[estilos.resumoCard, { borderColor: "#FBBF24" }]}>
          <Text style={estilos.resumoLabel}>🌡 Média Temp.</Text>
          <Text style={[estilos.resumoValor, { color: "#FBBF24" }]}>
            {mediaTemp}°C
          </Text>
        </View>
        <View style={[estilos.resumoCard, { borderColor: "#60A5FA" }]}>
          <Text style={estilos.resumoLabel}>💧 Média Umid.</Text>
          <Text style={[estilos.resumoValor, { color: "#60A5FA" }]}>
            {mediaUmid}%
          </Text>
        </View>
        <View style={[estilos.resumoCard, { borderColor: "#A78BFA" }]}>
          <Text style={estilos.resumoLabel}>💨 Média Vento</Text>
          <Text style={[estilos.resumoValor, { color: "#A78BFA" }]}>
            {mediaVento} km/h
          </Text>
        </View>
      </View>

      {/* Título da lista */}
      <Text style={estilos.listaTitulo}>Medições por Bairro</Text>

      {/* Lista de medições */}
      <FlatList
        data={medicoes}
        keyExtractor={(item) => item.id}
        contentContainerStyle={estilos.listaConteudo}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <CardMedicao
            item={item}
            onPress={() => handleCardPress(item.id)}
          />
        )}
      />
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
    paddingTop: 50,
  },

  // Cabeçalho
  header: {
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  headerTitulo: {
    fontSize: 26,
    fontWeight: "800",
    color: "#F1F5F9",
    letterSpacing: 0.5,
  },
  headerSubtitulo: {
    fontSize: 14,
    color: "#64748B",
    marginTop: 4,
  },

  // Cards de resumo
  resumoRow: {
    flexDirection: "row",
    paddingHorizontal: 16,
    justifyContent: "space-between",
    marginBottom: 20,
  },
  resumoCard: {
    flex: 1,
    backgroundColor: "#1E293B",
    borderRadius: 14,
    padding: 12,
    marginHorizontal: 4,
    alignItems: "center",
    borderWidth: 1,
  },
  resumoLabel: {
    fontSize: 11,
    color: "#94A3B8",
    marginBottom: 6,
    fontWeight: "600",
    textAlign: "center",
  },
  resumoValor: {
    fontSize: 18,
    fontWeight: "800",
  },

  // Título da lista
  listaTitulo: {
    fontSize: 16,
    fontWeight: "700",
    color: "#94A3B8",
    textTransform: "uppercase",
    letterSpacing: 1,
    paddingHorizontal: 20,
    marginBottom: 10,
  },

  // Lista
  listaConteudo: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },

  // Card de medição
  card: {
    backgroundColor: "#1E293B",
    borderRadius: 18,
    padding: 16,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#334155",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  icone: {
    width: 52,
    height: 52,
    borderRadius: 12,
    backgroundColor: "#0F172A",
    marginRight: 14,
  },
  cardInfo: {
    flex: 1,
  },
  cardBairro: {
    fontSize: 17,
    fontWeight: "700",
    color: "#F1F5F9",
    marginBottom: 2,
  },
  cardData: {
    fontSize: 12,
    color: "#64748B",
    marginBottom: 10,
  },
  metricas: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  metricaItem: {
    alignItems: "center",
  },
  metricaLabel: {
    fontSize: 11,
    color: "#64748B",
    marginBottom: 3,
  },
  metricaValor: {
    fontSize: 15,
    fontWeight: "700",
  },
});