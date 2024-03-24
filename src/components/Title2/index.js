import React from "react";
import { Text, StyleSheet, View } from "react-native";

function Titulo2(props) {
  return <Text style={css.titulo}>{props.titulo2}</Text>;
}

const css = StyleSheet.create({
  titulo: {
    color: "red",
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
});

export default Titulo2;
