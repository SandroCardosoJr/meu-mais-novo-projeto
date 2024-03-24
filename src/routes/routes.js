import React, { useContext } from "react";
import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";
import AuthContext from "../context/auth";
import { View, ActivityIndicator } from "react-native";

const Routes = () => {
  const { logado, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="red" />
      </View>
    );
  } else {
    return logado ? <AppRoutes></AppRoutes> : <AuthRoutes></AuthRoutes>;
  }
};

export default Routes;
