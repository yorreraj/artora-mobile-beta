import React from 'react';
import {List, ListItem, View, Text} from 'native-base';
import { showPrice } from '../../../../common/utils';

function ProductPrice({prices}) {
    return (
        <List>
            {
                prices.map(({id, label, amount, currency, isMain})=>(
                    <ListItem key={id} style={{marginLeft:0}}>
                        <View style={{flex:1, flexDirection:"row", justifyContent:"space-between"}}>
                            <Text style={{fontSize:14}}>{label}</Text>
                            <View style={{paddingHorizontal:10}}>
                                <Text style={{fontSize:14}}>{showPrice(amount, currency)}</Text>
                            </View>
                        </View>
                    </ListItem>
                ))
            }
        </List>
    );
}

export default ProductPrice;