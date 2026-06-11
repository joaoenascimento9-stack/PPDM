import { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import clima from '../../assets/images/clima.jpg'

export default function Login({ navigation }) {
  const [usuario, setUsuario] = useState('')
  const [senha, setSenha] = useState('')

  return (
    <KeyboardAvoidingView 
      style={estilos.container} 
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={estilos.scrollContainer} keyboardShouldPersistTaps="handled">
        <View style={estilos.imageContainer}>
          <Image source={clima} style={estilos.image} />
          <View style={estilos.overlay}>
            <Text style={estilos.title}>Estação Meteorológica</Text>
            <Text style={estilos.subtitle}>Acompanhe o clima em tempo real</Text>
          </View>
        </View>

        <View style={estilos.formContainer}>
          <Text style={estilos.welcomeText}>Bem-vindo de volta!</Text>
          
          <View style={estilos.inputContainer}>
            <TextInput
              style={estilos.input}
              placeholder="E-mail"
              placeholderTextColor="#888"
              value={usuario}
              onChangeText={setUsuario}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={estilos.inputContainer}>
            <TextInput
              style={estilos.input}
              placeholder="Senha"
              placeholderTextColor="#888"
              secureTextEntry
              value={senha}
              onChangeText={setSenha}
            />
          </View>

          <TouchableOpacity
            style={estilos.button}
            onPress={() => navigation.replace('Inicio')}
            activeOpacity={0.8}
          >
            <Text style={estilos.buttonText}>Acessar</Text>
          </TouchableOpacity>

          <View style={estilos.registerContainer}>
            <Text style={estilos.registerText}>Ainda não tem conta? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Registro')}>
              <Text style={estilos.registerLink}>Criar conta</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  imageContainer: {
    height: 300,
    width: '100%',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#EEE',
    textAlign: 'center',
  },
  formContainer: {
    flex: 1,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -30,
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: '600',
    color: '#333',
    marginBottom: 24,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 16,
  },
  input: {
    backgroundColor: '#F0F4F8',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: '#333',
    borderWidth: 1,
    borderColor: '#E1E8ED',
  },
  button: {
    backgroundColor: '#FF914D',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#FF914D',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 24,
  },
  registerText: {
    color: '#666',
    fontSize: 15,
  },
  registerLink: {
    color: '#FF914D',
    fontSize: 15,
    fontWeight: 'bold',
  },
});