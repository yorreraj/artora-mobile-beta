import React from 'react';
import { Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import ProductItem from '../../../../../common/components/ProductItem';
import { PRODUCTS } from '../../../../../common/fake-data';
import { View } from 'native-base';

const SCREEN_SIZE = Dimensions.get('window')

function NewArrivalContainer(props) {
    const item_width = SCREEN_SIZE.width - 80;
    const item_heigth = 150;

    return (
        <View style={{paddingVertical:5}}>
            <Carousel
                data={PRODUCTS}
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
    );
}

export default NewArrivalContainer;