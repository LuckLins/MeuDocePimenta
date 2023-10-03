import React, { useState } from "react";
import Texto from '../../../componentes/Texto.js';
import CampoInteiro from '../../../componentes/CampoInteiro';
import estilos from "../styles/estilos.js";
import { Button, View, TouchableOpacity, Image } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Item({ id, nome, imagem, preco }) {

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

    //Função para savar o produto na lista de desejos
    async function addListaDesejos(id, nome, preco, imagem, quantidade) {

        const addProduto = [{
            id: id,
            nome: nome,
            preco: preco,
            imagem: imagem,
            quantidade: quantidade,
        }]

        //AsyncStorage = popular: setItem / recuperar: getItem
        //Verifica se a lista de desejos já contem itens
        const listaDesejosSalva = await AsyncStorage.getItem('ListaDesejos');
        if(listaDesejosSalva !== null){
            //A lista já tem itens
            const listaDesejos = JSON.parse(listaDesejosSalva)

            //Adiciona o novo produto na lista de desejos
            listaDesejos.push({id:id, nome:nome, preco:preco, imagem:imagem, quantidade:quantidade})

            //Converte a lista em String
            const listaDesejosAtualizada = JSON.stringify(listaDesejos);
            await AsyncStorage.setItem('ListaDesejos', listaDesejosAtualizada);

            console.log(listaDesejos);
            console.log("Inseriu mais um item na lista");
        }else{
            //a lista está vazia. Insere o primeiro item
            const listaDesejosAtualizada = JSON.stringify(addProduto);

            //Insere o item no AsyncStorage
            await AsyncStorage.setItem('ListaDesejos', listaDesejosAtualizada);
            console.log("Inseriu o item na lista")
        }
    }

    return <>
        <TouchableOpacity style={estilos.produtos} onPress={inverteExpandir}>
            <Image source={imagem} style={{ width: 150, height: 150, }} />
            <Texto style={estilos.nome}>{nome}</Texto>
            {expandir && <Texto style={estilos.descricao}></Texto>}
            <Texto style={estilos.preco}>
                {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
                    .format(preco)}
            </Texto>
        </TouchableOpacity>
        {expandir &&
            <View style={estilos.listaDesejos}>
                <View style={estilos.posicao}>
                    <Texto>Quantidade:</Texto>
                    <CampoInteiro valor={quantidade} acao={atualizaQtdTotal} />
                </View>
                <View style={estilos.posicao}>
                    <Texto>Total:</Texto>
                    <Texto>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
                        .format(total)}</Texto>
                </View>
                <Button color="#211F20"  title="Adicionar" onPress={() => addListaDesejos(id, nome, preco, imagem, quantidade)} />
            </View>
        }
    </>
}
