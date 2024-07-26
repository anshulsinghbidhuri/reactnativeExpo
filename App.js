// npm run android
import React from "react";
import { View,Text,SafeAreaView,StyleSheet } from "react-native"; 
import ColorBox from './components/ColorBox';
const App =() => {
  return (
//     <SafeAreaView style={{flex:1}}>
//       <View style={[style.container,style.pink]}>
//         <Text>Hello World</Text>
//         </View>
//     </SafeAreaView>
//   );
// };
// const style = StyleSheet.create({
//   container:{
//     flex:1,
//     justifyContent:'center',
//     alignItems:'center'
//   },
//   pink:{
//     backgroundColor:'pink'
//   }
// });
<SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.heading}>
          Here are some boxes of different colours
        </Text>
        <ColorBox colorName="Cyan" hexCode="#2aa198"/>
        <ColorBox colorName="Bule" hexCode="#268bd2"/>
        <ColorBox colorName="Magenta" hexCode="#d33682"/>
        <ColorBox colorName="Orange" hexCode="#cb4b16"/>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
  },
  
});

export default App;