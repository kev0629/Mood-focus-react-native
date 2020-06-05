import * as React from 'react';
import { StyleSheet, View, Text,Image } from 'react-native';

verryHappyImg = require('./../img/Verry_Happy.png')
happyImg= require('./../img/Happy.png')
coolImg = require('./../img/cool.png')
sadImg = require('./../img/sad.png')
hangryImg = require('./../img/hangry.png')



export default function IconTab (){
    return(
    <View style={styles.view} >
        <Image style={styles.icn} source={verryHappyImg}/>
        <Image style={styles.icn} source={happyImg}/>
        <Image style={styles.icn} source={coolImg}/>
        <Image style={styles.icn} source={sadImg}/>
        <Image style={styles.icn} source={hangryImg}/>
    </View>
    )
}

const styles = StyleSheet.create({
view:{
    backgroundColor:"#eee",
    flexDirection: "row",
},
icn:{
    width: 100,
    height: 100,
    marginRight:10,
    marginLeft:10,
},
  });
  