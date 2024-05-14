import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
} from "react-native";
// import Storage from "react-native-storage";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

export default function HomeScreen() {
  return (
    <>


      <Text style={styles.titulo}
      >
        React-Native - {"<AsyncStorage />"}
      </Text>


      <View style={styles.contenedor}>


        <TextInput
          style={styles.input}
          placeholder="Escribe tu Nombre"
        />

        <Button
          title="Guardar"
          color="#9f0909"
        />

        <TouchableHighlight
          style={styles.btnEliminar}
        >
          <Text
            style={styles.txtEliminar}
          >Eliminar Nombre &times;
          </Text>
        </TouchableHighlight>
      </View>
    </>
  );
}

const styles = StyleSheet.create({

  titulo: {
    color: "white",
    fontSize: 20,
    fontWeight: "900",
    padding: 10,
    backgroundColor: "red",
    textAlign: "center"
  },
  contenedor: {
    flex: 1,
    backgroundColor: "#C7C9C4",
    alignItems: "center",
    justifyContent: "center",


  },
  input: {
    borderColor: "##666",
    borderBottomWidth: 1,
    width: 300,
    height: 40,
    margin: 20
  },
  btnEliminar: {
    padding: 10,
    marginTop: 20,

  },
  txtEliminar: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
    width: 300
  }
});
