const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TelaListaImveis from "./src/screens/TelaListaImveis";
import TelaAddImvel from "./src/screens/TelaAddImvel";
import TelaVerImvel from "./src/screens/TelaVerImvel";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from "react-native";

const stack = createNativeStackNavigator()

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const SplashScreen = () => <View />;

  return (
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator initialRouteName="TelaListaImveis">
            <Stack.Screen
              name="Lista de Imóveis"
              component={TelaListaImveis}
              options={{ 
                headerTintColor: "#68D4BA",
                headerStyle:{backgroundColor:"#18614F"}
               }}
            />
            <Stack.Screen
              name="TelaAddImvel"
              component={TelaAddImvel}
              options={{ 
                title: "Cadastro de novo imóvel",
                headerTintColor: "#68D4BA",
                headerStyle:{backgroundColor:"#18614F"}
               }}
            />
            <Stack.Screen
              name="TelaVerImvel"
              component={TelaVerImvel}
              options={{ 
                title: "Visualização de ímovel",
                headerTintColor: "#68D4BA",
                headerStyle:{backgroundColor:"#18614F"}
               }}
            />
          </Stack.Navigator>
        ) : (
          <SplashScreen />
        )}
      </NavigationContainer>
  );
};
export default App;
