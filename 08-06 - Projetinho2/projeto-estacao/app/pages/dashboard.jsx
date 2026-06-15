import { Ionicons } from "@expo/vector-icons";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import { BarChart, PieChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

export default function Dashboard() {
  // Dados fictícios de temperatura para os bairros de Mirandópolis
  const data = {
    labels: ["Centro", "Amandaba", "Aliança", "Colina", "Nosso Teto"],
    datasets: [
      {
        data: [29, 31, 28, 32, 30],
      },
    ],
  };
  const pieData = [
    {
      name: "Sol",
      population: 45,
      color: "#FF914D",
      legendFontColor: "#333",
      legendFontSize: 14
    },
    {
      name: "Chuva",
      population: 20,
      color: "#222222",
      legendFontColor: "#333",
      legendFontSize: 14
    },
    {
      name: "Nublado",
      population: 35,
      color: "#E0E0E0",
      legendFontColor: "#333",
      legendFontSize: 14
    }
  ];

  const chartConfig = {
    backgroundColor: "#1E2923",
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 1,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 1,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.7,
    useShadowColorFromDataset: false,
    decimalPlaces: 0,
  };

  return (
    <ScrollView
      style={estilos.container}
      contentContainerStyle={estilos.content}
    >
      <View style={estilos.header}>
        <View style={estilos.headerTitleContainer}>
          <Ionicons name="location-outline" size={28} color="#FF914D" />
          <Text style={estilos.title}>Mirandópolis, SP</Text>
        </View>
        <Text style={estilos.subtitle}>
          Monitoramento de Temperatura por Bairro
        </Text>
      </View>

      <View style={estilos.card}>
        <View style={estilos.cardHeader}>
          <Ionicons name="thermometer-outline" size={24} color="#FF914D" />
          <Text style={estilos.cardTitle}>Temperaturas Atuais</Text>
        </View>

        <BarChart
          data={data}
          width={screenWidth - 72} // Largura da tela menos paddings e margens
          height={260}
          yAxisLabel=""
          yAxisSuffix="°C"
          fromZero={true}
          showValuesOnTopOfBars={true}
          chartConfig={chartConfig}
          style={estilos.chart}
        />
      </View>

      <View style={estilos.card}>
        <View style={estilos.cardHeader}>
          <Ionicons name="pie-chart-outline" size={24} color="#FF914D" />
          <Text style={estilos.cardTitle}>Condições Climáticas</Text>
        </View>
        <PieChart
          data={pieData}
          width={screenWidth - 72}
          height={220}
          chartConfig={chartConfig}
          accessor={"population"}
          backgroundColor={"transparent"}
          paddingLeft={"15"}
          center={[10, 0]}
          absolute
        />
      </View>

      <View style={estilos.infoContainer}>
        <View style={estilos.infoBox}>
          <Text style={estilos.infoLabel}>Média Geral</Text>
          <Text style={estilos.infoValue}>30°C</Text>
        </View>
        <View style={estilos.infoBox}>
          <Text style={estilos.infoLabel}>Mais Quente</Text>
          <Text style={estilos.infoValue}>Colina (32°C)</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
  },
  content: {
    padding: 20,
  },
  header: {
    marginBottom: 24,
    marginTop: 10,
  },
  headerTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#333",
    marginLeft: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
  },
  card: {
    backgroundColor: "#FFF",
    borderRadius: 20,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 4,
    marginBottom: 20,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#444",
    marginLeft: 8,
  },
  chart: {
    borderRadius: 16,
    marginLeft: -15, // Ajuste fino para centralizar melhor o gráfico
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  infoBox: {
    backgroundColor: "#FFF",
    borderRadius: 16,
    padding: 16,
    width: "48%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
    alignItems: "center",
  },
  infoLabel: {
    fontSize: 14,
    color: "#888",
    marginBottom: 4,
    fontWeight: "600",
  },
  infoValue: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FF914D",
  },
});
