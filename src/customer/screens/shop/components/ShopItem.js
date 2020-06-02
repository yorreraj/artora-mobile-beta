import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { View, H3, Text, Icon } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';

function ShopItem({imageUri, name, description, location}) {
    return (
        <View style={styles.root}>
            <Image style={styles.image} source={{uri:imageUri}}/>
            <View style={styles.content}>
                <H3 style={styles.shopName}>{name}</H3>
                <Text style={styles.shopDescription}>{description}</Text>
                <View style={styles.shopLocationContainer}>
                    <Icon type="Entypo" name="location-pin" style={styles.shopLocation}/>
                    <Text style={styles.shopLocation}>{location}</Text>
                </View>
            </View>
            <LinearGradient 
                colors={['transparent', 'rgba(0,0,0,0.7)']} 
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
        justifyContent:"flex-end",
        padding:10
    },
    shopName:{
        color:"white", 
        fontSize:18, 
        fontWeight:"bold"
    },
    shopDescription:{
        color:"white", 
        fontSize:14
    },
    shopLocationContainer:{
        marginTop:5, 
        flexDirection:"row",
        alignItems:"center",  
        backgroundColor:"#FF7002", 
        alignSelf: 'flex-start', 
        paddingHorizontal:5, 
        borderRadius:2
    },
    shopLocation:{
        color:"white", 
        fontSize:14
    }
})

export default ShopItem;