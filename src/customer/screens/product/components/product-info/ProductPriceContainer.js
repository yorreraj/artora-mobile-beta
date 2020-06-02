import React from 'react';
import {List, ListItem, View, Text} from 'native-base';

function ProductPriceContainer(props) {
    return (
        <List>
            <ListItem style={{marginLeft:0}}>
                <View style={{flex:1, flexDirection:"row", justifyContent:"space-between"}}>
                    <Text style={{fontSize:14}}>Une pièce</Text>
                    <View style={{paddingHorizontal:10, borderRadius:10, backgroundColor:"#FF7002"}}>
                        <Text style={{fontSize:14, color:"white"}}>5,000,000 Ar</Text>
                    </View>
                </View>
            </ListItem>
            <ListItem style={{marginLeft:0}}>
                <View style={{flex:1, flexDirection:"row", justifyContent:"space-between"}}>
                    <Text style={{fontSize:14}}>Plus de 10 pièces</Text>
                    <View style={{paddingHorizontal:10}}>
                        <Text style={{fontSize:14}}>4,800,000 Ar</Text>
                    </View>
                </View>
            </ListItem>
        </List>
    );
}

export default ProductPriceContainer;