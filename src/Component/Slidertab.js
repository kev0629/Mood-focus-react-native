import * as React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import Slider from "react-native-slider";
import { LinearGradient } from 'expo-linear-gradient'
import { Appearance, AppearanceProvider, useColorScheme } from 'react-native-appearance';

let colorScheme = Appearance.getColorScheme();

let color

if (colorScheme=="dark"){
  color = "#eee"
}
else{
  color="black"
}

export default class Slidertab extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          //Initial Value of slider
          sliderValue: 5
        };
      }
      render(){
        return(
          <View>
              <LinearGradient colors={['#E70E0E', '#DDCB8C', '#439227']} start={[0, 1]} end={[1, 0]} style={styles.view}> 
                <Slider 
              maximumValue={10}
              minimumValue={0}
              thumbTintColor="#FFF"
              minimumTrackTintColor=''
              maximumTrackTintColor=''
              thumbStyle={styles.thumb}
              trackStyle={styles.track}
              step={1}
              
              value={this.state.sliderValue}
              onValueChange={(sliderValue) => this.setState({ sliderValue })}
              style={styles.slider}
            />
            </LinearGradient>
            <Text style={{color: color,fontSize: 60,textAlign:'center'}}>{this.state.sliderValue}</Text>
          </View>
            
            
        )
      }
    
}
const styles = StyleSheet.create({
    view:{
      borderRadius:90 / 4,
    },
    slider:{
        width: 580,
        height: 50,
        marginRight:10,
        marginLeft:10,
        
    },
    thumb: {
      width: 40,
      height: 40,
      borderRadius: 40 / 2,
      backgroundColor: 'white',
      shadowColor: 'black',
      shadowOffset: {width: 0, height: 2},
      shadowRadius: 2,
      shadowOpacity: 0.35,
    },
    track:{
      width: 40,
      height: 40,
    }
    
      });
      