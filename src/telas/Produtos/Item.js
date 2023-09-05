import React, { useState } from "react";
import { Button, TextInput, View, TouchableOpacity } from "react-native";

import Texto from "../../componentes/Texto";
import estilos from "./estilos"
import CampoInteiro from "../../componentes/CampoInteiro";


export default function Item({ nome, descricao, preco }) {

    const [quantidade, setQuantidade] = useState(1);
    const [total, setTotal] = useState(preco);
    const [expandir, setExpandir] = useState(false)

    const calculaTotal = (quantidade) => {
        setTotal(quantidade * preco);
    }

    const atualizaQtdeTotal = (novaQtde) => {
        setQuantidade(novaQtde);
        calculaTotal(novaQtde);
    }

    //Método para o abre e fecha
    const inverteExpandir = () => {
        setExpandir(!expandir);

        //Retorna a qtde para o estado padrão
        atualizaQtdeTotal(1);
    }

    return <>
        <TouchableOpacity style={estilos.produtos} onPress={inverteExpandir}>
            <Texto style={estilos.nome}>{nome}</Texto>
            <Texto style={estilos.descricao}>{descricao}</Texto>
            <Texto style={estilos.preco}>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(preco)}</Texto>
        </TouchableOpacity>

        { expandir &&
            <View style={estilos.listadesejos}>
                <View style={estilos.posicao}>
                    <Texto>Quantidade</Texto>
                    <CampoInteiro valor={quantidade} acao={atualizaQtdeTotal} />
                </View>
                <View style={estilos.posicao}>
                    <Texto>Total</Texto>
                    <Texto>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(total)}</Texto>
                </View>
                <Button title="Adicionar" />
            </View>
        }
        <View style={estilos.divisor} />
    </>
}