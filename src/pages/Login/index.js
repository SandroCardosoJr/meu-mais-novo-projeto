import React, { useContext } from "react";
import { StyleSheet, View, Button, Alert } from "react-native";

import Titulo from "../../components/Title";
import Input from "../../components/Input";
import SuperButton from "../../components/SuperButton";
import AuthContext from "../../context/auth";

function Login({ navigation }) {
  const { login } = useContext(AuthContext);

  const handlerLogin = () => {
    login();
  };
  return (
    <View style={styles.container}>
      <Titulo titulo="Bem-vindo Sócio Torcedor" />

      <Titulo titulo="do Mais Querido" />

      <Input label="Email" placeholder="Ex: flamengo@malvadao.com.br" />

      <Input label="Senha" placeholder="Ex: ********" />

      <SuperButton texto="Entrar" callback={handlerLogin}></SuperButton>

      <View style={styles.buttonsContainer}>
        <Button
          title="Esqueceu sua senha?"
          color="black"
          onPress={() => navigation.navigate("Troca de Senha")}
        />

        <Button
          title="Seja um Sócio torcedor"
          color="red"
          onPress={() => navigation.navigate("Cadastro")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },

  buttonsContainer: {
    justifyContent: "center",
    marginVertical: 20,
    paddingBottom: 30,
  },
});

export default Login;
