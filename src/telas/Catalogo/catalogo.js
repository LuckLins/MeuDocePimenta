import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'
import {useNavigation} from '@react-navigation/native';

import Header from '../../componentes/Header';
import Texto from '../../componentes/Texto.js';
import Roupas from './components/Roupas';
export default function Catalogo () {

    const navigation = useNavigation();

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
        <ScrollView>
        <Texto style={estilos.text}>LANÇAMENTOS</Texto>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
          <Roupas img={require('../../../assets/roupas/conjunto_flores.png')} cost="R$250,00" onclick={()=> navigation.navigate('./Pages/detalhe_produto')}>
            Conjunto Rosa Florido
          </Roupas>
          <Roupas img={require('../../../assets/roupas/vestido_azul.png')} cost="R$230,00" >
            Conjunto azul
          </Roupas>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
          <Roupas img={require('../../../assets/roupas/velma.png')} cost="R$190,00">
              Cosplay Velma
          </Roupas>
          <Roupas img={require('../../../assets/roupas/saia_quadriculada.png')} cost="R$300,00">
            Saia Xadrez branco caramelo
          </Roupas>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
          <Roupas img={require('../../../assets/roupas/macacao_listrado.png')} cost="R$100,00">
            Macacão listrado
          </Roupas>
          <Roupas img={require('../../../assets/roupas/macacao_vermelho.png')} cost="R$250,00">
            Vestido primavera vermelho
          </Roupas>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
          <Roupas img={require('../../../assets/roupas/look_mulher_moderna.png')} cost="R$400,00">
            Jaqueta branco com calça listrada
          </Roupas>
          <Roupas img={require('../../../assets/roupas/look_evento.png')} cost="R$250,00">
            Calça bege
          </Roupas>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
          <Roupas img={require('../../../assets/roupas/espanhola.png')} cost="R$300,00">
            Look salsa e merengue
          </Roupas>
          <Roupas img={require('../../../assets/roupas/corset.png')} cost="R$500,00">
            Corset com calça de couro e camisa
          </Roupas>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
          <Roupas img={require('../../../assets/roupas/conjunto_xadrez.png')} cost="R$210,00">
            Conjunto quadriculado
          </Roupas>
          <Roupas img={require('../../../assets/roupas/conjunto_primavera.png')} cost="R$340,00">
            Conjunto plus-size
          </Roupas>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
          <Roupas img={require('../../../assets/roupas/blusinha_onca.png')} cost="R$100,00">
            Sobretudo marrom
          </Roupas>
          <Roupas img={require('../../../assets/roupas/blusa_short_couro.png')} cost="R$420,00">
            Blusa de couro
          </Roupas>
        </View>
        </ScrollView>
    </>
}

const estilos = StyleSheet.create({
      textContainer:{
        flexDirection: 'row',
        marginVertical: '5%',
        marginHorizontal: '5%'
      },
      text:{
        marginTop: 10,
        fontSize: 20,
        marginHorizontal: '1%'
      },
      line:{
        borderBottomColor: '#D8d8d8',
        borderBottomWidth: 2,
      }
});



