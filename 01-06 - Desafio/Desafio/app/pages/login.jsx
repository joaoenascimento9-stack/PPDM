import { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useMusicaContext } from '../context/MusicaContext';
import { Input } from '../components/Input';
import { Button } from '../components/Button';

export default function Login({ navigation }) {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [erros, setErros] = useState({});
  const [carregando, setCarregando] = useState(false);
  const { setUsuarioLogado } = useMusicaContext();

  const validarEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validarLogin = async () => {
    const novasErros = {};

    if (!usuario.trim()) {
      novasErros.usuario = 'E-mail é obrigatório';
    } else if (!validarEmail(usuario)) {
      novasErros.usuario = 'E-mail inválido';
    }

    if (!senha.trim()) {
      novasErros.senha = 'Senha é obrigatória';
    } else if (senha.length < 6) {
      novasErros.senha = 'Senha deve ter no mínimo 6 caracteres';
    }

    setErros(novasErros);

    if (Object.keys(novasErros).length === 0) {
      setCarregando(true);
      // Simula chamada de API
      setTimeout(() => {
        setUsuarioLogado({ email: usuario, nome: usuario.split('@')[0] });
        navigation.replace('Principal');
        setCarregando(false);
      }, 500);
    }
  };

  return (
    <ScrollView style={estilos.container} contentContainerStyle={estilos.scrollContent}>
      <View style={estilos.header}>
        <Text style={estilos.emoji}>🎵</Text>
        <Text style={estilos.titulo}>MusicFlow</Text>
        <Text style={estilos.subtitulo}>Sua música, seu ritmo</Text>
      </View>

      <View style={estilos.formulario}>
        <Input
          label="E-mail"
          placeholder="seu.email@example.com"
          value={usuario}
          onChangeText={setUsuario}
          keyboardType="email-address"
          icon="📧"
          error={erros.usuario}
        />

        <Input
          label="Senha"
          placeholder="Mínimo 6 caracteres"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
          icon="🔐"
          error={erros.senha}
        />

        <Button
          title={carregando ? "Entrando..." : "Entrar"}
          onPress={validarLogin}
          disabled={carregando}
          variant="primary"
        />

        <View style={estilos.divisor}>
          <View style={estilos.linha} />
          <Text style={estilos.textoOu}>ou</Text>
          <View style={estilos.linha} />
        </View>

        <Button
          title="Criar nova conta"
          onPress={() => navigation.navigate('Cadastro')}
          variant="secondary"
        />

        <Text style={estilos.textoDemo}>
          Demo: Use qualquer email com @, senha com 6+ caracteres
        </Text>
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
    justifyContent: 'center',
    minHeight: '100%',
    padding: 20,
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
  divisor: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 24,
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
  textoDemo: {
    color: '#666',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 16,
    fontStyle: 'italic',
  },
});