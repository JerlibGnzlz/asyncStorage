import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

export default function HomeScreen() {
  const [inputTexto, guardarInputTexto] = useState("");
  const [nombreStorage, guardarNombreStorage] = useState("");

  useEffect(() => {
    obtenerDatosStorage()
  }, []);

  const guardarDatos = async () => {
    try {
      await AsyncStorage.setItem("nombre", inputTexto);
      guardarNombreStorage(inputTexto)
    } catch (error) {
      console.log(error);
    }
  };

  const obtenerDatosStorage = async () => {
    try {
      const nombre = await AsyncStorage.getItem("nombre")
      if (nombre !== null) {
        guardarNombreStorage(nombre)
      } else {
        console.log("Nombre no encontrado en el almacenamiento.")
      }
      console.log(nombre)
    } catch (error) {
      console.log(error)
    }
  }
  const eliminarDatos = async () => {
    try {
      const nombre = await AsyncStorage.removeItem("nombre")
      guardarNombreStorage("")
      return nombre
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <>
      <View style={styles.contenedor}>
        <Text style={styles.titulo}>React-Native - {"<AsyncStorage />"}</Text>

        {nombreStorage ? <Text>Hola: {nombreStorage}</Text> : null}


        <TextInput
          style={styles.input}
          placeholder="Escribe tu Nombre"
          onChangeText={(texto) => guardarInputTexto(texto)}
        />

        <Button title="Guardar" onPress={() => guardarDatos()} />

        {nombreStorage ?
          <TouchableHighlight
            onPress={() => eliminarDatos()}
            style={styles.btnEliminar}>
            <Text style={styles.txtEliminar}>Eliminar Nombre &times;</Text>
          </TouchableHighlight>
          : null}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  titulo: {
    marginVertical: 30,
    color: "white",
    fontSize: 20,
    fontWeight: "900",
    padding: 10,
    backgroundColor: "#2E73D7",
    textAlign: "center",
    borderRadius: 30,
  },
  contenedor: {
    flex: 1,
    backgroundColor: "#C7C9C4",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  input: {
    borderColor: "##666",
    borderBottomWidth: 1,
    width: 300,
    height: 40,
    margin: 20,
  },
  btnEliminar: {
    backgroundColor: "red",
    padding: 10,
    marginTop: 20,
    borderRadius: 30,
  },
  txtEliminar: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
    width: 300,
  },
});
