import React from "react";
import {
  TouchableHighlight,
  StyleSheet,
  View,
  Text,
  Alert,
} from "react-native";

const SuperButton = (props) => {
  return (
    <TouchableHighlight
      style={style.superButton}
      onPress={props.callback}
    >
      <View style={style.button}>
        <Text style={style.texto}>{props.texto}</Text>
      </View>
    </TouchableHighlight>
  );
};

const style = StyleSheet.create({
  superButton: {},

  button: {
    alignItems: "center",
    backgroundColor: "black",
    padding: 12,
    borderRadius: 5,
    width: 300,
    marginBottom: 16,
  },

  texto: {
    fontSize: 18,
    color: "red",
    fontWeight: "bold",
  },
});

export default SuperButton;
