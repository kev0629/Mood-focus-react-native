import * as React from 'react';
import { StyleSheet, View, Text,Image } from 'react-native';

concentratedImg = require('./../img/concentrated.png')
okayImg= require('./../img/okay.png')
boringImg = require('./../img/boring.png')
hardImg = require('./../img/hard.png')
disipedImg = require('./../img/disiped.png')



export default function ConcentrationTab (){
    return(
    <View style={styles.view} >
        <Image style={styles.icn} source={disipedImg}/>
        <Image style={styles.icn} source={hardImg}/>
        <Image style={styles.icn} source={boringImg}/>
        <Image style={styles.icn} source={okayImg}/>
        <Image style={styles.icn} source={concentratedImg}/>
        
    </View>
    )
}

const styles = StyleSheet.create({
view:{
    flexDirection: "row",
},
icn:{
    width: 100,
    height: 100,
    marginRight:17,
    marginLeft:17,
    marginBottom:10,
},
  });
  