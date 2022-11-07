import * as React from "react";
import { useCallback } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Image,
  Pressable,
  Alert,
} from "react-native";

const TelaVerImvel = () => {
  const onEditImageClick = useCallback(() => {
    Alert.alert("Editar Registro?", "Confirmação", [
      {
        text: "Editar",
        onPress: () => console.log("Editar pressed"),
      },
      {
        text: "Cancelar Edição",
        onPress: () => console.log("Cancelar Edição pressed"),
      },
    ]);
  }, []);

  return (
    <View style={styles.telaVerImvel}>
      <View style={styles.cPFCNPJFieldView}>
        <View style={styles.headerView}>
          <Text style={styles.labelText}>Tipo de Pessoa</Text>
          <Text style={styles.descriptionText}>CPF/CNPJ</Text>
        </View>
        <TextInput
          style={[styles.fieldTextInput, styles.mt4]}
          placeholder="Placeholder"
          keyboardType="default"
          autoCapitalize="none"
          placeholderTextColor="#23856d"
          editable={false}
        />
      </View>
      <View style={styles.nomePropietaroFieldView}>
        <View style={styles.headerView1}>
          <Text style={styles.labelText1}>Nome</Text>
          <Text style={styles.descriptionText1}>Description</Text>
        </View>
        <TextInput
          style={[styles.fieldTextInput1, styles.mt4]}
          placeholder="Placeholder"
          keyboardType="default"
          autoCapitalize="none"
          placeholderTextColor="#23856d"
          editable={false}
        />
      </View>
      <Text style={styles.textoDadosPropietario}>
        Dados do Proprietario/Solicitante
      </Text>
      <View style={styles.inputDadosCorretor}>
        <View style={styles.preoCorretorFieldView}>
          <View style={styles.headerView2}>
            <Text style={styles.labelText2}>Preço do Corretor</Text>
            <Text style={styles.descriptionText2}>Description</Text>
          </View>
          <TextInput
            style={[styles.fieldTextInput2, styles.mt4]}
            placeholder="Placeholder"
            keyboardType="default"
            autoCapitalize="none"
            placeholderTextColor="#23856d"
            editable={false}
          />
        </View>
        <View style={styles.preoMedioFieldView}>
          <View style={styles.headerView3}>
            <Text style={styles.labelText3}>Preço Médio Sugerido</Text>
            <Text style={styles.descriptionText3}>Description</Text>
          </View>
          <TextInput
            style={[styles.fieldTextInput3, styles.mt4]}
            placeholder="Placeholder"
            keyboardType="default"
            autoCapitalize="none"
            placeholderTextColor="#23856d"
            editable={false}
          />
        </View>
        <View style={styles.bairroFieldView}>
          <View style={styles.headerView4}>
            <Text style={styles.labelText4}>Bairro</Text>
            <Text style={styles.descriptionText4}>Description</Text>
          </View>
          <TextInput
            style={[styles.fieldTextInput4, styles.mt4]}
            placeholder="Placeholder"
            keyboardType="default"
            autoCapitalize="none"
            placeholderTextColor="#23856d"
            editable={false}
          />
        </View>
        <View style={styles.destinoFieldView}>
          <View style={styles.headerView5}>
            <Text style={styles.labelText5}>Destino</Text>
            <Text style={styles.descriptionText5}>Description</Text>
          </View>
          <TextInput
            style={[styles.fieldTextInput5, styles.mt4]}
            placeholder="Placeholder"
            keyboardType="default"
            autoCapitalize="none"
            placeholderTextColor="#23856d"
            editable={false}
          />
        </View>
        <View style={styles.contatoFieldView}>
          <View style={styles.headerView6}>
            <Text style={styles.labelText6}>Contato</Text>
            <Text style={styles.descriptionText6}>Description</Text>
          </View>
          <TextInput
            style={[styles.fieldTextInput6, styles.mt4]}
            placeholder="Placeholder"
            keyboardType="default"
            autoCapitalize="none"
            placeholderTextColor="#23856d"
            editable={false}
          />
        </View>
        <View style={styles.corretorFieldView}>
          <View style={styles.headerView7}>
            <Text style={styles.labelText7}>Corretor</Text>
            <Text style={styles.descriptionText7}>Description</Text>
          </View>
          <TextInput
            style={[styles.fieldTextInput7, styles.mt4]}
            placeholder="Placeholder"
            keyboardType="default"
            autoCapitalize="none"
            placeholderTextColor="#23856d"
            editable={false}
          />
        </View>
        <View style={styles.dataFieldView}>
          <View style={styles.headerView8}>
            <Text style={styles.labelText8}>Data</Text>
            <Text style={styles.descriptionText8}>Description</Text>
          </View>
          <TextInput
            style={[styles.fieldTextInput8, styles.mt4]}
            placeholder="Placeholder"
            keyboardType="default"
            autoCapitalize="none"
            placeholderTextColor="#23856d"
            editable={false}
          />
        </View>
      </View>
      <View style={styles.grupoAddImagens}>
        <Image
          style={styles.botoADDIcon}
          resizeMode="cover"
          source={require("../assets/boto-add.png")}
        />
        <Text style={styles.textoAddImans}>View de imagens</Text>
      </View>
      <Text style={styles.textoNumImovel}>Imovel N°</Text>
      <Pressable style={styles.editPressable} onPress={onEditImageClick}>
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/edit.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  mt4: {
    marginTop: 4,
  },
  labelText: {
    position: "relative",
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#000",
    textAlign: "left",
  },
  descriptionText: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Roboto",
    color: "#000",
    textAlign: "left",
  },
  headerView: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  fieldTextInput: {
    alignSelf: "stretch",
    borderRadius: 5,
    backgroundColor: "rgba(188, 189, 192, 0.3)",
    height: 48,
    flexShrink: 0,
    overflow: "hidden",
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 12,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  errorMessageText: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Roboto",
    color: "#ff8686",
    textAlign: "left",
    display: "none",
  },
  successMessageText: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Roboto",
    color: "#19c18f",
    textAlign: "left",
    display: "none",
  },
  subText: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Roboto",
    color: "#b6bff3",
    textAlign: "left",
    display: "none",
  },
  footerView: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    display: "none",
  },
  cPFCNPJFieldView: {
    position: "absolute",
    transform: [
      {
        translateX: -173,
      },
    ],
    top: 665,
    left: "50%",
    width: 346,
    height: 96,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  labelText1: {
    position: "relative",
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#000",
    textAlign: "left",
  },
  descriptionText1: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Roboto",
    color: "#000",
    textAlign: "left",
    display: "none",
  },
  headerView1: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  fieldTextInput1: {
    alignSelf: "stretch",
    borderRadius: 5,
    backgroundColor: "rgba(188, 189, 192, 0.3)",
    height: 48,
    flexShrink: 0,
    overflow: "hidden",
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 12,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  errorMessageText1: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Roboto",
    color: "#ff8686",
    textAlign: "left",
    display: "none",
  },
  successMessageText1: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Roboto",
    color: "#19c18f",
    textAlign: "left",
    display: "none",
  },
  subText1: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Roboto",
    color: "#b6bff3",
    textAlign: "left",
    display: "none",
  },
  footerView1: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    display: "none",
  },
  nomePropietaroFieldView: {
    position: "absolute",
    transform: [
      {
        translateX: -173,
      },
    ],
    top: 576,
    left: "50%",
    width: 346,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  textoDadosPropietario: {
    position: "absolute",
    top: 540,
    left: 0,
    fontSize: 21,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#000",
    textAlign: "center",
    width: 360,
    height: 25,
  },
  labelText2: {
    position: "relative",
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#000",
    textAlign: "left",
  },
  descriptionText2: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Roboto",
    color: "#000",
    textAlign: "left",
    display: "none",
  },
  headerView2: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  fieldTextInput2: {
    alignSelf: "stretch",
    borderRadius: 5,
    backgroundColor: "rgba(188, 189, 192, 0.3)",
    height: 48,
    flexShrink: 0,
    overflow: "hidden",
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 12,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  errorMessageText2: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Roboto",
    color: "#ff8686",
    textAlign: "left",
    display: "none",
  },
  successMessageText2: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Roboto",
    color: "#19c18f",
    textAlign: "left",
    display: "none",
  },
  subText2: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Roboto",
    color: "#b6bff3",
    textAlign: "left",
    display: "none",
  },
  footerView2: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    display: "none",
  },
  preoCorretorFieldView: {
    position: "absolute",
    transform: [
      {
        translateX: -173,
      },
    ],
    top: 271,
    left: "50%",
    width: 166.25,
    height: 77,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  labelText3: {
    position: "relative",
    fontSize: 15,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#000",
    textAlign: "left",
  },
  descriptionText3: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Roboto",
    color: "#000",
    textAlign: "left",
    display: "none",
  },
  headerView3: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  fieldTextInput3: {
    alignSelf: "stretch",
    borderRadius: 5,
    backgroundColor: "rgba(188, 189, 192, 0.3)",
    height: 48,
    flexShrink: 0,
    overflow: "hidden",
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 12,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  errorMessageText3: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Roboto",
    color: "#ff8686",
    textAlign: "left",
    display: "none",
  },
  successMessageText3: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Roboto",
    color: "#19c18f",
    textAlign: "left",
    display: "none",
  },
  subText3: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Roboto",
    color: "#b6bff3",
    textAlign: "left",
    display: "none",
  },
  footerView3: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    display: "none",
  },
  preoMedioFieldView: {
    position: "absolute",
    transform: [
      {
        translateX: 6.75,
      },
    ],
    top: 182,
    left: "50%",
    width: 166.25,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  labelText4: {
    position: "relative",
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#000",
    textAlign: "left",
  },
  descriptionText4: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Roboto",
    color: "#000",
    textAlign: "left",
    display: "none",
  },
  headerView4: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  fieldTextInput4: {
    alignSelf: "stretch",
    borderRadius: 5,
    backgroundColor: "rgba(188, 189, 192, 0.3)",
    height: 48,
    flexShrink: 0,
    overflow: "hidden",
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 12,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  errorMessageText4: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Roboto",
    color: "#ff8686",
    textAlign: "left",
    display: "none",
  },
  successMessageText4: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Roboto",
    color: "#19c18f",
    textAlign: "left",
    display: "none",
  },
  subText4: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Roboto",
    color: "#b6bff3",
    textAlign: "left",
    display: "none",
  },
  footerView4: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    display: "none",
  },
  bairroFieldView: {
    position: "absolute",
    transform: [
      {
        translateX: -173,
      },
    ],
    top: 182,
    left: "50%",
    width: 166.25,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  labelText5: {
    position: "relative",
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#000",
    textAlign: "left",
  },
  descriptionText5: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Roboto",
    color: "#000",
    textAlign: "left",
    display: "none",
  },
  headerView5: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  fieldTextInput5: {
    alignSelf: "stretch",
    borderRadius: 5,
    backgroundColor: "rgba(188, 189, 192, 0.3)",
    height: 48,
    flexShrink: 0,
    overflow: "hidden",
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 12,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  errorMessageText5: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Roboto",
    color: "#ff8686",
    textAlign: "left",
    display: "none",
  },
  successMessageText5: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Roboto",
    color: "#19c18f",
    textAlign: "left",
    display: "none",
  },
  subText5: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Roboto",
    color: "#b6bff3",
    textAlign: "left",
    display: "none",
  },
  footerView5: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    display: "none",
  },
  destinoFieldView: {
    position: "absolute",
    transform: [
      {
        translateX: 6.75,
      },
    ],
    top: 91,
    left: "50%",
    width: 166.25,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  labelText6: {
    position: "relative",
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#000",
    textAlign: "left",
  },
  descriptionText6: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Roboto",
    color: "#000",
    textAlign: "left",
    display: "none",
  },
  headerView6: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  fieldTextInput6: {
    alignSelf: "stretch",
    borderRadius: 5,
    backgroundColor: "rgba(188, 189, 192, 0.3)",
    height: 48,
    flexShrink: 0,
    overflow: "hidden",
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 12,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  errorMessageText6: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Roboto",
    color: "#ff8686",
    textAlign: "left",
    display: "none",
  },
  successMessageText6: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Roboto",
    color: "#19c18f",
    textAlign: "left",
    display: "none",
  },
  subText6: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Roboto",
    color: "#b6bff3",
    textAlign: "left",
    display: "none",
  },
  footerView6: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    display: "none",
  },
  contatoFieldView: {
    position: "absolute",
    transform: [
      {
        translateX: -173,
      },
    ],
    top: 91,
    left: "50%",
    width: 166.25,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  labelText7: {
    position: "relative",
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#000",
    textAlign: "left",
  },
  descriptionText7: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Roboto",
    color: "#000",
    textAlign: "left",
    display: "none",
  },
  headerView7: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  fieldTextInput7: {
    alignSelf: "stretch",
    borderRadius: 5,
    backgroundColor: "rgba(188, 189, 192, 0.3)",
    height: 48,
    flexShrink: 0,
    overflow: "hidden",
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 12,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  errorMessageText7: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Roboto",
    color: "#ff8686",
    textAlign: "left",
    display: "none",
  },
  successMessageText7: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Roboto",
    color: "#19c18f",
    textAlign: "left",
    display: "none",
  },
  subText7: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Roboto",
    color: "#b6bff3",
    textAlign: "left",
    display: "none",
  },
  footerView7: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    display: "none",
  },
  corretorFieldView: {
    position: "absolute",
    transform: [
      {
        translateX: 6.75,
      },
    ],
    top: 0,
    left: "50%",
    width: 166.25,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  labelText8: {
    position: "relative",
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#000",
    textAlign: "left",
  },
  descriptionText8: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Roboto",
    color: "#000",
    textAlign: "left",
    display: "none",
  },
  headerView8: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  fieldTextInput8: {
    alignSelf: "stretch",
    borderRadius: 5,
    backgroundColor: "rgba(188, 189, 192, 0.3)",
    height: 48,
    flexShrink: 0,
    overflow: "hidden",
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 12,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  errorMessageText8: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Roboto",
    color: "#ff8686",
    textAlign: "left",
    display: "none",
  },
  successMessageText8: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Roboto",
    color: "#19c18f",
    textAlign: "left",
    display: "none",
  },
  subText8: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Roboto",
    color: "#b6bff3",
    textAlign: "left",
    display: "none",
  },
  footerView8: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    display: "none",
  },
  dataFieldView: {
    position: "absolute",
    transform: [
      {
        translateX: -173,
      },
    ],
    top: 0,
    left: "50%",
    width: 166.25,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  inputDadosCorretor: {
    position: "absolute",
    transform: [
      {
        translateX: -173,
      },
    ],
    top: 154,
    left: "50%",
    width: 346,
    height: 348,
  },
  botoADDIcon: {
    position: "absolute",
    top: 32.64,
    right: 46.04,
    width: 56,
    height: 57.36,
  },
  textoAddImans: {
    position: "absolute",
    top: 0,
    right: 0,
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#000",
    textAlign: "center",
    width: 150,
    height: 20.01,
  },
  grupoAddImagens: {
    position: "absolute",
    top: 25,
    right: 25,
    width: 150,
    height: 90,
  },
  textoNumImovel: {
    position: "absolute",
    top: 75,
    left: 28,
    fontSize: 21,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#000",
    textAlign: "center",
  },
  icon: {
    width: 55,
    height: 55,
  },
  editPressable: {
    position: "absolute",
    right: 15,
    bottom: 10,
  },
  telaVerImvel: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 835,
    overflow: "hidden",
  },
});

export default TelaVerImvel;
