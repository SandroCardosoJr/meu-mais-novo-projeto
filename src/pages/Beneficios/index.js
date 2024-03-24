import React from "react";
import { Text, View, StyleSheet, ImageBackground, Image } from "react-native";

function Beneficios() {

  return (
    <ImageBackground source={require("../../../assets/Images/torcida2.webp")} style= {styles.background}>
    <View style={styles.container}>
    <Image source={require("../../../assets/Logos/crf.png")} style={styles.logo} />
      <Text style={styles.welcomeText}>Seus beneficios:</Text>
      <Text style={styles.welcomeText}>Prioridade na compra de ingressos</Text>
      <Text style={styles.welcomeText}>50% de desconto na meia entrada</Text>
      <Text style={styles.welcomeText}>Assinatura gratuita da FlaTv</Text>
      <Text style={styles.welcomeText}>+10Gb de bônus de internet no FLA CHIP</Text>
      <Text style={styles.welcomeText}>Personalização grátis em camisas</Text>
      <Text style={styles.welcomeText}>Aprovete esses e vários outros beneficios!</Text>
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
    fontSize: 20, 
    color: "white", 
    textAlign: "center",
    marginBottom: 30,
    lineHeight: 40,
    fontWeight: 'bold',
    textShadowColor: 'red',
    textShadowRadius: 30,
  },
});

export default Beneficios;
