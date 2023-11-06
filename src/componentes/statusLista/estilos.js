import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    conteudo: {
        backgroundColor: '#211F20',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 24,
    },
    total: {
        alignItems: 'center',
        marginRight: 24
    },
    descricao: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
    },
    valor: {
        fontSize: 28,
        fontWeight: 'bold',
        marginVertical: 6,
        color: 'red',
    },
    botao: {
        flexGrow: 1,
        alignItems: 'center',
    },
})