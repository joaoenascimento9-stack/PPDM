import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Registro({ navigation }) {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    return (
        <KeyboardAvoidingView 
            style={estilos.container} 
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
            <ScrollView contentContainerStyle={estilos.scrollContainer} keyboardShouldPersistTaps="handled">
                <View style={estilos.header}>
                    <View style={estilos.iconContainer}>
                        <Ionicons name="person-add-outline" size={50} color="#FF914D" />
                    </View>
                    <Text style={estilos.title}>Crie sua conta</Text>
                    <Text style={estilos.subtitle}>Preencha os dados para se cadastrar</Text>
                </View>

                <View style={estilos.formContainer}>
                    <View style={estilos.inputGroup}>
                        <Text style={estilos.label}>Nome Completo</Text>
                        <TextInput
                            style={estilos.input}
                            placeholder="Digite seu nome"
                            placeholderTextColor="#888"
                            value={nome}
                            onChangeText={setNome}
                        />
                    </View>

                    <View style={estilos.inputGroup}>
                        <Text style={estilos.label}>E-mail</Text>
                        <TextInput
                            style={estilos.input}
                            placeholder="Digite seu e-mail"
                            placeholderTextColor="#888"
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                    </View>

                    <View style={estilos.inputGroup}>
                        <Text style={estilos.label}>Senha</Text>
                        <TextInput
                            style={estilos.input}
                            placeholder="Digite sua senha"
                            placeholderTextColor="#888"
                            secureTextEntry
                            value={senha}
                            onChangeText={setSenha}
                        />
                    </View>

                    <TouchableOpacity 
                        style={estilos.button}
                        activeOpacity={0.8}
                        onPress={() => navigation.replace('Inicio')}
                    >
                        <Text style={estilos.buttonText}>Cadastrar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={estilos.backButton}
                        activeOpacity={0.6}
                        onPress={() => navigation.goBack()}
                    >
                        <Text style={estilos.backButtonText}>Já tenho uma conta</Text>
                    </TouchableOpacity>
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
        padding: 24,
        justifyContent: 'center',
    },
    header: {
        alignItems: 'center',
        marginBottom: 40,
        marginTop: 20,
    },
    iconContainer: {
        width: 100,
        height: 100,
        backgroundColor: '#FFF',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#FF914D',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 5,
        marginBottom: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
    },
    formContainer: {
        backgroundColor: '#FFF',
        borderRadius: 24,
        padding: 24,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 3,
    },
    inputGroup: {
        marginBottom: 20,
    },
    label: {
        fontSize: 14,
        fontWeight: '600',
        color: '#444',
        marginBottom: 8,
        marginLeft: 4,
    },
    input: {
        backgroundColor: '#F8FAFC',
        borderRadius: 12,
        paddingHorizontal: 16,
        paddingVertical: 14,
        fontSize: 16,
        color: '#333',
        borderWidth: 1,
        borderColor: '#E2E8F0',
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
    backButton: {
        marginTop: 20,
        alignItems: 'center',
    },
    backButtonText: {
        color: '#666',
        fontSize: 16,
        fontWeight: '600',
    }
});