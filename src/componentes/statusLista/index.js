import React from 'react';
import { View } from "react-native";
import Texto from '../Texto';
import Botao from '../Botao';
import estilos from "./estilos";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export default function StatusLista({total}) {

    const navigation = useNavigation();

    const limpaLista = async () => {
        await AsyncStorage.clear();
        // alert.alert('A lista de desejos foi limpa com sucesso!')
        console.log('A lista de desejos foi limpa com sucesso!');
        navigation.navigate('Catálogo')
    }

    return <View style={estilos.conteudo}>
        <View style={estilos.total}>
            <Texto style={estilos.descricao}>Valor total da lista:</Texto>
            <Texto style={estilos.valor}>{
                Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(total)
            }</Texto>
        </View>
        <View style={estilos.botao}>
            <Botao texto='Limpar lista' acao={() => limpaLista()} style={{backgroundColor: 'red'}}></Botao>
        </View>
    </View>
}