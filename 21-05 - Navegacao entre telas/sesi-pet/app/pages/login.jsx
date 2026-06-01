import { useState } from "react";
import { View, Text, StyleSheet,TextInput, TouchableOpacity} from "react-native";
export default function Login({navigation}){
    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')

    return(
        <View style={estilos.container}>
      <Text style={estilos.titulo}>Pet Shop App</Text>

      <TextInput
        style={estilos.input}
        placeholder="E-mail"
        value={usuario}
        onChangeText={setUsuario}
        placeholderTextColor="#999"
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
        onPress={() => navigation.replace('Principal')}
      >
        <Text style={estilos.botaoTexto}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={estilos.botaoSecundario} onPress={() => navigation.navigate('Cadastro')}>
        <Text style={estilos.botaoTextoSecundario}>Criar conta</Text>
      </TouchableOpacity>
    </View>
    )
}

const estilos = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    titulo: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 40,
        color: '#333',
        textAlign: 'center',
    },
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 15,
        marginBottom: 15,
        borderRadius: 8,
        fontSize: 16,
        backgroundColor: '#fff',
    },
    botaoPrincipal: {
        width: '100%',
        backgroundColor: '#007AFF',
        padding: 16,
        borderRadius: 8,
        marginTop: 20,
        marginBottom: 12,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
    },
    botaoTexto: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    botaoSecundario: {
        width: '100%',
        borderWidth: 2,
        borderColor: '#007AFF',
        padding: 14,
        borderRadius: 8,
        alignItems: 'center',
    },
    botaoTextoSecundario: {
        color: '#007AFF',
        fontSize: 16,
        fontWeight: '600',
    },
})