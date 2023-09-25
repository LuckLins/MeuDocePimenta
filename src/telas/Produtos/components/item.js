import React, {useState} from "react";
import Texto from '../../../componentes/Texto.js';
import CampoInteiro from '../../../componentes/CampoInteiro';
import estilos from "../styles/estilos.js";
import { Button, View, TouchableOpacity } from "react-native";

export default function Item({ nome, descricao, preco }) {

    const [quantidade, setQuantidade] = useState(1);
    const [total, setTotal] = useState(preco);
    const [expandir, setExpandir] = useState(false);

    const calculaTotal = (quantidade) => {
        setTotal(quantidade * preco)
    };

    const atualizaQtdTotal = (novaQtd) => {
        setQuantidade(novaQtd);
        calculaTotal(novaQtd);
    };

    //Método para o abre e fecha
    const inverteExpandir = () => {
        setExpandir(!expandir);

        //Retorna a quantidade para o estado padrão
        setQuantidade(1);
    };

    return <>
        <TouchableOpacity style={estilos.produtos} onPress={inverteExpandir}>
            <Texto style={estilos.nome}>{nome}</Texto>
            { expandir && <Texto style={estilos.descricao}>{descricao}</Texto>}
            <Texto style={estilos.preco}>
                {Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'})
                .format(preco)}
            </Texto>
        </TouchableOpacity>
        { expandir &&
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
                <Button title="Adicionar"/>
            </View>
        }
        <View style={estilos.divisor}/>
    </>
}
