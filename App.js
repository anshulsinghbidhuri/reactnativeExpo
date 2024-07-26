// npm run android
import React from "react";
import { View,Text,SafeAreaView,StyleSheet,FlatList } from "react-native"; 
import ColorBox from './components/ColorBox';
const COLORS = [
  { colorName: 'Base03', hexCode: '#002b36' },
  { colorName: 'Base02', hexCode: '#073642' },
  { colorName: 'Base01', hexCode: '#586e75' },
  { colorName: 'Base00', hexCode: '#657b83' },
  { colorName: 'Base0', hexCode: '#839496' },
  { colorName: 'Base1', hexCode: '#93a1a1' },
  { colorName: 'Base2', hexCode: '#eee8d5' },
  { colorName: 'Base3', hexCode: '#fdf6e3' },
  { colorName: 'Yellow', hexCode: '#b58900' },
  { colorName: 'Orange', hexCode: '#cb4b16' },
  { colorName: 'Red', hexCode: '#dc322f' },
  { colorName: 'Magenta', hexCode: '#d33682' },
  { colorName: 'Violet', hexCode: '#6c71c4' },
  { colorName: 'Blue', hexCode: '#268bd2' },
  { colorName: 'Cyan', hexCode: '#2aa198' },
  { colorName: 'Green', hexCode: '#859900' },
];
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
      {/* <View style={styles.container}>
        <Text style={styles.heading}>
          Here are some boxes of different colours
        </Text>
        <ColorBox colorName="Cyan" hexCode="#2aa198"/>
        <ColorBox colorName="Bule" hexCode="#268bd2"/>
        <ColorBox colorName="Magenta" hexCode="#d33682"/>
        <ColorBox colorName="Orange" hexCode="#cb4b16"/>
      </View> */}
      <FlatList
      style={styles.container}
      data={COLORS}
      keyExtractor={item=>item.hexCode}
      renderItem={({item})=>(
        <ColorBox hexCode={item.hexCode} colorName={item.colorName}/>
      )}
      ListHeaderComponent={<Text style={styles.heading}>Solarized</Text>}
      />     
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  // text: {
  //   fontWeight: 'bold',
  //   color: 'white',
  // },
  
});

export default App;