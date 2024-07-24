import React from "react";
import { View,Text,SafeAreaView,StyleSheet } from "react-native"; 
const App =() => {
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={[style.container,style.pink]}>
        <Text>Hello World</Text>
        </View>
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  pink:{
    backgroundColor:'pink'
  }
});
export default App;