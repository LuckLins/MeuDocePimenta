import React from 'react';
import { View, TouchableOpacity, FlatList } from 'react-native';
import Header from '../../componentes/Header';
import Texto from '../../componentes/Texto';
import { MaterialIcons } from '@expo/vector-icons'
import estilos from "./styles/estilos";
import Item from "./components/item.js";
import roupas from '../../mocks/roupas.js';

export default function NovoCatalogo () {

    return <>
        <Header />
        <View style={estilos.textContainer}>
            <Texto style={estilos.text}>ROUPAS</Texto>
            <Texto style={[estilos.text, { color: '#000'} ]}>•</Texto>
            <Texto style={[estilos.text, { color: '#ff6f9c'} ]}>FEMININAS</Texto>
            <TouchableOpacity style={{position: 'absolute', right: 0, alignSelf: 'center'}}>
              <MaterialIcons
                name="filter-list"
                size={24}
                color="#000"
              />
            </TouchableOpacity>
        </View>
        <View style={estilos.line} />
        <View>
            <Texto style={estilos.text}>LANÇAMENTOS</Texto>
            <FlatList
                data={roupas}
                renderItem={({item}) => (<Item {...item}/>)}
                keyExtractor={({id}) => (String(id))}
            />
        </View>
    </>
}