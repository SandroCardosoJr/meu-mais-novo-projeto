import React from "react";
import { StyleSheet, View, Button } from "react-native";

import Titulo2 from "../../components/Title2";
import Input2 from "../../components/Input2";
import SuperButton2 from "../../components/SuperButton2";

function Cadastro({ navigation }) {
  return (
    <View style={styles.container}>
      <Titulo2 titulo2="Torne-se Sócio Torcedor" />

      <Titulo2 titulo2="do mais querido" />

      <Input2
        label="Email"
        labelColor="red"
        placeholder="Ex: flamengo@malvadao.com.br"
      />

      <Input2 label="CPF" labelColor="red" placeholder="Ex: 123.456.789-10" />

      <Input2 label="Senha" labelColor="red" placeholder="Ex: Fl@mengo19" />

      <Input2
        label="Confirme a Senha"
        labelColor="red"
        placeholder="Ex: Fl@mengo19"
      />

      <SuperButton2 texto="Cadastrar"></SuperButton2>
      <Button
        title="Faça seu Login"
        color="red"
        onPress={() => navigation.navigate("Login")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Cadastro;
