// npm run android
// https://kadikraman.github.io/react-native-v2/(all the code of this course  is here with explanation)
import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import{NativeContainer}from '@react-navigation/native';
import Home from "./Screens/Home";
import ColorPalette from './Screens/ColorPalette';
import { createStackNavigator } from '@react-navigation/stack';
import AddNewPaletteModal  from './Screens/AddNewPaletteModal ';
// const Stack = createStackNavigator();
const MainStack = createStackNavigator();
const RootStack=createStackNavigator();
const MainStackScreen=()=>{
  return(
    <MainStack.Navigator>
      <MainStack.Screen name="Home" component={Home}/>
      <MainStack.Screen
      name="ColorPalette"
      component={ColorPalette}
      options={({route})=>({title:route.params.paletteName})}
      />
    </MainStack.Navigator>
  );
};
const App =() => {
  return (
    <NavigationContainer>
        <RootStack.Navigator mode="modal">
        <RootStack.Screen
          name="Main"
          component={MainStackScreen}
          options={{ headerShown: false }}
        />
         <RootStack.Screen name="AddNewPalette" component={AddNewPaletteModal} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
export default App;