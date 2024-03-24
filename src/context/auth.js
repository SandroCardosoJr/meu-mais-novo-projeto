import React, { createContext, useState, useEffect } from "react";
import authService from "../../src/service/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const usuarioContext = {
  logado: false,
  usuario: {},
  loading: false,
  login: () => new Promise(),
  logout: () => {},
  darkMode: false,
  toggleDarkMode: () => {},
};

const AuthContext = createContext(usuarioContext);

export const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState({});
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    async function obterDadosDaStorage() {
      const usuarioStorage = await AsyncStorage.getItem("@NRAuth: user");
      const tokenStorage = await AsyncStorage.getItem("@NRAuth: token");

      await new Promise((resolve) => setTimeout(resolve, 3000));

      console.log("token", tokenStorage);

      if (usuarioStorage && tokenStorage) {
        setLoading(false);
        setUsuario(JSON.parse(usuarioStorage));
      }
    }

    obterDadosDaStorage();
  }, []);

  const salvarStorage = async (usuario, token) => {
    await AsyncStorage.setItem("@NRAuth: user", JSON.stringify(usuario));
    await AsyncStorage.setItem("@NRAuth: token", token);
  };

  const login = () => {
    setLoading(true);
    authService
      .login("fulano@gmail.com", "123456")
      .then((response) => {
        setUsuario(response.usuario);
        salvarStorage(response.usuario, response.token);
      })

      .catch((error) => {
        console.log(error);
      })

      .finally(() => setLoading(false));
  };

  const logout = () => {
    AsyncStorage.clear().then(() => {
      setUsuario({});
    });
  };

  const toggleDarkMode = () => {
    console.log("Dark Mode foi ativado!");
    setDarkMode(!darkMode);
  };

  return (
    <AuthContext.Provider value={{ 
      logado: !!usuario.id, 
      usuario, 
      loading, 
      login, 
      logout,
      darkMode,
      toggleDarkMode 
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
