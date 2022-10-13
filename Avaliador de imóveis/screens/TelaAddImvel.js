import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Image,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const TelaAddImvel = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.telaAddImvel}>
      <View style={styles.dadosPropietarioInputView}>
        <View style={styles.inputDadosPropietario}>
          <View style={styles.cPFCNPJFieldView}>
            <View style={styles.headerView}>
              <Text style={styles.labelText}>Tipo de Pessoa</Text>
              <Text style={styles.descriptionText}>CPF/CNPJ</Text>
            </View>
            <TextInput
              style={[styles.fieldTextInput, styles.mt4]}
              placeholder="xxx.xxx.xxx-xx ou xx.xxx.xxx/000X-xx"
              keyboardType="number-pad"
              autoCapitalize="none"
              placeholderTextColor="#23856d"
            />
            <View style={[styles.footerView, styles.mt4]}>
              <Text style={styles.errorMessageText}>Error message</Text>
              <Text style={[styles.successMessageText, styles.mt4]}>
                Success message
              </Text>
              <Text style={[styles.subText, styles.mt4]}>Sub-text</Text>
            </View>
          </View>
          <View style={styles.nomePropietaroFieldView}>
            <View style={styles.headerView1}>
              <Text style={styles.labelText1}>Nome</Text>
              <Text style={styles.descriptionText1}>Description</Text>
            </View>
            <TextInput
              style={[styles.fieldTextInput1, styles.mt4]}
              placeholder="Nome Completo/Fantasia"
              keyboardType="default"
              autoCapitalize="words"
              placeholderTextColor="#23856d"
            />
            <View style={[styles.footerView1, styles.mt4]}>
              <Text style={styles.errorMessageText1}>Error message</Text>
              <Text style={[styles.successMessageText1, styles.mt4]}>
                Success message
              </Text>
              <Text style={[styles.subText1, styles.mt4]}>Sub-text</Text>
            </View>
          </View>
        </View>
        <Text style={styles.textoDadosPropietario}>
          Dados do Proprietario/Solicitante
        </Text>
      </View>
      <View style={styles.dadosImovelInputView}>
        <View style={styles.inputDadosCorretor}>
          <View style={styles.preoCorretorFieldView}>
            <View style={styles.headerView2}>
              <Text style={styles.labelText2}>Preço do Corretor</Text>
              <Text style={styles.descriptionText2}>Description</Text>
            </View>
            <TextInput
              style={[styles.fieldTextInput2, styles.mt4]}
              placeholder="R$"
              keyboardType="numeric"
              autoCapitalize="none"
              placeholderTextColor="#23856d"
            />
            <View style={[styles.footerView2, styles.mt4]}>
              <Text style={styles.errorMessageText2}>Error message</Text>
              <Text style={[styles.successMessageText2, styles.mt4]}>
                Success message
              </Text>
              <Text style={[styles.subText2, styles.mt4]}>Sub-text</Text>
            </View>
          </View>
          <View style={styles.preoMedioFieldView}>
            <View style={styles.headerView3}>
              <Text style={styles.labelText3}>Preço Médio Sugerido</Text>
              <Text style={styles.descriptionText3}>Description</Text>
            </View>
            <TextInput
              style={[styles.fieldTextInput3, styles.mt4]}
              placeholder="Baseado no bairro"
              keyboardType="default"
              autoCapitalize="none"
              placeholderTextColor="#23856d"
            />
            <View style={[styles.footerView3, styles.mt4]}>
              <Text style={styles.errorMessageText3}>Error message</Text>
              <Text style={[styles.successMessageText3, styles.mt4]}>
                Success message
              </Text>
              <Text style={[styles.subText3, styles.mt4]}>Sub-text</Text>
            </View>
          </View>
          <View style={styles.bairroFieldView}>
            <View style={styles.headerView4}>
              <Text style={styles.labelText4}>Bairro</Text>
              <Text style={styles.descriptionText4}>Description</Text>
            </View>
            <TextInput
              style={[styles.fieldTextInput4, styles.mt4]}
              placeholder="Localização"
              keyboardType="default"
              placeholderTextColor="#23856d"
            />
            <View style={[styles.footerView4, styles.mt4]}>
              <Text style={styles.errorMessageText4}>Error message</Text>
              <Text style={[styles.successMessageText4, styles.mt4]}>
                Success message
              </Text>
              <Text style={[styles.subText4, styles.mt4]}>Sub-text</Text>
            </View>
          </View>
          <View style={styles.destinoFieldView}>
            <View style={styles.headerView5}>
              <Text style={styles.labelText5}>Destino</Text>
              <Text style={styles.descriptionText5}>Description</Text>
            </View>
            <TextInput
              style={[styles.fieldTextInput5, styles.mt4]}
              placeholder="Laudo de Avaliação"
              keyboardType="default"
              placeholderTextColor="#23856d"
            />
            <View style={[styles.footerView5, styles.mt4]}>
              <Text style={styles.errorMessageText5}>Error message</Text>
              <Text style={[styles.successMessageText5, styles.mt4]}>
                Success message
              </Text>
              <Text style={[styles.subText5, styles.mt4]}>Sub-text</Text>
            </View>
          </View>
          <View style={styles.contatoFieldView}>
            <View style={styles.headerView6}>
              <Text style={styles.labelText6}>Contato</Text>
              <Text style={styles.descriptionText6}>Description</Text>
            </View>
            <TextInput
              style={[styles.fieldTextInput6, styles.mt4]}
              placeholder="Solicitação do cliente"
              keyboardType="default"
              placeholderTextColor="#23856d"
            />
            <View style={[styles.footerView6, styles.mt4]}>
              <Text style={styles.errorMessageText6}>Error message</Text>
              <Text style={[styles.successMessageText6, styles.mt4]}>
                Success message
              </Text>
              <Text style={[styles.subText6, styles.mt4]}>Sub-text</Text>
            </View>
          </View>
          <View style={styles.corretorFieldView}>
            <View style={styles.headerView7}>
              <Text style={styles.labelText7}>Corretor</Text>
              <Text style={styles.descriptionText7}>Description</Text>
            </View>
            <TextInput
              style={[styles.fieldTextInput7, styles.mt4]}
              placeholder="Nome do Corretor"
              keyboardType="default"
              placeholderTextColor="#23856d"
            />
            <View style={[styles.footerView7, styles.mt4]}>
              <Text style={styles.errorMessageText7}>Error message</Text>
              <Text style={[styles.successMessageText7, styles.mt4]}>
                Success message
              </Text>
              <Text style={[styles.subText7, styles.mt4]}>Sub-text</Text>
            </View>
          </View>
          <View style={styles.dataFieldView}>
            <View style={styles.headerView8}>
              <Text style={styles.labelText8}>Data</Text>
              <Text style={styles.descriptionText8}>Description</Text>
            </View>
            <TextInput
              style={[styles.fieldTextInput8, styles.mt4]}
              placeholder="Dia/Mês/Ano"
              keyboardType="number-pad"
              autoCapitalize="none"
              placeholderTextColor="#23856d"
            />
            <View style={[styles.footerView8, styles.mt4]}>
              <Text style={styles.errorMessageText8}>Error message</Text>
              <Text style={[styles.successMessageText8, styles.mt4]}>
                Success message
              </Text>
              <Text style={[styles.subText8, styles.mt4]}>Sub-text</Text>
            </View>
          </View>
        </View>
        <Pressable
          style={styles.grupoAddImagens}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={styles.botoADDIcon}
            resizeMode="cover"
            source={require("../assets/boto-add1.png")}
          />
          <Text style={styles.textoAddImans}>Adicionar Imagens</Text>
        </Pressable>
        <Text style={styles.textoNumImovel} numberOfLines={1}>
          Imovel N°
        </Text>
      </View>
      <Image
        style={styles.botoCONFIRMAIcon}
        resizeMode="cover"
        source={require("../assets/boto-confirma.png")}
      />
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
    fontFamily: "roboto",
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
    top: 89,
    left: 0,
    width: 333,
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
    borderRadius: 4,
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
    fontFamily: "roboto",
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
    top: 0,
    left: 0,
    width: 333,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  inputDadosPropietario: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 333,
    height: 185,
  },
  textoDadosPropietario: {
    position: "absolute",
    top: -36,
    right: -20,
    left: -7,
    fontSize: 21,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#000",
    textAlign: "center",
    height: 25,
  },
  dadosPropietarioInputView: {
    position: "absolute",
    top: 576,
    left: 7,
    width: 333,
    height: 185,
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
    fontFamily: "roboto",
    fontWeight: "bold",
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
    top: 271,
    left: 0,
    width: 160,
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
    fontFamily: "roboto",
    fontWeight: "bold",
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
    top: 182,
    left: 173,
    width: 160,
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
    top: 182,
    left: 0,
    width: 160,
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
    top: 91,
    left: 173,
    width: 160,
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
    top: 91,
    left: 0,
    width: 160,
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
    borderRadius: 4,
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
    top: 0,
    left: 173,
    width: 160,
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
    top: 0,
    left: 0,
    width: 160,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  inputDadosCorretor: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 333,
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
    top: -129,
    right: 18,
    width: 150,
    height: 90,
  },
  textoNumImovel: {
    position: "absolute",
    top: -79,
    left: 21,
    fontSize: 21,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#000",
    textAlign: "justify",
  },
  dadosImovelInputView: {
    position: "absolute",
    top: 154,
    right: 7,
    left: 7,
    height: 348,
  },
  botoCONFIRMAIcon: {
    position: "absolute",
    right: 15,
    bottom: 10,
    width: 55,
    height: 55,
  },
  telaAddImvel: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 835,
    overflow: "hidden",
  },
});

export default TelaAddImvel;
