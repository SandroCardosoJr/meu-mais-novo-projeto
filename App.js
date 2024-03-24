import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./src/context/auth";
import Routes from "./src/routes/routes";

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
      <Routes></Routes>
      </AuthProvider>
    </NavigationContainer>
  )
}
