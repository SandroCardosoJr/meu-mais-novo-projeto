import React from "react";
import { StyleSheet, SafeAreaView, Text, TextInput } from "react-native";

function Input(props) {
  return (
    <SafeAreaView>
      <Text>{props.label}</Text>

      <TextInput
        style={style.input}
        placeholder={props.placeholder}
      ></TextInput>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  input: {
    borderWidth: 1,
    height: 42,
    marginTop: 1,
    marginBottom: 8,
    padding: 10,
    width: 300,
    borderRadius: 4,
    backgroundColor: "#FFF",
  },
});

export default Input;
