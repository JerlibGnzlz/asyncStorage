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
  contenedor: {
    flex: 1,
    backgroundColor: "#878B88",
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
