import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const TelaVerImvel = () => {
  return (
    <View style={styles.telaVerImvel}>
      <View style={styles.dadosPropietarioInputView}>
        <View style={styles.inputDadosPropietario}>
          <View style={styles.cPFCNPJFieldView}>
            <View style={styles.headerView}>
              <Text style={styles.labelText}>Tipo de Pessoa</Text>
              <Text style={styles.descriptionText}>CPF/CNPJ</Text>
            </View>
            <View style={[styles.fieldView, styles.mt4]}>
              <Image
                style={styles.icon}
                resizeMode="cover"
                source={require("../assets/icon.png")}
              />
              <Text style={[styles.placeholderText, styles.ml8]}>
                Placeholder
              </Text>
              <Image
                style={[styles.clearIcon, styles.ml8]}
                resizeMode="cover"
                source={require("../assets/clear.png")}
              />
              <Image
                style={[styles.informationIcon, styles.ml8]}
                resizeMode="cover"
                source={require("../assets/information.png")}
              />
            </View>
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
            <View style={[styles.fieldView1, styles.mt4]}>
              <Image
                style={styles.icon1}
                resizeMode="cover"
                source={require("../assets/icon.png")}
              />
              <Text style={[styles.placeholderText1, styles.ml8]}>
                Placeholder
              </Text>
              <Image
                style={[styles.clearIcon1, styles.ml8]}
                resizeMode="cover"
                source={require("../assets/clear.png")}
              />
              <Image
                style={[styles.informationIcon1, styles.ml8]}
                resizeMode="cover"
                source={require("../assets/information.png")}
              />
            </View>
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
            <View style={[styles.fieldView2, styles.mt4]}>
              <Image
                style={styles.icon2}
                resizeMode="cover"
                source={require("../assets/icon.png")}
              />
              <Text style={[styles.placeholderText2, styles.ml8]}>
                Placeholder
              </Text>
              <Image
                style={[styles.clearIcon2, styles.ml8]}
                resizeMode="cover"
                source={require("../assets/clear.png")}
              />
              <Image
                style={[styles.informationIcon2, styles.ml8]}
                resizeMode="cover"
                source={require("../assets/information.png")}
              />
            </View>
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
            <View style={[styles.fieldView3, styles.mt4]}>
              <Image
                style={styles.icon3}
                resizeMode="cover"
                source={require("../assets/icon.png")}
              />
              <Text style={[styles.placeholderText3, styles.ml8]}>
                Placeholder
              </Text>
              <Image
                style={[styles.clearIcon3, styles.ml8]}
                resizeMode="cover"
                source={require("../assets/clear.png")}
              />
              <Image
                style={[styles.informationIcon3, styles.ml8]}
                resizeMode="cover"
                source={require("../assets/information.png")}
              />
            </View>
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
            <View style={[styles.fieldView4, styles.mt4]}>
              <Image
                style={styles.icon4}
                resizeMode="cover"
                source={require("../assets/icon.png")}
              />
              <Text style={[styles.placeholderText4, styles.ml8]}>
                Placeholder
              </Text>
              <Image
                style={[styles.clearIcon4, styles.ml8]}
                resizeMode="cover"
                source={require("../assets/clear.png")}
              />
              <Image
                style={[styles.informationIcon4, styles.ml8]}
                resizeMode="cover"
                source={require("../assets/information.png")}
              />
            </View>
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
            <View style={[styles.fieldView5, styles.mt4]}>
              <Image
                style={styles.icon5}
                resizeMode="cover"
                source={require("../assets/icon.png")}
              />
              <Text style={[styles.placeholderText5, styles.ml8]}>
                Placeholder
              </Text>
              <Image
                style={[styles.clearIcon5, styles.ml8]}
                resizeMode="cover"
                source={require("../assets/clear.png")}
              />
              <Image
                style={[styles.informationIcon5, styles.ml8]}
                resizeMode="cover"
                source={require("../assets/information.png")}
              />
            </View>
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
            <View style={[styles.fieldView6, styles.mt4]}>
              <Image
                style={styles.icon6}
                resizeMode="cover"
                source={require("../assets/icon.png")}
              />
              <Text style={[styles.placeholderText6, styles.ml8]}>
                Placeholder
              </Text>
              <Image
                style={[styles.clearIcon6, styles.ml8]}
                resizeMode="cover"
                source={require("../assets/clear.png")}
              />
              <Image
                style={[styles.informationIcon6, styles.ml8]}
                resizeMode="cover"
                source={require("../assets/information.png")}
              />
            </View>
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
            <View style={[styles.fieldView7, styles.mt4]}>
              <Image
                style={styles.icon7}
                resizeMode="cover"
                source={require("../assets/icon.png")}
              />
              <Text style={[styles.placeholderText7, styles.ml8]}>
                Placeholder
              </Text>
              <Image
                style={[styles.clearIcon7, styles.ml8]}
                resizeMode="cover"
                source={require("../assets/clear.png")}
              />
              <Image
                style={[styles.informationIcon7, styles.ml8]}
                resizeMode="cover"
                source={require("../assets/information.png")}
              />
            </View>
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
            <View style={[styles.fieldView8, styles.mt4]}>
              <Image
                style={styles.icon8}
                resizeMode="cover"
                source={require("../assets/icon.png")}
              />
              <Text style={[styles.placeholderText8, styles.ml8]}>
                Placeholder
              </Text>
              <Image
                style={[styles.clearIcon8, styles.ml8]}
                resizeMode="cover"
                source={require("../assets/clear.png")}
              />
              <Image
                style={[styles.informationIcon8, styles.ml8]}
                resizeMode="cover"
                source={require("../assets/information.png")}
              />
            </View>
            <View style={[styles.footerView8, styles.mt4]}>
              <Text style={styles.errorMessageText8}>Error message</Text>
              <Text style={[styles.successMessageText8, styles.mt4]}>
                Success message
              </Text>
              <Text style={[styles.subText8, styles.mt4]}>Sub-text</Text>
            </View>
          </View>
        </View>
        <View style={styles.grupoAddImagens}>
          <Image
            style={styles.botoADDIcon}
            resizeMode="cover"
            source={require("../assets/boto-add1.png")}
          />
          <Text style={styles.textoAddImans}>View de imagens</Text>
        </View>
        <Text style={styles.textoNumImovel}>Imovel N°</Text>
      </View>
      <Image
        style={styles.editIcon}
        resizeMode="cover"
        source={require("../assets/edit.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ml8: {
    marginLeft: 8,
  },
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
  icon: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
    display: "none",
  },
  placeholderText: {
    flex: 1,
    position: "relative",
    fontSize: 16,
    lineHeight: 24,
    fontFamily: "Roboto",
    color: "#23856d",
    textAlign: "left",
    height: 24,
  },
  clearIcon: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
    display: "none",
  },
  informationIcon: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
    display: "none",
  },
  fieldView: {
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
  icon1: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
    display: "none",
  },
  placeholderText1: {
    flex: 1,
    position: "relative",
    fontSize: 16,
    lineHeight: 24,
    fontFamily: "Roboto",
    color: "#23856d",
    textAlign: "left",
    height: 24,
  },
  clearIcon1: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
    display: "none",
  },
  informationIcon1: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
    display: "none",
  },
  fieldView1: {
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
  icon2: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
    display: "none",
  },
  placeholderText2: {
    flex: 1,
    position: "relative",
    fontSize: 16,
    lineHeight: 24,
    fontFamily: "Roboto",
    color: "#23856d",
    textAlign: "left",
    height: 24,
  },
  clearIcon2: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
    display: "none",
  },
  informationIcon2: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
    display: "none",
  },
  fieldView2: {
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
  icon3: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
    display: "none",
  },
  placeholderText3: {
    flex: 1,
    position: "relative",
    fontSize: 16,
    lineHeight: 24,
    fontFamily: "Roboto",
    color: "#23856d",
    textAlign: "left",
    height: 24,
  },
  clearIcon3: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
    display: "none",
  },
  informationIcon3: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
    display: "none",
  },
  fieldView3: {
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
  icon4: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
    display: "none",
  },
  placeholderText4: {
    flex: 1,
    position: "relative",
    fontSize: 16,
    lineHeight: 24,
    fontFamily: "Roboto",
    color: "#23856d",
    textAlign: "left",
    height: 24,
  },
  clearIcon4: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
    display: "none",
  },
  informationIcon4: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
    display: "none",
  },
  fieldView4: {
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
  icon5: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
    display: "none",
  },
  placeholderText5: {
    flex: 1,
    position: "relative",
    fontSize: 16,
    lineHeight: 24,
    fontFamily: "Roboto",
    color: "#23856d",
    textAlign: "left",
    height: 24,
  },
  clearIcon5: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
    display: "none",
  },
  informationIcon5: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
    display: "none",
  },
  fieldView5: {
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
  icon6: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
    display: "none",
  },
  placeholderText6: {
    flex: 1,
    position: "relative",
    fontSize: 16,
    lineHeight: 24,
    fontFamily: "Roboto",
    color: "#23856d",
    textAlign: "left",
    height: 24,
  },
  clearIcon6: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
    display: "none",
  },
  informationIcon6: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
    display: "none",
  },
  fieldView6: {
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
  icon7: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
    display: "none",
  },
  placeholderText7: {
    flex: 1,
    position: "relative",
    fontSize: 16,
    lineHeight: 24,
    fontFamily: "Roboto",
    color: "#23856d",
    textAlign: "left",
    height: 24,
  },
  clearIcon7: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
    display: "none",
  },
  informationIcon7: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
    display: "none",
  },
  fieldView7: {
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
  icon8: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
    display: "none",
  },
  placeholderText8: {
    flex: 1,
    position: "relative",
    fontSize: 16,
    lineHeight: 24,
    fontFamily: "Roboto",
    color: "#23856d",
    textAlign: "left",
    height: 24,
  },
  clearIcon8: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
    display: "none",
  },
  informationIcon8: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
    display: "none",
  },
  fieldView8: {
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
    textAlign: "center",
  },
  dadosImovelInputView: {
    position: "absolute",
    top: 154,
    right: 7,
    left: 7,
    height: 348,
  },
  editIcon: {
    position: "absolute",
    top: 770,
    left: 290,
    width: 55,
    height: 55,
    overflow: "hidden",
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
