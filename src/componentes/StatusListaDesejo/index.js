import React from "react";
import { NumberFormat } from "intl";
import { View , Button } from "react-native";

import estilos from "./estilos";
import Texto from "../Texto";


export default function StatusListaDesejo(total) {
    return <View style={estilos.conteudo}>
        <View style={estilos.total}>
            <Texto style={estilos.descricao}>Total da Lista de Desejos</Texto>
            <Texto style={estilos.valor}>{Intl.NumberFormat('pt-BR',{style: 'currency', currency:'BRL'}).format(total)}</Texto>
        </View>
        <View>
            <Button style={estilos.botao} title="Concluir Pedido"></Button>
        </View>
    </View>
}