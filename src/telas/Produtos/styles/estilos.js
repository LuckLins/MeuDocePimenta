import React from "react-native";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    nome: {
        color: 'orange',
        fontWeight: "bold",
        fontSize: 28
    },
    descricao: {
        color: 'black',
        fontSize: 18,
    },
    preco: {
        color: 'purple',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'right',
    },
    produtos: {
        padding: 20
    },
    listaDesejos: {
        paddingHorizontal: 24,
        paddingBottom: 24,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "flex-start",
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
        borderBottomColor: 'purple'
    }
});