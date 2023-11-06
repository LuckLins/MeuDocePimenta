import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import Texto from "./Texto.js";

export default function Botao({texto, style, acao}) {

    return  <TouchableOpacity style={[styles.button, style]} onPress={acao}>
                <Texto style={styles.buttonText}>{texto}</Texto>
            </TouchableOpacity>;
}

const styles = StyleSheet.create({
    button: {
        marginTop: 16,
        padding: 5,
        borderRadius: 6,
        marginHorizontal: 5
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center'
    }
});