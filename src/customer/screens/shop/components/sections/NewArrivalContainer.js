import React from 'react';
import { Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import ProductItem from '../../../../../common/components/ProductItem';
import { View } from 'native-base';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

const SCREEN_SIZE = Dimensions.get('window')

function NewArrivalContainer({products, navigation}) {
    const item_width = SCREEN_SIZE.width - 80;
    const item_heigth = 150;

    const productItemStyles = {
        productName:{
            fontSize:12
        },
        price:{
            fontSize:11
        },
        lastPrice:{
            fontSize:10
        },
        content:{
            padding:5
        }
    }

    return (
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={products}
            renderItem={({item})=>(
                <TouchableOpacity activeOpacity={0.6} style={{padding:5}} onPress={() => navigation.navigate('ProductDetail')}>
                    <ProductItem width={110} height={150} product={item} customStyles={productItemStyles}
                    />
                </TouchableOpacity>
            )}
            keyExtractor={item => `promotion-product-${item.id}`}
        />
    );

    /* return (
        <View style={{paddingVertical:5}}>
            <Carousel
                data={products}
                renderItem={({item})=>
                    <ProductItem 
                        width={item_width}
                        height={item_heigth}
                        product={item}
                    />
                }
                sliderWidth={SCREEN_SIZE.width}
                itemWidth={item_width}
                enableMomentum={false}
                lockScrollWhileSnapping={true}
                autoplay={true}
                loop={true}
            />
        </View>
    ); */
}

export default NewArrivalContainer;