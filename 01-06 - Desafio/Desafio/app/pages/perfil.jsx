import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useMusicaContext } from '../context/MusicaContext';
import { Button } from '../components/Button';

export default function Perfil({ navigation }) {
  const { usuarioLogado, setUsuarioLogado, musicasFavoritas, historico } = useMusicaContext();

  const handleLogout = () => {
    setUsuarioLogado(null);
    navigation.replace('Login');
  };

  return (
    <ScrollView style={estilos.container} showsVerticalScrollIndicator={false}>
      {/* Cabeçalho do Perfil */}
      <View style={estilos.header}>
        <View style={estilos.avatar}>
          <Text style={estilos.emojiAvatar}>🎵</Text>
        </View>
        <Text style={estilos.nomeUsuario}>{usuarioLogado?.nome || 'Usuário'}</Text>
        <Text style={estilos.email}>{usuarioLogado?.email || 'email@example.com'}</Text>
      </View>

      {/* Estatísticas */}
      <View style={estilos.estatisticas}>
        <View style={estilos.cartaoEstat}>
          <Text style={estilos.numeroEstat}>{musicasFavoritas.length}</Text>
          <Text style={estilos.textoEstat}>Favoritas</Text>
        </View>
        <View style={estilos.cartaoEstat}>
          <Text style={estilos.numeroEstat}>{historico.length}</Text>
          <Text style={estilos.textoEstat}>Reproduzidas</Text>
        </View>
        <View style={estilos.cartaoEstat}>
          <Text style={estilos.numeroEstat}>15</Text>
          <Text style={estilos.textoEstat}>Total</Text>
        </View>
      </View>

      {/* Opções */}
      <View style={estilos.secao}>
        <Text style={estilos.tituloSecao}>⚙️ Preferências</Text>
        <TouchableOpacity style={estilos.opcao}>
          <View style={estilos.opcaoConteudo}>
            <Text style={estilos.opcaoTexto}>🎨 Tema Escuro</Text>
            <Text style={estilos.status}>✓ Ativado</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={estilos.opcao}>
          <View style={estilos.opcaoConteudo}>
            <Text style={estilos.opcaoTexto}>📢 Notificações</Text>
            <Text style={estilos.status}>✓ Ativado</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={estilos.opcao}>
          <View style={estilos.opcaoConteudo}>
            <Text style={estilos.opcaoTexto}>🎯 Qualidade de Áudio</Text>
            <Text style={estilos.status}>Alta</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Informações */}
      <View style={estilos.secao}>
        <Text style={estilos.tituloSecao}>ℹ️ Informações</Text>
        <TouchableOpacity style={estilos.opcao}>
          <Text style={estilos.opcaoTexto}>📱 Sobre o App</Text>
        </TouchableOpacity>
        <TouchableOpacity style={estilos.opcao}>
          <Text style={estilos.opcaoTexto}>📋 Privacidade</Text>
        </TouchableOpacity>
        <TouchableOpacity style={estilos.opcao}>
          <Text style={estilos.opcaoTexto}>⚖️ Termos de Uso</Text>
        </TouchableOpacity>
      </View>

      {/* Logout */}
      <View style={estilos.secaoLogout}>
        <Button
          title="🚪 Sair da Conta"
          onPress={handleLogout}
          variant="secondary"
        />
        <Text style={estilos.textoVersion}>MusicFlow v1.0.0</Text>
      </View>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F0F1E',
  },
  header: {
    alignItems: 'center',
    paddingVertical: 30,
    backgroundColor: '#1A1A2E',
    marginBottom: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#8B5FBF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    shadowColor: '#FF69B4',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  emojiAvatar: {
    fontSize: 40,
  },
  nomeUsuario: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 4,
  },
  email: {
    fontSize: 14,
    color: '#999',
  },
  estatisticas: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    gap: 12,
    marginBottom: 20,
  },
  cartaoEstat: {
    flex: 1,
    backgroundColor: '#1A1A2E',
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderRadius: 12,
    alignItems: 'center',
    borderLeftWidth: 4,
    borderLeftColor: '#8B5FBF',
  },
  numeroEstat: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FF69B4',
    marginBottom: 4,
  },
  textoEstat: {
    fontSize: 12,
    color: '#999',
    textAlign: 'center',
  },
  secao: {
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  tituloSecao: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 12,
  },
  opcao: {
    backgroundColor: '#1A1A2E',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 10,
    marginBottom: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#FF69B4',
  },
  opcaoConteudo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  opcaoTexto: {
    fontSize: 14,
    color: '#FFF',
    fontWeight: '600',
  },
  status: {
    fontSize: 12,
    color: '#8B5FBF',
    fontWeight: '600',
  },
  secaoLogout: {
    paddingHorizontal: 16,
    paddingBottom: 30,
  },
  textoVersion: {
    textAlign: 'center',
    color: '#666',
    fontSize: 12,
    marginTop: 16,
  },
});
