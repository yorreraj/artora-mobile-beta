import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text} from 'native-base';

function CustomBadge({rootStyle, color, textColor, value}) {
    return (
        <View style={{
            ...style.root, 
            backgroundColor:color?color:"#000000",
            ...rootStyle
        }}>
            <Text style={{fontSize:11, color:textColor?textColor:"#FFFFFF"}}>{value}</Text>
        </View>
    );
}

const style=StyleSheet.create({
    root:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        width:17,
        height:17,
        borderRadius:17,
        padding:2
    }
})

export default CustomBadge;