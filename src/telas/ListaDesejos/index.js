import React from "react";
import { FlatList, SafeAreaView } from "react-native";

import Texto from "../../componentes/Texto";
import Item from "./Item";
import StatusListaDesejo from "../../componentes/StatusListaDesejo";

const produtos = [
    {
        id: 1,
        nome: "Inverno",
        preco: 79.9,
        descricao: "Coleção de inverno",
        quantidade: 1,
    },
    {
        id: 2,
        nome: "Verão",
        preco: 89.9,
        descricao: "Coleção de Verão",
        quantidade: 2,
    },
];

export default function ListaDesejos() {

    const total = produtos.reduce((soma, {preco, quantidade})=> soma + (preco * quantidade), 0);

    return <SafeAreaView>
        <StatusListaDesejo total={total}/>
        <FlatList
            data={produtos}
            renderItem={({ item }) => (<Item {...item} />)}
            keyExtractor={({ id }) => (String(id))}
        />
    </SafeAreaView>
}