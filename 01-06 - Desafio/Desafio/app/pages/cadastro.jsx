import { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useMusicaContext } from '../context/MusicaContext';
import { Input } from '../components/Input';
import { Button } from '../components/Button';

export default function Cadastro({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confSenha, setConfSenha] = useState('');
  const [erros, setErros] = useState({});
  const [carregando, setCarregando] = useState(false);
  const { setUsuarioLogado } = useMusicaContext();

  const validarEmail = (e) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(e);
  };

  const validarCadastro = () => {
    const novasErros = {};

    if (!nome.trim()) {
      novasErros.nome = 'Nome é obrigatório';
    } else if (nome.trim().length < 3) {
      novasErros.nome = 'Nome deve ter no mínimo 3 caracteres';
    }

    if (!email.trim()) {
      novasErros.email = 'E-mail é obrigatório';
    } else if (!validarEmail(email)) {
      novasErros.email = 'E-mail inválido';
    }

    if (!senha.trim()) {
      novasErros.senha = 'Senha é obrigatória';
    } else if (senha.length < 6) {
      novasErros.senha = 'Senha deve ter no mínimo 6 caracteres';
    }

    if (!confSenha.trim()) {
      novasErros.confSenha = 'Confirmação de senha é obrigatória';
    } else if (senha !== confSenha) {
      novasErros.confSenha = 'As senhas não correspondem';
    }

    setErros(novasErros);

    if (Object.keys(novasErros).length === 0) {
      setCarregando(true);
      setTimeout(() => {
        setUsuarioLogado({ email, nome });
        alert('🎉 Cadastro realizado com sucesso!');
        navigation.replace('Principal');
        setCarregando(false);
      }, 500);
    }
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
        <Text style={estilos.subtitulo}>Bem-vindo ao MusicFlow</Text>
      </View>

      <View style={estilos.formulario}>
        <Input
          label="Nome Completo"
          placeholder="João Silva"
          value={nome}
          onChangeText={setNome}
          icon="👤"
          error={erros.nome}
        />

        <Input
          label="E-mail"
          placeholder="seu.email@example.com"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          icon="📧"
          error={erros.email}
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

        <Input
          label="Confirmar Senha"
          placeholder="Repita sua senha"
          value={confSenha}
          onChangeText={setConfSenha}
          secureTextEntry
          icon="🔐"
          error={erros.confSenha}
        />

        <Button
          title={carregando ? "Criando conta..." : "Criar Conta"}
          onPress={validarCadastro}
          disabled={carregando}
          variant="primary"
        />

        <Button
          title="Já tem conta? Faça login"
          onPress={() => navigation.navigate('Login')}
          variant="secondary"
        />
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
});