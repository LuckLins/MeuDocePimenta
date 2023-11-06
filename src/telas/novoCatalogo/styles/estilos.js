import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('screen').width;

export default StyleSheet.create({
    textContainer:{
        flexDirection: 'row',
        marginVertical: '5%',
        marginHorizontal: '5%'
    },
    text:{
        marginTop: 10,
        fontSize: 20,
        marginHorizontal: '1%'
    },
    line:{
        borderBottomColor: '#D8d8d8',
        borderBottomWidth: 2,
    },
    container:{
        flexDirection: 'row',
        padding: '2%',
        alignItems: 'center',
    },
    containerExp:{
        flexDirection: 'column',
        padding: '2%',
        alignItems: 'center',
    },
    textBox: {
        flexDirection: 'column',
        paddingHorizontal: 10,
        width: '100%'
    },
    shoesImg:{
        marginTop: 15,
        width: 100,
        height: 100
    },
    prodImg:{
        marginTop: 15,
        width: width/1.5,
        height: width/1.5
    },
    shoesText:{
        fontSize: 20,
        color: 'red'
    },
    priceText: {
        fontSize: 20,
        color: 'black'
    },
    listaDesejos: {
        flexDirection: "column",
        marginTop: 15,
    },
    roupaText: {
        fontSize: 24,
        marginTop: 12,
        color: 'red'
    },
    posicao: {
        flexDirection: 'row',
    },
    textoNome: {
        fontSize: 18
    },  
    textoNomePreco: {
        fontSize: 26,
        color: 'red',
        fontWeight: 'bold'
    },
})