import React, {useState, useEffect} from "react";
import { Text, StyleSheet, Image, Pressable, View, FlatList, TouchableOpacity, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import db from "../config/firebaseconfig";

const TelaListaImveis = () => {
  const navigation = useNavigation();
  const [imvel, setImvel] = useState([])


  useEffect(()=>{
    db.collection("ImovelDB").onSnapshot((query)=> {
      const list = [];
      query.forEach((doc)=> {
        list.push({ ...doc.data(), id: doc.id })
      })
      setImvel(list)
    })
   }, [])

  return (
    <SafeAreaView style={styles.telaListaImveis}>
  
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

      <FlatList
        showsVerticalScrollIndicator={false}
        data={imvel}
        renderItem={( { item } )=>{
          return(
            <View style={styles.Tasks}>
            <Text
              style={styles.DescriptionTask}
              onPress={()=>
                navigation.navigate("TelaVerImvel",{
                  id: item.id,
                  description: item.description,
                })
              }
            >
            {item.DESTINO}  
            </Text>  
 
          </View>
          )
        }}
        />

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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  botoRecarregarIcon: {
    position: "absolute",
    top: 23,
    right: 6,
    width: 40,
    height: 40,
    overflow: "hidden",
  },
  icon: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  botoSearchPressable: {
    position: "absolute",
    left: 6,
    top: 23,
    width: 40,
    height: 40,
  },
  icon1: {
    width: "100%",
    height: "100%",
  },
  botoADDPressable: {
    position: "absolute",
    left: 15,
    bottom: 10,
    width: 55,
    height: 55,
  },
  telaListaImveis: {
    flex: 1,
    backgroundColor:"#fff",
    paddingTop: 65
  },
  Tasks:{
    width:"100%",
    flexDirection:"row",
    justifyContent:"center",
    marginTop:15,
   },
   DescriptionTask:{
    width:"75%",
    alignContent:"flex-start",
    backgroundColor:"#f5f5f5cf",
    padding:12,
    paddingHorizontal: 20,
    borderRadius:50,
    marginBottom: 5,
    marginRight:15,
    color:"#282b2db5",
   },
   iconButton:{
    color:"#ffffff",
    fontSize:25,
    fontWeight:"bold",
   },
   deleteTask:{
    position: "absolute",
    top: 10,
    left: 9,
    width: 25,
    height: 25,
  }, 
});

export default TelaListaImveis;
