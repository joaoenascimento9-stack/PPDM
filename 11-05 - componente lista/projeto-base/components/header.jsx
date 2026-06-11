import {View, Text, StyleSheet} from 'react-native';
import { createEmitAndSemanticDiagnosticsBuilderProgram } from 'typescript';

export default function Header({titulo}){
    return(
        <View style={estilos.container}>
            <Text style={estilos.titulo}>{titulo}</Text>
            <Text style={estilos.subtitulo}>Organizar as suas atividades diárias</Text>
        </View>
    )
}
const estilos = StyleSheet.create({
    container: {
        backgroundColor: '#6200EE',
        padding: 20,
        paddingHorizontal: 16,
        alignItems: 'center',
    },
    titulo: {
        color: '#FFFFFF',
        fontSize: 24,
        fontWeight: '700',
    },
    subtitulo: {
        color: '#FFFFFF',
        fontSize: 16,
    }
})