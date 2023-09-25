import React from "react";
import Item from "./components/item.js";
import { FlatList, SafeAreaView } from "react-native";

const produtos = [
    {
        id: 1,
        nome: 'Cesta Inverno',
        preco: 79.90,
        descricao: 'Cesta de frutas típicas do inverno'
    },
    {
        id: 2,
        nome: 'Cesta Verão',
        preco: 89.90,
        descricao: 'Cesta de frutas típicas do verão'
    },
    {
        id: 3,
        nome: 'Cesta Estações',
        preco: 99.90,
        descricao: 'Uma cesta com frutas da estação vigente'
    },
];

export default function Produtos() {
    return <SafeAreaView>
        <FlatList
			data={produtos}
			renderItem={({item}) => (<Item {...item}/>)}
            keyExtractor={({id}) => (String(id))}
        />
    </SafeAreaView>
}
