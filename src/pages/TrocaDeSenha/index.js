import React from "react";
import { StyleSheet, View, Button } from "react-native";

import Titulo2 from "../../components/Title2";
import Input2 from "../../components/Input2";
import SuperButton3 from "../../components/SuperButton3";

function TrocaDeSenha({ navigation }) {
  return (
    <View style={styles.container}>
      <Titulo2 titulo2="Esqueceu sua senha? Troque e volte a fazer parte da nação!" />

      <Input2
        label="Email cadastrado"
        labelColor="red"
        placeholder="Ex: flamengo@malvadao.com.br"
      />

      <Input2
        label="CPF cadastrado"
        labelColor="red"
        placeholder="Ex: 123.456.789-10"
      />

      <SuperButton3 texto="Trocar Senha"></SuperButton3>
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
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default TrocaDeSenha;
