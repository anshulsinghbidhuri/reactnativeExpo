import React from "react";
import {View, Text, StyleSheet} from 'react-native';

const ColorBox = ({colorName,hexCode}) => {
  const boxColor = {
    backgroundColor: hexCode,
  };
  return (
    <View style={[styles.box, boxColor]}>
    <Text style={styles.boxtext}>
      {colorName} {hexCode}
    </Text>
  </View>
  );
};
const styles = StyleSheet.create({
box:{ 
  padding: 10,
  borderRadius: 3,
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 10,
},

boxtext:{
  fontWeight: 'bold',
  color: 'white',
},
});
export default ColorBox;