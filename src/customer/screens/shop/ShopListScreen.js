import React, { useContext } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { View } from 'native-base';
import { ThemeContext } from '../../../../App';
import { SHOPS } from '../../../common/fake-data';
import ShopItem from './components/ShopItem';

function ShopListScreen({imageUri, name, description, location, navigation}) {
    const theme = useContext(ThemeContext)

    return (
        <View style={{flex:1, backgroundColor:theme.backgroundPrimary}}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={SHOPS}
                renderItem={({item})=>(
                    <TouchableOpacity onPress={()=>navigation.navigate('Boutique')} activeOpacity={0.6} style={{padding:10}}>
                        <ShopItem name={item.name} description={item.description} imageUri={item.imageUri} location={item.location}/>
                    </TouchableOpacity>
                )}
                keyExtractor={item => `categorie-product-${item.id}`}
            />
        </View>
    );
}




export default ShopListScreen;