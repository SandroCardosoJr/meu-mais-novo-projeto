import React from "react";
import { Text, StyleSheet } from "react-native";

/*
1ª forma de se criar um componente
class Titulo extends React.Component {

    render() {
        return(
            <Text style={css.titulo}>Ola!!!!</Text>
        );
    }

}
*/

/*
2ª Forma de criar um componente em formato de arrow function
const Titulo  = () => (
    <Text style={css.titulo} >Flamengo!</Text>
);
*/

function Titulo(props) {
  return <Text style={css.titulo}>{props.titulo}</Text>;
}

const css = StyleSheet.create({
  titulo: {
    color: "black",
    fontSize: 35,
    fontWeight: "bold",
    alignSelf: "center",
  },
});

export default Titulo;
