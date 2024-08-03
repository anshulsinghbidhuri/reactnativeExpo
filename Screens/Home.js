import React, { useCallback, useEffect,useState } from 'react';
import PalettePreview from '../components/PalettePreview';
import {
  StyleSheet,
  FlatList,
  RefreshControl,
  Text,
  TouchableOpacity,
} from 'react-native';
const URL='https://color-palette-api.kadikraman.now.sh/palettes';
const Home = ({ navigation }) => {
  const [palettes,setPaettes]=useState([]);
  const [isResfreshing,setIsRefreshing]=useState(false);
const handleFetchPalettes=useCallback(async()=>{
  const result=await fetch(URL);
  if(result.ok){
    const palettes=await result.json();
    setPaettes(palettes);
  }
},[]);
useEffect(()=>{
  handleFetchPalettes();
},[]);
const handleRefresh=useCallback(async()=>{
  setIsRefreshing(true);
  await handleFetchPalettes();
  setTimeout(()=>{
  setIsRefreshing(false);
},1000);
});
  return (
    <>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('AddNewPalette')}
      >
        <Text style={styles.buttonText}>Add a color scheme</Text>
      </TouchableOpacity>
      <FlatList
        style={styles.list}
        data={palettes}
        keyExtractor={item => item.paletteName}
        renderItem={({ item }) => (
          <PalettePreview
            onPress={() => navigation.push('ColorPalette', item)}
            palette={item}
          />
        )}
        refreshControl={
          <RefreshControl refreshing={isResfreshing} onRefresh={handleRefresh} />
        }
      />
    </>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  button: {
    height: 50,
    backgroundColor: 'white',
    padding: 10,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'teal',
  },
});
export default Home;