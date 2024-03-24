import React from "react";
import { TouchableOpacity, Text, StyleSheet, Alert } from "react-native";

const CustomButton = ({ onPress, title, textColor, buttonColor }) => {
  const handlePress = () => {
    Alert.alert("Carregando", "Efetuando login", [{ text: "OK" }]);
    onPress();
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[styles.button, { backgroundColor: buttonColor }]}
    >
      <Text style={[styles.text, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

//codigo para colocar no app
/*<CustomButton
  onPress={() => console.log('Autenticando login')}
  title="Entrar"
  textColor="red"
  buttonColor="black"
/> */

export default CustomButton;
