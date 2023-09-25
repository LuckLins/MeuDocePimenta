import React, { useState, useEffect } from "react";
import { ScrollView, StyleSheet, Image, Dimensions, View, Button } from "react-native";
import { Video, ResizeMode, Audio } from "expo-av";

import Carrossel from '../componentes/Carrossel.js'
import Header from '../componentes/Header.js';

import cupom from "../../assets/cupom.jpg";
import promo from "../../assets/promo.jpg";



export default function Home() {
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({})
    const [audioStatus, setAudioStatus] = useState(false)
    const [sound, setSound] = useState(new Audio.Sound());

    useEffect(() => {
        const loadAudio = async () => {
            const { sound } = await Audio.Sound.createAsync(
                require('../../assets/audio.mp3')
            );
            setSound(sound);
            // Adicione o código de reprodução aqui para garantir que o som seja carregado antes de ser reproduzido.
            await sound.setStatusAsync({ shouldPlay: audioStatus });
        };
        loadAudio();
        return () => {
            if (sound) {
                sound.unloadAsync();
            }
        };
    }, [audioStatus]);


    return <>
        <ScrollView>
            <Header style={estilos.header} />
            <Button color={audioStatus ? 'red' : 'green'} title={'Tocar/Parar'}
                onPress={() => setAudioStatus(!audioStatus)} />
            <Carrossel style={estilos.carrosel} />
            <Video ref={video}
                style={estilos.video}
                source={require('../../assets/video.mp4')}
                useNativeControls
                resizeMode={ResizeMode.CONTAIN}
                isLooping
                onPlaybackStatusUpdate={status => setStatus(() => status)} />
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
        margin: 40,
        borderRadius: 30,
        width: "90%",
        height: 1024 / 900 * width,
    }
})
