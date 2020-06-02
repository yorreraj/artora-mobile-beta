import React from 'react';
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import ProductItem from '../../../../../common/components/ProductItem';
import {PRODUCTS} from '../../../../../common/fake-data';

function RecomandedContainer(props) {

    const productItemStyles = {
        productName:{
            fontSize:12
        },
        price:{
            fontSize:11
        },
        content:{
            padding:5
        }
    }

    return (
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={PRODUCTS}
            renderItem={({item})=>(
                <TouchableOpacity activeOpacity={0.6} style={{padding:5}}>
                    <ProductItem width={110} height={150} product={item} customStyles={productItemStyles}/>
                </TouchableOpacity>
            )}
            keyExtractor={item => `promotion-product-${item.id}`}
        />
    );
}

export default RecomandedContainer;