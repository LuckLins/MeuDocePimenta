import React, {useEffect, useState} from "react";
import Item from "./components/item.js";
import StatusLista from '../../componentes/statusLista';
import { FlatList, SafeAreaView, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ListaDesejos() {

    const [data, setData] = useState([]);
    // const [total, setTotal] = useState(0);
    
    const getData = async () => {
        const ListaDesejos = await AsyncStorage.getItem('ListaDesejos');
        if (ListaDesejos !== null) {
            setData(JSON.parse(ListaDesejos));
        }
    };
    
    useEffect(() => {
        getData();
    }, [])
    
    const total = data.reduce((soma, {preco, qtde}) => soma + (preco * qtde), 0);
        
    return <View>
        <SafeAreaView>
            <StatusLista total={total} />
        </SafeAreaView>
        <FlatList
            data={data}
            renderItem={({item}) => (<Item {...item}/>)}
            keyExtractor={({id}) => (String(id))}
        />
    </View>
}
