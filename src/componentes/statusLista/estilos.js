import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    conteudo: {
        backgroundColor: '#211F20',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexWrap: 'wrap',
        padding: 24,
    },
    total: {
        alignItems: 'center',
    },
    descricao: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
    },
    valor: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 6,
        color: '#ff6f9c',
    },
    botao: {
        flexGrow: 1,
        alignItems: 'flex-end',
    },
})