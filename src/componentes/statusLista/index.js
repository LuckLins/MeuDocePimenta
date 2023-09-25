import React from 'react';
import { View } from "react-native";
import Texto from '../Texto';
import Botao from '../Botao';
import estilos from "./estilos";

export default function StatusLista({total}) {
    return <View style={estilos.conteudo}>
        <View style={estilos.total}>
            <Texto style={estilos.descricao}>Total Lista de Desejos</Texto>
            <Texto style={estilos.valor}>{
                Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(total)
            }</Texto>
        </View>
        <View style={estilos.botao}>
            <Botao texto='Concluir pedido'></Botao>
        </View>
    </View>
}