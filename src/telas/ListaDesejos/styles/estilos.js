import React from "react-native";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    
    produtos: {
        flexDirection: 'row',
        padding: '2%',
        alignItems: 'center',
        padding: 20
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
    shoesText:{
        fontSize: 20,
        color: 'red'
    },
    priceText: {
        fontSize: 20,
        color: 'black'
    },
    listaDesejos: {
        paddingHorizontal: 24,
        paddingBottom: 24,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",
        flexWrap: 'wrap'
    },
    desejos: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        flexWrap: "wrap"
    },
    divisor: {
        marginHorizontal: 24,
        borderBottomWidth: 1,
        borderBottomColor: 'black'
    }
});