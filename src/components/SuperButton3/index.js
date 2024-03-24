import React from "react";
import {
  TouchableHighlight,
  StyleSheet,
  View,
  Text,
  Alert,
} from "react-native";

const SuperButton3 = (props) => {
  return (
    <TouchableHighlight
      style={style.superButton}
      onPress={() => Alert.alert("Link enviado")}
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
    backgroundColor: "red",
    padding: 12,
    borderRadius: 5,
    width: 300,
    marginBottom: 16,
  },

  texto: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
});

export default SuperButton3;
