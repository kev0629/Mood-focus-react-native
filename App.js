import * as React from 'react';
import { Platform, StyleSheet,Text, View } from 'react-native';
import IconTab from './src/Component/Icontab';
import SliderTab from './src/Component/Slidertab';
import ConcentrationTab from "./src/Component/Concentrationtab"
import { Appearance, AppearanceProvider, useColorScheme } from 'react-native-appearance';

let colorScheme = Appearance.getColorScheme();

let color

if (colorScheme=="dark"){
  color = "black"
}
else{
  color="#eee"
}

const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});




export default function App() {
  return (
    <View style={styles.container}>
      <ConcentrationTab/>
      <SliderTab/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
