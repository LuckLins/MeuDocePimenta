import React, {useState} from "react";
import { View, TouchableOpacity, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import estilos from "../styles/estilos.js";
import Texto from '../../../componentes/Texto';
import Botao from '../../../componentes/Botao';
import CampoInteiro from '../../../componentes/CampoInteiro';

export default function Item({id, nome, preco, img}) {

    const [expandir, setExpandir] = useState(false);
    const [total, setTotal] = useState(preco);
    const [quantidade, setQuantidade] = useState(1);

    const calculaTotal = (quantidade) => {
        setTotal(quantidade * preco)
    };

    const atualizaQtdTotal = (novaQtd) => {
        setQuantidade(novaQtd);
        calculaTotal(novaQtd);
    };

    function filtroNome(nome){
        if(nome.length < 22){
            return nome;
        }
        return `${nome.substring(0, 20)}...`;
    }

    const inverteExpandir = () => {
        setExpandir(!expandir);
        //Retorna a quantidade para o estado padrão
        setQuantidade(1);
    };
    
    async function addListaDesejos(id, nome, preco, img, quantidade) {
        
        const addProduto = [{
            id: id,
            nome: nome,
            preco: preco,
            img: img,
            qtde: quantidade
        }]

        const listaDesejosSalva = await AsyncStorage.getItem('ListaDesejos');
        if (listaDesejosSalva !== null) {
            const listaDesejos = JSON.parse(listaDesejosSalva);
            
            listaDesejos.forEach(async item => {
                if (String(id) === String(item.id)) {
                    const index = listaDesejos.findIndex(item => item.id === id)
                    quantidade = item.qtde + 1;
                    listaDesejos.splice(index, 1);
                } 
            })

            listaDesejos.push({id: id, nome: nome, preco: preco, img: img, qtde: quantidade});
            const listaDesejosAtualizada = JSON.stringify(listaDesejos);
            await AsyncStorage.setItem('ListaDesejos', listaDesejosAtualizada);

            console.log(listaDesejos);

        } else {
            const listaDesejosAtualizada = JSON.stringify(addProduto);
            
            await AsyncStorage.setItem('ListaDesejos', listaDesejosAtualizada);
            console.log('Inseriu item na lista');
        }
    }

    return <>
        <View>
            { !expandir &&
                <TouchableOpacity style={estilos.container} onPress={inverteExpandir}>
                    <Image
                        source={img}
                        style={estilos.shoesImg}
                    />
                    <View style={estilos.textBox}>
                        <Texto style={estilos.shoesText}>
                            {filtroNome(nome)}
                        </Texto>
                        <View opacity={0.4}>
                            <Texto style={estilos.priceText}> {Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(preco)} </Texto>
                        </View>
                    </View>
                </TouchableOpacity>
            }
            { expandir &&
                <TouchableOpacity style={estilos.containerExp} onPress={inverteExpandir}>
                    <Image
                        source={img}
                        style={estilos.prodImg}
                    />
                    <Texto style={estilos.roupaText}>
                            {(nome)}
                    </Texto>
                    <View style={estilos.listaDesejos}>
                        <View style={estilos.nomePreco}>
                            <View style={estilos.posicao}>
                                <Texto style={estilos.textoNome}>Quantidade: </Texto>
                                <CampoInteiro style={estilos.textoNomePreco} valor={quantidade} acao={atualizaQtdTotal}/>
                            </View>
                            <View style={estilos.posicao}>
                                <Texto style={estilos.textoNome}>Total: </Texto>
                                <Texto style={estilos.textoNomePreco}>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'})
                                .format(total)}</Texto>
                            </View>
                        </View>
                        <Botao texto='Adicionar' acao={() => addListaDesejos(id, nome, preco, img, quantidade)} style={{backgroundColor: 'black', width: 220}}/>
                    </View>
                </TouchableOpacity>
            }
        </View>
    </>
}
