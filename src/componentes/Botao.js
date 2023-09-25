import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import Texto from "./Texto.js";

export default function Botao({texto, style}) {

    return  <TouchableOpacity style={[styles.button, style]}>
                <Texto style={styles.buttonText}>{texto}</Texto>
            </TouchableOpacity>;
}

const styles = StyleSheet.create({
    button: {
        marginTop: 16,
        paddingVertical: 12,
        borderRadius: 6
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        lineHeight: 26,
        textAlign: 'center'
    }
});