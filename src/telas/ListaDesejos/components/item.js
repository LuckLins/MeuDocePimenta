import React, {useState} from "react";
import Texto from '../../../componentes/Texto.js';
import CampoInteiro from '../../../componentes/CampoInteiro';
import estilos from "../styles/estilos.js";
import { Button, View } from "react-native";

export default function Item({ nome, descricao, preco, qtde: qtdeInicial }) {

    const [quantidade, setQuantidade] = useState(qtdeInicial);
    const [total, setTotal] = useState(preco * qtdeInicial);

    const calculaTotal = (quantidade) => {
        setTotal(quantidade * preco)
    };

    const atualizaQtdTotal = (novaQtd) => {
        setQuantidade(novaQtd);
        calculaTotal(novaQtd);
    };

    return <>
        <View style={estilos.produtos}>
            <Texto style={estilos.nome}>{nome}</Texto>
            <Texto style={estilos.descricao}>{descricao}</Texto>
            <Texto style={estilos.preco}>
                {Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'})
                .format(preco)}
            </Texto>
        </View>
        <View style={estilos.listaDesejos}>
            <View style={estilos.posicao}>
                <Texto>Quantidade:</Texto>
                <CampoInteiro valor={quantidade} acao={atualizaQtdTotal}/>
            </View>
            <View style={estilos.posicao}>
                <Texto>Total:</Texto>
                <Texto>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'})
                .format(total)}</Texto>
            </View>
            <Button color="#211F20" title="Remover"/>
        </View>
        <View style={estilos.divisor}/>
    </>
}
