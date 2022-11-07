import * as React from "react";
import { Text, StyleSheet, Image, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ImovelTab from "../components/ImovelTab";

const TelaListaImveis = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.telaListaImveis}>
      <ImovelTab />
      <Text style={styles.avaliadorDeImoveis}>Avaliador de Imoveis</Text>
      <Image
        style={styles.botoRecarregarIcon}
        resizeMode="cover"
        source={require("../assets/boto-recarregar.png")}
      />
      <Pressable
        style={styles.botoSearchPressable}
        onPress={() => navigation.toggleDrawer()}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/search.png")}
        />
      </Pressable>
      <Pressable
        style={styles.botoADDPressable}
        onPress={() => navigation.navigate("TelaAddImvel")}
      >
        <Image
          style={styles.icon1}
          resizeMode="cover"
          source={require("../assets/boto-add2.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  avaliadorDeImoveis: {
    position: "absolute",
    top: 11,
    right: 30,
    left: 30,
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#000",
    textAlign: "center",
  },
  botoRecarregarIcon: {
    position: "absolute",
    top: 23,
    right: 6,
    width: 40,
    height: 40,
    overflow: "hidden",
  },
  icon: {
    width: 40,
    height: 40,
    overflow: "hidden",
  },
  botoSearchPressable: {
    position: "absolute",
    left: 6,
    top: 23,
  },
  icon1: {
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
