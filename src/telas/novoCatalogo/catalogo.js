import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

import Header from '../../componentes/Header';
import Texto from '../../componentes/Texto.js';
import Lista from './components/lista';
export default function NovoCatalogo() {

    const navigation = useNavigation();

    return <>
        <Header />
        <View style={estilos.textContainer}>
            <Texto style={estilos.text}>ROUPAS</Texto>
            <Texto style={[estilos.text, { color: '#000' }]}>•</Texto>
            <Texto style={[estilos.text, { color: '#ff6f9c' }]}>FEMININAS</Texto>
            <TouchableOpacity style={{ position: 'absolute', right: 0, alignSelf: 'center' }}>
                <MaterialIcons
                    name="filter-list"
                    size={24}
                    color="#000"
                />
            </TouchableOpacity>
        </View>
        <View style={estilos.line} />
            <Texto style={estilos.text}>LANÇAMENTOS</Texto>
            <Lista/>
    </>


}

const estilos = StyleSheet.create({
    textContainer: {
        flexDirection: 'row',
        marginVertical: '5%',
        marginHorizontal: '5%'
    },
    text: {
        marginTop: 10,
        fontSize: 20,
        marginHorizontal: '1%'
    },
    line: {
        borderBottomColor: '#D8d8d8',
        borderBottomWidth: 2,
    }
})