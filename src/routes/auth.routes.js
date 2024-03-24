import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";


import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import TrocaDeSenha from "../pages/TrocaDeSenha";

const AuthStack = createNativeStackNavigator();

export default function AuthRoutes() {
  return (
    <AuthStack.Navigator initialRouteName="Login">
      <AuthStack.Screen
        name={"Login"}
        component={Login}
        options={{
          title: "Login",
          headerStyle: {
            backgroundColor: "black",
          },
          headerTintColor: "red",
        }}
      ></AuthStack.Screen>

      <AuthStack.Screen
        name={"Troca de Senha"}
        component={TrocaDeSenha}
        options={{
          title: "Troca de Senha",
          headerStyle: {
            backgroundColor: "red",
          },
          headerTintColor: "white",
        }}
      ></AuthStack.Screen>

      <AuthStack.Screen
        name={"Cadastro"}
        component={Cadastro}
        options={{
          title: "Cadastro",
          headerStyle: {
            backgroundColor: "red",
          },
        }}
      ></AuthStack.Screen>
    </AuthStack.Navigator>
  );
}
