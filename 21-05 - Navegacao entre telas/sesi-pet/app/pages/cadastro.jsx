import { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";


export default function Cadastro({navigation}){

    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')
    const [confSenha, setConfSenha] = useState('')


    return(
        <View style={estilos.container}>
            <Text style={estilos.titulo}>Pet Shop App</Text>

            <TextInput 
            style={estilos.input}
            placeholder="E-mail"
            value={usuario}
            onChangeText={setUsuario}
            />

            <TextInput 
            style={estilos.input}
            placeholder="Confirmar Senha"
            value={confSenha}
            onChangeText={setConfSenha}
            secureTextEntry
            />

            <TextInput 
            style={estilos.input}
            placeholder="Senha"
            value={senha}
            onChangeText={setSenha}
            secureTextEntry
            />
            
            <TouchableOpacity
            style={estilos.botao}
            onPress={() => navigation.replace('Login')}>

            <Text style={estilos.botaoTexto}> Cadastrar </Text>
            </TouchableOpacity>

        </View>
    )
}

const estilos = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 12,
    marginBottom: 15,
    borderRadius: 8,
    fontSize: 16,
  },
  botao: {
    width: '100%',
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
})