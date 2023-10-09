import React, { useState } from "react";
import { Button, TextInput, View } from "react-native";

import Texto from "../../componentes/Texto";
import estilos from "./estilos"
import CampoInteiro from "../../componentes/CampoInteiro";


export default function Item({ nome,imagem, preco, quantidade: qtdeInicial }) {

    const [quantidade, setQuantidade] = useState(qtdeInicial);
    const [total, setTotal] = useState(preco * qtdeInicial);


    const calculaTotal = (quantidade) => {
        setTotal(quantidade * preco);
    }

    const atualizaQtdeTotal = (novaQtde) => {
        setQuantidade(novaQtde);
        calculaTotal(novaQtde);
    }


    return <>
        <View style={estilos.produtos} >
            <Texto style={estilos.nome}>{nome}</Texto>
            <Image source={imagem} style={{ width: 150, height: 150, }} />
            <Texto style={estilos.descricao}>{descricao}</Texto>
            <Texto style={estilos.preco}>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(preco)}</Texto>
        </View>
        <View style={estilos.listadesejos}>
            <View style={estilos.posicao}>
                <Texto>Quantidade</Texto>
                <CampoInteiro valor={quantidade} acao={atualizaQtdeTotal} />
            </View>
            <View style={estilos.posicao}>
                <Texto>Total</Texto>
                <Texto>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(total)}</Texto>
            </View>
            <Button title="Remover" />
        </View>

        <View style={estilos.divisor} />
    </>
}