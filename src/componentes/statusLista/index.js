import React from 'react';
import { View } from "react-native";
import Texto from '../Texto';
import Botao from '../Botao';
import estilos from "./estilos";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export default function StatusLista({total}) {

    const navigation = useNavigation();

    const limpaListaDesejos = async () => {
        await AsyncStorage.clear();
        console.log("A lista de desejos foi apagada com sucesso.");
        alert.alert("A lista de desejos foi apagada com sucesso.");
        navigation.navigate("Catálogo");
    }

    return <View style={estilos.conteudo}>
        <View style={estilos.total}>
            <Texto style={estilos.descricao}>Total Lista de Desejos</Texto>
            <Texto style={estilos.valor}>{
                Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(total)
            }</Texto>
        </View>
        <View style={estilos.botao}>
            <Botao texto='Limpar Lista' onPress={()=>limpaListaDesejos()}></Botao>
        </View>
    </View>
}