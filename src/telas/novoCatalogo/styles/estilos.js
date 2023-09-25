import React from "react";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    nome: {
        color: 'black',
        fontWeight: "bold",
        fontSize: 18,
    },
    descricao: {
        color: 'black',
        fontSize: 18,
    },
    preco: {
        fontSize: 20,
        color: 'gray',
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
});