const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TelaListaImveis from "./screens/TelaListaImveis";
import TelaAddImvel from "./screens/TelaAddImvel";
import TelaVerImvel from "./screens/TelaVerImvel";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const SplashScreen = () => <View />;

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="TelaListaImveis"
              component={TelaListaImveis}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TelaAddImvel"
              component={TelaAddImvel}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TelaVerImvel"
              component={TelaVerImvel}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <SplashScreen />
        )}
      </NavigationContainer>
    </>
  );
};
export default App;
