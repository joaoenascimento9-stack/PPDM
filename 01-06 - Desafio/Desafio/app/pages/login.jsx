import { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";

export default function Login({ navigation }) {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const validarLogin = () => {
    if (usuario.trim() === '' || senha.trim() === '') {
      alert('Por favor, preencha todos os campos');
      return;
    }
    if (!usuario.includes('@')) {
      alert('Por favor, insira um e-mail válido');
      return;
    }
    navigation.replace('Principal');
  };

  return (
    <View style={estilos.container}>
      <View style={estilos.header}>
        <Text style={estilos.emoji}>🎵</Text>
        <Text style={estilos.titulo}>SoundWave</Text>
        <Text style={estilos.subtitulo}>Sua música, seu ritmo</Text>
      </View>

      <View style={estilos.formulario}>
        <TextInput
          style={estilos.input}
          placeholder="E-mail"
          value={usuario}
          onChangeText={setUsuario}
          placeholderTextColor="#999"
          keyboardType="email-address"
        />

        <TextInput
          style={estilos.input}
          placeholder="Senha"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
          placeholderTextColor="#999"
        />

        <TouchableOpacity
          style={estilos.botaoPrincipal}
          onPress={validarLogin}
        >
          <Text style={estilos.botaoTexto}>Entrar</Text>
        </TouchableOpacity>

        <View style={estilos.divisor}>
          <View style={estilos.linha} />
          <Text style={estilos.textoOu}>ou</Text>
          <View style={estilos.linha} />
        </View>

        <TouchableOpacity
          style={estilos.botaoSecundario}
          onPress={() => navigation.navigate('Cadastro')}
        >
          <Text style={estilos.botaoTextoSecundario}>Criar nova conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#0F0F1E',
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  emoji: {
    fontSize: 60,
    marginBottom: 10,
  },
  titulo: {
    fontSize: 36,
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
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#333',
    padding: 16,
    marginBottom: 15,
    borderRadius: 10,
    fontSize: 16,
    backgroundColor: '#1A1A2E',
    color: '#FFF',
  },
  botaoPrincipal: {
    width: '100%',
    backgroundColor: '#FF69B4',
    padding: 16,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 20,
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
  divisor: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  linha: {
    flex: 1,
    height: 1,
    backgroundColor: '#333',
  },
  textoOu: {
    color: '#999',
    marginHorizontal: 10,
    fontSize: 14,
  },
  botaoSecundario: {
    width: '100%',
    borderWidth: 2,
    borderColor: '#8B5FBF',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  botaoTextoSecundario: {
    color: '#8B5FBF',
    fontSize: 16,
    fontWeight: '600',
  },
});