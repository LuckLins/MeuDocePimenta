import React from "react";
import { FlatList, SafeAreaView } from "react-native";

import Texto from "../../componentes/Texto";
import Item from "./Item";

const produtos = [
    {
        id: 1,
        nome: "Inverno",
        preco: 79.9,
        descricao: "Coleção de inverno"
    },
    {
        id: 2,
        nome: "Verão",
        preco: 89.9,
        descricao: "Coleção de Verão"
    },
    {
        id: 3,
        nome: "Estações",
        preco: 99.9,
        descricao: "Coleção com roupas de estações variadas"
    }
];

export default function Produtos() {
    return <SafeAreaView>
        <FlatList
            data={produtos}
            renderItem={({ item }) => (<Item {...item} />)}
            keyExtractor={({ id }) => (String(id))}
        />
    </SafeAreaView>
}