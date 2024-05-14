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
      <View>
        <TextInput placeholder="Escribe tu Nombre" />

        <Button title="Guardar" color="#333" />

        <TouchableHighlight>
          <Text>Eliminar Nombre &times;</Text>
        </TouchableHighlight>
      </View>
    </>
  );
}

const styles = StyleSheet.create({});
