import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Texto from '../../../componentes/Texto';

export default function Roupas(props) {

    function filtroNome(nomeItem){
        if(nomeItem.length < 20){
            return nomeItem;
        }
        return `${nomeItem.substring(0, 19)}...`;
    }
    return (
        <TouchableOpacity style={estilos.container} onPress={props.onClick}>
           <Image
             source={props.img}
             style={estilos.shoesImg}
           />
           <Texto style={estilos.shoesText}>
               {filtroNome(props.children)}
           </Texto>
           <View opacity={0.4}>
              <Texto style={estilos.shoesText}> {props.cost} </Texto>
           </View>
        </TouchableOpacity>
       );
     }
     
     const estilos = StyleSheet.create({
         container:{
             paddingVertical: '2%',
             alignItems: 'center',
             justifyContent: 'center'
         },
         shoesImg:{
            marginTop: 15,
             width: 175,
             height: 175
         },
         shoesText:{
             fontSize: 16
         }
     });