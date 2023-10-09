import React,{useState, useEffect} from "react";
import Item from "./components/item.js";
import StatusLista from '../../componentes/statusLista';
import { FlatList, SafeAreaView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import  Header from "../../componentes/Header.js";

// const produtos = [
//     {
//         id: 1,
//         nome: 'Cesta Inverno',
//         preco: 79.90,
//         descricao: 'Cesta de frutas típicas do inverno',
//         qtde: 1
//     },
//     {
//         id: 2,
//         nome: 'Cesta Verão',
//         preco: 89.90,
//         descricao: 'Cesta de frutas típicas do verão',
//         qtde: 2
//     }
// ];

export default function ListaDesejos() {

    const[lista,setLista] = useState([]);

    //Carrega os dados armazenados no AsyncStorage
    const carregaLista = async() => {
        const storedList = await AsyncStorage.getItem('ListaDesejos');
        if(storedList !== null){
            setLista(JSON.parse(storedList))
        }
    }

    useEffect(()=>{
        carregaLista();
    },[]);

    const total = lista.reduce((soma, {preco, qtde}) => soma + (preco * qtde), 0);

    return <SafeAreaView>
        <StatusLista total={total} />
        <FlatList
			data={lista}
			renderItem={({item}) => (<Item {...item}/>)}
            keyExtractor={({id}) => (String(id))}
        />
    </SafeAreaView>
}
