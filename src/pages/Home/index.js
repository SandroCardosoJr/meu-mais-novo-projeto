import React from "react";
import { Text, View, StyleSheet, ImageBackground, Image } from "react-native";


function Home() {
  
  return (
    <ImageBackground source={require("../../../assets/Images/torcida5.jpg")} style= {styles.background}>
    <View style={styles.container}>
    <Image source={require("../../../assets/Logos/escudo.png")} style={styles.logo} />
      <Text style={styles.welcomeText}>Bem vindo a Nação rubro-negra! somos mais de 46 milhões</Text>
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },

  logo: {
    width: 200,
    height: 100,
    resizeMode: "contain",
    marginBottom: 50,
  },
  
  welcomeText: {
    fontSize: 30, 
    color: "white", 
    textAlign: "center",
    padding:0,
    fontWeight: 'bold',
    textShadowColor: 'red',
    textShadowRadius:40,
  },
});

export default Home;
