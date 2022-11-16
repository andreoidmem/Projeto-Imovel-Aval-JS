import * as React from "react";
import { View, StyleSheet, Text, Image, Pressable, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ImovelTab = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.imoveis}>
          <View style={styles.rectangleView } onPress={() => navigation.navigate("TelaVerImvel")} />
          <Text style={styles.imvelNumeroText}>N°</Text>
          <Text style={styles.textoImvel}>Imóvel</Text>
          <Image
            style={styles.houseIcon}
            resizeMode="cover"
            source={require("../src/assets/houseicon.png")}
          />
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleView: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 4,
    backgroundColor: "#f8f8f8",
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    width: 300,
    height: 45,
  },
  imvelNumeroText: {
    position: "absolute",
    top: 12,
    left: 192,
    fontSize: 18,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#000",
    textAlign: "right",
    width: 102,
    height: 20,
  },
  textoImvel: {
    position: "absolute",
    top: 12,
    left: 42,
    fontSize: 18,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#000",
    textAlign: "left",
    width: 150,
    height: 20,
  },
  houseIcon: {
    position: "absolute",
    top: 10,
    left: 9,
    width: 25,
    height: 25,
  },
  imoveis: {
    position: "absolute",
    height: "6.63%",
    transform: [
      {
        translateX: -180,
      },
    ],
    top: "10%",
    bottom: "83.38%",
    left: "55%",
    width: 359,
  },
});

export default ImovelTab;
