import { useState } from "react";
import {
    Alert,
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function Cadastro() {
  const [temp, setTemp] = useState("");
  const [umidade, setUmidade] = useState("");
  const [pressao, setPressao] = useState("");
  const [vento, setVento] = useState("");

  const handleSalvar = () => {
    if (!temp || !umidade || !pressao || !vento) {
      Alert.alert("Erro", "Preencha todos os campos");
      return;
    }

    // Aqui você pode adicionar a lógica para salvar os dados
    console.log("Dados do sensor:", { temp, umidade, pressao, vento });
    Alert.alert("Sucesso", "Dados salvos com sucesso!");
  };

  return (
    <KeyboardAvoidingView
      style={estilos.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={estilos.form}>
        <Text style={estilos.title}>Cadastro de Dados</Text>

        <View style={estilos.inputContainer}>
          <Text style={estilos.label}>Temperatura (°C)</Text>
          <TextInput
            style={estilos.input}
            placeholder="Ex: 25"
            placeholderTextColor="#999"
            keyboardType="numeric"
            value={temp}
            onChangeText={setTemp}
          />
        </View>

        <View style={estilos.inputContainer}>
          <Text style={estilos.label}>Umidade (%)</Text>
          <TextInput
            style={estilos.input}
            placeholder="Ex: 70"
            placeholderTextColor="#999"
            keyboardType="numeric"
            value={umidade}
            onChangeText={setUmidade}
          />
        </View>

        <View style={estilos.inputContainer}>
          <Text style={estilos.label}>Pressão (hPa)</Text>
          <TextInput
            style={estilos.input}
            placeholder="Ex: 1013"
            placeholderTextColor="#999"
            keyboardType="numeric"
            value={pressao}
            onChangeText={setPressao}
          />
        </View>

        <View style={estilos.inputContainer}>
          <Text style={estilos.label}>Vento (km/h)</Text>
          <TextInput
            style={estilos.input}
            placeholder="Ex: 15"
            placeholderTextColor="#999"
            keyboardType="numeric"
            value={vento}
            onChangeText={setVento}
          />
        </View>

        <TouchableOpacity style={estilos.button} onPress={handleSalvar}>
          <Text style={estilos.buttonText}>Salvar Dados</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A',
  },
  form: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: '800',
    color: '#F1F5F9',
    marginBottom: 36,
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  inputContainer: {
    marginBottom: 18,
  },
  label: {
    fontSize: 13,
    color: '#94A3B8',
    marginBottom: 8,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  input: {
    backgroundColor: '#1E293B',
    borderRadius: 14,
    padding: 16,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#334155',
    color: '#F1F5F9',
  },
  button: {
    backgroundColor: '#3B82F6',
    padding: 18,
    borderRadius: 14,
    alignItems: 'center',
    marginTop: 16,
    shadowColor: '#3B82F6',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});
