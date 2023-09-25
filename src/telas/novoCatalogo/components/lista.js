import React from "react";
import Item from "../components/item";
import { FlatList, SafeAreaView } from "react-native";

import img1 from '../../../../assets/roupas/conjunto_flores.png';
import img2 from '../../../../assets/roupas/vestido_azul.png';
import img3 from '../../../../assets/roupas/velma.png';
import img4 from '../../../../assets/roupas/saia_quadriculada.png';
import img5 from '../../../../assets/roupas/macacao_listrado.png';
import img6 from '../../../../assets/roupas/macacao_vermelho.png';
import img7 from '../../../../assets/roupas/look_mulher_moderna.png';

const produtos = [
    {
        id: 1,
        imagem: img1,
        nome: 'Conjunto Rosa Florido',
        preco: 250.00,
    },
    {
        id: 2,
        imagem: img2,
        nome: 'Conjunto azul',
        preco: 230.00,
    },
    {
        id: 3,
        imagem: img3,
        nome: 'Cosplay Velma',
        preco: 190.00,
    },
    {
        id: 4,
        imagem: img4,
        nome: 'Saia Xadrez branco caramelo',
        preco: 300.00,
    },
    {
        id: 5,
        imagem: img5,
        nome: 'Macacão listrado',
        preco: 100.00,
    },
    {
        id: 6,
        imagem: img6,
        nome: 'Vestido primavera vermelho',
        preco: 250.00,
    },
    {
        id: 7,
        imagem: img7,
        nome: 'Jaqueta branco com calça listrada',
        preco: 400.00,
    },
];

export default function Lista() {
    return <SafeAreaView>
        <FlatList
            data={produtos}
            renderItem={({ item }) => (<Item {...item} />)}
            keyExtractor={({ id }) => (String(id))}
        />
    </SafeAreaView>
}