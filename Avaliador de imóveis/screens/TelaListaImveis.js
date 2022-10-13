import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const TelaListaImveis = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.telaListaImveis}>
      <Pressable
        style={styles.imvelTemplatePressable}
        onPress={() => navigation.navigate("TelaVerImvel")}
      >
        <View style={styles.rectangleView} />
        <Text style={styles.textoImvel}>Imóvel</Text>
        <Image
          style={styles.houseIcon}
          resizeMode="cover"
          source={require("../assets/houseicon.png")}
        />
      </Pressable>
      <Text style={styles.avaliadorDeImoveis}>Avaliador de Imoveis</Text>
      <Image
        style={styles.cachedIcon}
        resizeMode="cover"
        source={require("../assets/cached.png")}
      />
      <Pressable
        style={styles.botoADDPressable}
        onPress={() => navigation.navigate("TelaAddImvel")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/boto-add.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleView: {
    position: "absolute",
    top: 0,
    left: 6,
    borderRadius: 4,
    backgroundColor: "#f8f8f8",
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    width: 300,
    height: 45,
  },
  textoImvel: {
    position: "absolute",
    top: 12,
    left: 48,
    fontSize: 18,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#000",
    textAlign: "left",
    width: 55,
    height: 20,
  },
  houseIcon: {
    position: "absolute",
    top: 10,
    left: 15,
    width: 25,
    height: 25,
  },
  imvelTemplatePressable: {
    position: "absolute",
    height: "6.25%",
    width: "100%",
    top: "10.63%",
    right: "0%",
    bottom: "83.13%",
    left: "0%",
    overflow: "hidden",
  },
  avaliadorDeImoveis: {
    position: "absolute",
    top: 11,
    right: 30,
    left: 30,
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "center",
  },
  cachedIcon: {
    position: "absolute",
    top: 23,
    right: 6,
    width: 40,
    height: 40,
    overflow: "hidden",
  },
  icon: {
    width: 55,
    height: 55,
  },
  botoADDPressable: {
    position: "absolute",
    left: 15,
    bottom: 10,
  },
  telaListaImveis: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default TelaListaImveis;
