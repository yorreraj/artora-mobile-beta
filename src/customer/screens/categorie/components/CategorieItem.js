import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { View, H3 } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';

function CategorieItem({imageUri, title}) {
    return (
        <View style={styles.root}>
            <Image style={styles.image} source={{uri:imageUri}}/>
            <View style={styles.content}>
                <H3 style={{color:"white"}}>{title}</H3>
            </View>
            <LinearGradient 
                colors={['transparent', 'rgba(0,0,0,0.6)']} 
                style={styles.linearGradient}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    root:{
        height:160,
        backgroundColor:"#F1F1F1",
        borderRadius:10
    },
    image:{
        flex:1,
        borderRadius:10
    },
    linearGradient:{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom:0,
        height: "100%",
        borderRadius:10
    },
    content:{
        zIndex:999,
        height:"100%",
        position: 'absolute',
        left: 0,
        right:0,
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center",
        padding:10
    }
})

export default CategorieItem;