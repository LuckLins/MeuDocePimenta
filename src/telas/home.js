import React from "react";
import { ScrollView, StyleSheet, Image, Dimensions, View } from "react-native";
import Carrossel from '../componentes/Carrossel.js'
import Header from '../componentes/Header.js';
import { Video, ResizeMode } from "expo-av";


import arqVideo from '../../assets/video.mp4'
import cupom from "../../assets/cupom.jpg";
import promo from "../../assets/promo.jpg";


export default function Home() {

    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});

    return <>
        <ScrollView>
            <Header style={estilos.header} />
            <Carrossel style={estilos.carrosel} />
            <Video
                ref={video}
                style={estilos.video}
                source={arqVideo}
                useNativeControls
                resizeMode={ResizeMode.CONTAIN}
                isLooping
                onPlaybackStatusUpdate={status => setStatus(() => status)}
            />
            <View style={estilos.container}>
                <Image style={estilos.imagem} source={cupom} />
                <Image style={estilos.imagem} source={promo} />
            </View>
        </ScrollView>
    </>
}

const width = Dimensions.get('screen').width;

const estilos = StyleSheet.create({
    container: {
        display: "flex",
        alignItems: 'center'
    },

    carrosel: {
        marginVertical: 50
    },

    header: {
        marginBottom: 50
    },

    imagem: {
        marginVertical: 20,
        width: width * 0.7,
        height: width * 0.7
    },

    video: {
        alignSelf: "center",
        width: 300,
        height: 500
    }
})
