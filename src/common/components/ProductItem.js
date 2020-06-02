import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Image} from 'react-native';
import {View, Text} from 'native-base';
import {LinearGradient} from 'expo-linear-gradient';

const numeral = require('numeral');

function ProductItem({width, height, product, customStyles}) {

    const _getCustomStyles = (name) => {
        return (customStyles)?(customStyles[name]||{}):{}
    }

    return (
        <View style={{...styles.root, width, height}}>
            <Image style={styles.image} source={{uri:product.imageUri}}/>
            <View style={[styles.content, _getCustomStyles("content")]}>
                <Text style={[styles.productName, _getCustomStyles("productName")]}>
                    {product.name}
                </Text>
                <Text style={[styles.price, _getCustomStyles("price")]}>
                    {`${numeral(product.price).format('0,0')} Ar`}
                </Text>
                {
                    (product.lastPrice)&&(
                        <Text style={[styles.lastPrice, _getCustomStyles("lastPrice")]}>
                            {`${numeral(product.lastPrice).format('0,0')} Ar`}
                        </Text>
                    )
                }
            </View>
            <LinearGradient 
                colors={['transparent', 'rgba(0,0,0,0.8)']} 
                style={styles.linearGradient}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    root:{
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
        height: "60%",
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
    productName:{
        fontSize:14,
        color:"#FFFFFF"
    },
    price:{
        alignSelf: 'flex-start',
        fontSize:14,
        paddingHorizontal:5,
        backgroundColor:"#FF7002",
        borderRadius:10,
        marginTop:4,
        color:"#FFFFFF"
    },
    lastPrice:{
        color:"#FFFFFF",
        fontSize:11,
        paddingLeft:5,
        textDecorationLine: 'line-through'
    }
})

ProductItem.propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    customStyles: PropTypes.objectOf({
        content: PropTypes.object,
        productName: PropTypes.object,
        price: PropTypes.object,
        lastPrice: PropTypes.object
    }),
    product: PropTypes.objectOf({
        name: PropTypes.string.isRequired,
        imageUri: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        lastPrice: PropTypes.number
    }).isRequired
}

export default ProductItem;