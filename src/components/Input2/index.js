import React from "react";
import { StyleSheet, SafeAreaView, Text, TextInput } from "react-native";

function Input2(props) {
  return (
    <SafeAreaView>
      <Text style={{ color: props.labelColor }}>{props.label}</Text>

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
    borderColor: "red",
    backgroundColor: "#fff",
  },
});

export default Input2;
