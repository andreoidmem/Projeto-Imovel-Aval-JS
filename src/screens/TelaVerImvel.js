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
        text: "Habilitar Ediçãoclear",
        onPress: () => console.log("Editar pressed"),
      },
      {
        text: "Cancelar Edição",
        onPress: () => console.log("Cancelar Edição pressed"),
      },
    ]);
  }, []);

  const [CPF, setCPF,] = React.useState('');
  const [CELL, setCEll,] = React.useState('');
  const [PCRT, setPCRT,] = React.useState('');
  const [DATA, setDATA,] = React.useState('');


  return (
    <KeyboardAvoidingView style={flex = 1}>
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

          <View style={styles.telaAddImvel}>
            <View style={styles.inputDadosPropietario}>
              <View style={styles.cPFCNPJFieldView}>
                <View style={styles.headerView}>
                  <Text style={styles.labelText}>Tipo de Pessoa</Text>
                  <Text style={styles.descriptionText}>CPF/CNPJ</Text>
                </View>
                <TextInputMask
                  style={[styles.fieldTextInput, styles.mt4]}
                  placeholder="xxx.xxx.xxx-xx ou xx.xxx.xxx/000X-xx"
                  keyboardType="numeric"
                  placeholderTextColor="#23856d"
                  autoComplete="off"
                  type="cpf"
                  value={CPF}
                  onChangeText={input => setCPF(input)}
                  editable={false}

                />
              </View>
              <View style={styles.nomePropietaroFieldView}>
                <View style={styles.headerView1}>
                  <Text style={styles.labelText1}>Nome</Text>
                </View>
                <TextInput
                  style={[styles.fieldTextInput1, styles.mt4]}
                  placeholder="Nome Completo/Fantasia"
                  keyboardType="default"
                  autoCapitalize="words"
                  placeholderTextColor="#23856d"
                  editable={false}

                />
              </View>
              <Text style={styles.textoDadosPropietario}>
                Dados do Proprietario/Solicitante
              </Text>
            </View>
            <View style={styles.inputDadosCorretor}>
              <View style={styles.valorFinalFieldView}>
                <View style={styles.headerView2}>
                  <Text style={styles.labelText2}>Valor final da avaliação</Text>
                </View>
                <TextInput
                  style={[styles.fieldTextInput2, styles.mt4]}
                  placeholder="Valor final em R$"
                  keyboardType="numeric"
                  autoCapitalize="none"
                  placeholderTextColor="#23856d"
                  editable={false}

                />
              </View>
              <View style={styles.sugesto3DropdownView}>
                <View style={styles.headerView3}>
                  <Text style={styles.labelText3}>Amostra 3</Text>
                </View>
                <View style={[styles.fieldView, styles.mt4]}>
                  <Text>//Aqui dropdown</Text>
                </View>
              </View>
              <View style={styles.sugesto2DropdownView}>
                <View style={styles.headerView4}>
                  <Text style={styles.labelText4}>Amostra 2</Text>
                </View>
                <View style={[styles.fieldView1, styles.mt4]}>
                  <Text>//Aqui dropdown</Text>
                </View>
              </View>
              <View style={styles.preoSugeridoFieldView}>
                <View style={styles.headerView5}>
                  <Text style={styles.labelText5}>Valor Sugerido</Text>
                </View>
                <TextInputMask
                  style={[styles.fieldTextInput3, styles.mt4]}
                  placeholder="R$"
                  keyboardType="numeric"
                  placeholderTextColor="#23856d"
                  type="money"
                  options={{
                    precision: 2,
                    separator: ',',
                    delimiter: '.',
                    unit: 'R$',
                    suffixUnit: ''
                  }}
                  editable={false}

                  value={PCRT}
                  onChangeText={input => setPCRT(input)}
                />
              </View>
              <View style={styles.sugesto1DropdownView}>
                <View style={styles.headerView6}>
                  <Text style={styles.labelText6}>Amostra 1</Text>
                </View>
                <View style={[styles.fieldView2, styles.mt4]}>
                  <Text>//Aqui dropdown</Text>
                </View>
              </View>
              <View style={styles.preoCorretorFieldView}>
                <View style={styles.headerView7}>
                  <Text style={styles.labelText7}>Valor por avaliação</Text>
                </View>
                <TextInputMask
                  style={[styles.fieldTextInput4, styles.mt4]}
                  placeholder="R$"
                  keyboardType="numeric"
                  placeholderTextColor="#23856d"
                  type="money"
                  options={{
                    precision: 2,
                    separator: ',',
                    delimiter: '.',
                    unit: 'R$',
                    suffixUnit: ''
                  }}
                  editable={false}

                />
              </View>
              <View style={styles.preoMedioFieldView}>
                <View style={styles.headerView8}>
                  <Text style={styles.labelText8}>Valor Médio Sugerido</Text>
                </View>
                <TextInput
                  style={[styles.fieldTextInput5, styles.mt4]}
                  placeholder="R$"
                  keyboardType="numeric"
                  placeholderTextColor="#23856d"
                  type="money"
                  options={{
                    precision: 2,
                    separator: ',',
                    delimiter: '.',
                    unit: 'R$',
                    suffixUnit: ''
                  }}
                  editable={false}
                />
              </View>
              <View style={styles.areaFieldView}>
                <View style={styles.headerView9}>
                  <Text style={styles.labelText9}>Área do ímovel</Text>
                </View>
                <TextInput
                  style={[styles.fieldTextInput6, styles.mt4]}
                  placeholder="M² x M²"
                  keyboardType="default"
                  placeholderTextColor="#23856d"
                  editable={false}

                />
              </View>
              <View style={styles.bairroFieldView}>
                <View style={styles.headerView10}>
                  <Text style={styles.labelText10}>Bairro</Text>
                </View>
                <TextInput
                  style={[styles.fieldTextInput7, styles.mt4]}
                  placeholder="Localização"
                  keyboardType="default"
                  placeholderTextColor="#23856d"
                  editable={false}

                />
              </View>
              <View style={styles.destinoFieldView}>
                <View style={styles.headerView11}>
                  <Text style={styles.labelText11}>Destino</Text>
                </View>
                <TextInput
                  style={[styles.fieldTextInput8, styles.mt4]}
                  placeholder="Laudo de Avaliação"
                  keyboardType="default"
                  placeholderTextColor="#23856d"
                  editable={false}

                />
              </View>
              <View style={styles.contatoFieldView}>
                <View style={styles.headerView12}>
                  <Text style={styles.labelText12}>Contato</Text>
                </View>
                <TextInputMask
                  style={[styles.fieldTextInput9, styles.mt4]}
                  placeholder="Solicitação do cliente"
                  keyboardType="number-pad"
                  placeholderTextColor="#23856d"
                  type="cel-phone"
                  options={{
                    maskType: "BRL",
                    withDDD: true,
                    dddMask: '(99) '
                  }}
                  editable={false}

                  value={CELL}
                  onChangeText={input => setCEll(input)}
                />
              </View>
              <View style={styles.corretorFieldView}>
                <View style={styles.headerView13}>
                  <Text style={styles.labelText13}>Corretor</Text>
                </View>
                <TextInput
                  style={[styles.fieldTextInput10, styles.mt4]}
                  placeholder="Nome do Corretor"
                  keyboardType="default"
                  placeholderTextColor="#23856d"
                  editable={false}

                />
              </View>
              <View style={styles.dataFieldView}>
                <View style={styles.headerView14}>
                  <Text style={styles.labelText14}>Data</Text>
                </View>
                <TextInputMask
                  style={[styles.fieldTextInput11, styles.mt4]}
                  placeholder="Dia/Mês/Ano"
                  keyboardType="number-pad"
                  autoCapitalize="none"
                  placeholderTextColor="#23856d"
                  type="datetime"
                  options={{
                    format: 'DD/MM/YYYY'
                  }}
                  editable={false}

                  value={DATA}
                  onChangeText={input => setDATA(input)}
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
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>

  );
};

const styles = StyleSheet.create({
  mt4: {
    marginTop: 4,
  },
  fieldDropdownValue: {
    color: "#23856d",
    fontSize: 12,
    fontFamily: "Roboto",
  },
  fieldDropdownText: {
    color: "#23856d",
    fontWeight: "500",
    fontFamily: "Roboto",
  },
  fieldDropdowndropDownContainer: {
    backgroundColor: "rgba(188, 189, 192, 0.3)",
  },
  fieldDropdown1Value: {
    color: "#23856d",
    fontSize: 12,
    fontFamily: "Roboto",
  },
  fieldDropdown1Text: {
    color: "#23856d",
    fontWeight: "500",
    fontFamily: "Roboto",
  },
  fieldDropdown1dropDownContainer: {
    backgroundColor: "rgba(188, 189, 192, 0.3)",
  },
  fieldDropdown2Value: {
    color: "#23856d",
    fontSize: 12,
    fontFamily: "Roboto",
  },
  fieldDropdown2Text: {
    color: "#23856d",
    fontWeight: "500",
    fontFamily: "Roboto",
  },
  fieldDropdown2dropDownContainer: {
    backgroundColor: "rgba(188, 189, 192, 0.3)",
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
  cPFCNPJFieldView: {
    position: "absolute",
    marginLeft: -173,
    top: 125,
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
  nomePropietaroFieldView: {
    position: "absolute",
    marginLeft: -173,
    top: 36,
    left: "50%",
    width: 346,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  textoDadosPropietario: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 21,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#000",
    textAlign: "center",
    width: 360,
    height: 25,
  },
  inputDadosPropietario: {
    position: "absolute",
    marginLeft: -180,
    top: 801,
    left: "50%",
    width: 360,
    height: 221,
  },
  labelText2: {
    position: "relative",
    fontSize: 15,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#000",
    textAlign: "center",
    width: 166,
  },
  headerView2: {
    width: 166,
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
  valorFinalFieldView: {
    position: "absolute",
    marginLeft: -83.12,
    top: 548,
    left: "50%",
    width: 166,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  labelText3: {
    position: "relative",
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#000",
    textAlign: "left",
  },
  headerView3: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  dropDownPicker: {
    backgroundColor: "rgba(188, 189, 192, 0.3)",
  },
  fieldView: {
    alignSelf: "stretch",
    borderRadius: 5,
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
  sugesto3DropdownView: {
    position: "absolute",
    marginLeft: 6.63,
    top: 457,
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
  headerView4: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  dropDownPicker1: {
    backgroundColor: "rgba(188, 189, 192, 0.3)",
  },
  fieldView1: {
    alignSelf: "stretch",
    borderRadius: 5,
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
  sugesto2DropdownView: {
    position: "absolute",
    marginLeft: -173.12,
    top: 457,
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
  headerView5: {
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
  preoSugeridoFieldView: {
    position: "absolute",
    marginLeft: 6.63,
    top: 366,
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
  headerView6: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  dropDownPicker2: {
    backgroundColor: "rgba(188, 189, 192, 0.3)",
  },
  fieldView2: {
    alignSelf: "stretch",
    borderRadius: 5,
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
  sugesto1DropdownView: {
    position: "absolute",
    marginLeft: -173.12,
    top: 366,
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
  headerView7: {
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
    fontFamily: "roboto",
    fontWeight: "bold",
  },
  preoCorretorFieldView: {
    position: "absolute",
    marginLeft: 6.63,
    top: 275,
    left: "50%",
    width: 166.25,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  labelText8: {
    position: "relative",
    fontSize: 15,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#000",
    textAlign: "left",
  },
  headerView8: {
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
    fontFamily: "roboto",
    fontWeight: "bold",
  },
  preoMedioFieldView: {
    position: "absolute",
    marginLeft: -173.12,
    top: 275,
    left: "50%",
    width: 166.25,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  labelText9: {
    position: "relative",
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#000",
    textAlign: "left",
  },
  headerView9: {
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
  areaFieldView: {
    position: "absolute",
    marginLeft: 6.88,
    top: 184,
    left: "50%",
    width: 166.25,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  labelText10: {
    position: "relative",
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#000",
    textAlign: "left",
  },
  headerView10: {
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
  bairroFieldView: {
    position: "absolute",
    marginLeft: -173.12,
    top: 182,
    left: "50%",
    width: 166.25,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  labelText11: {
    position: "relative",
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#000",
    textAlign: "left",
  },
  headerView11: {
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
  destinoFieldView: {
    position: "absolute",
    marginLeft: 6.63,
    top: 91,
    left: "50%",
    width: 166.25,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  labelText12: {
    position: "relative",
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#000",
    textAlign: "left",
  },
  headerView12: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  fieldTextInput9: {
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
  contatoFieldView: {
    position: "absolute",
    marginLeft: -173.12,
    top: 91,
    left: "50%",
    width: 166.25,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  labelText13: {
    position: "relative",
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#000",
    textAlign: "left",
  },
  headerView13: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  fieldTextInput10: {
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
  corretorFieldView: {
    position: "absolute",
    marginLeft: 6.63,
    top: 0,
    left: "50%",
    width: 166.25,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  labelText14: {
    position: "relative",
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#000",
    textAlign: "left",
  },
  headerView14: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  fieldTextInput11: {
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
  dataFieldView: {
    position: "absolute",
    marginLeft: -173.12,
    top: 0,
    left: "50%",
    width: 166.25,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  inputDadosCorretor: {
    position: "absolute",
    marginLeft: -173,
    top: 154,
    left: "50%",
    width: 346.25,
    height: 624,
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
    textAlign: "justify",
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  botoCONFIRMAPressable: {
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
    height: 1100,
    overflow: "hidden",
  },
});

export default TelaVerImvel;
