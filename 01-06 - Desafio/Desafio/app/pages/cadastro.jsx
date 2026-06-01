import { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from "react-native";

export default function Cadastro({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confSenha, setConfSenha] = useState('');

  const validarCadastro = () => {
    if (!nome.trim() || !email.trim() || !senha.trim() || !confSenha.trim()) {
      alert('Por favor, preencha todos os campos');
      return;
    }
    if (!email.includes('@')) {
      alert('Por favor, insira um e-mail válido');
      return;
    }
    if (senha.length < 6) {
      alert('A senha deve ter no mínimo 6 caracteres');
      return;
    }
    if (senha !== confSenha) {
      alert('As senhas não correspondem');
      return;
    }
    alert('Cadastro realizado com sucesso! Faça login para continuar.');
    navigation.navigate('Login');
  };

  return (
    <ScrollView 
      style={estilos.container}
      contentContainerStyle={estilos.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      <View style={estilos.header}>
        <Text style={estilos.emoji}>🎵</Text>
        <Text style={estilos.titulo}>Crie sua Conta</Text>
        <Text style={estilos.subtitulo}>Bem-vindo ao SoundWave</Text>
      </View>

      <View style={estilos.formulario}>
        <Text style={estilos.label}>Nome Completo</Text>
        <TextInput
          style={estilos.input}
          placeholder="João Silva"
          value={nome}
          onChangeText={setNome}
          placeholderTextColor="#999"
        />

        <Text style={estilos.label}>E-mail</Text>
        <TextInput
          style={estilos.input}
          placeholder="seu.email@example.com"
          value={email}
          onChangeText={setEmail}
          placeholderTextColor="#999"
          keyboardType="email-address"
        />

        <Text style={estilos.label}>Senha</Text>
        <TextInput
          style={estilos.input}
          placeholder="Mínimo 6 caracteres"
          value={senha}
          onChangeText={setSenha}
          placeholderTextColor="#999"
          secureTextEntry
        />

        <Text style={estilos.label}>Confirmar Senha</Text>
        <TextInput
          style={estilos.input}
          placeholder="Repita sua senha"
          value={confSenha}
          onChangeText={setConfSenha}
          placeholderTextColor="#999"
          secureTextEntry
        />

        <TouchableOpacity
          style={estilos.botaoCadastro}
          onPress={validarCadastro}
        >
          <Text style={estilos.botaoTexto}>Criar Conta</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={estilos.botaoVoltar}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={estilos.botaoVoltarTexto}>Já tem conta? Faça login</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F0F1E',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    paddingBottom: 40,
  },
  header: {
    alignItems: 'center',
    marginVertical: 30,
  },
  emoji: {
    fontSize: 50,
    marginBottom: 10,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#8B5FBF',
    marginBottom: 5,
  },
  subtitulo: {
    fontSize: 14,
    color: '#999',
  },
  formulario: {
    width: '100%',
  },
  label: {
    color: '#8B5FBF',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
    marginTop: 15,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#333',
    padding: 14,
    marginBottom: 15,
    borderRadius: 10,
    fontSize: 16,
    backgroundColor: '#1A1A2E',
    color: '#FFF',
  },
  botaoCadastro: {
    width: '100%',
    backgroundColor: '#FF69B4',
    padding: 16,
    borderRadius: 10,
    marginTop: 30,
    marginBottom: 15,
    alignItems: 'center',
    shadowColor: '#FF69B4',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  botaoVoltar: {
    width: '100%',
    borderWidth: 2,
    borderColor: '#8B5FBF',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 30,
  },
  botaoVoltarTexto: {
    color: '#8B5FBF',
    fontSize: 16,
    fontWeight: '600',
  },
});