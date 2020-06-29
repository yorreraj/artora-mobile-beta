import React from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { View } from 'native-base';
import ShopItem from './components/ShopItem';
import useTheme from '../../../common/theme/use-theme';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_SHOPS } from '../../../graphql/queries/query-list-shops';
import { shopsListSelector } from '../../../graphql/selectors/shops-list-selector';
 
function ShopListScreen({navigation}) {
    const { colors } = useTheme()
    const { data } = useQuery(QUERY_SHOPS, { fetchPolicy: "cache-and-network", })

    return (
        <View style={{flex:1, backgroundColor:colors.backgroundPrimary}}>
            {
                (data)&&
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={shopsListSelector(data)}
                    renderItem={({item})=>{
                        console.log(item)
                        return (
                            <TouchableOpacity onPress={()=>navigation.navigate('Boutique')} activeOpacity={0.6} style={{padding:10}}>
                                <ShopItem name={item.name} description={item.description} imageUri={item.imageUri} location={item.location}/>
                            </TouchableOpacity>
                        )
                    }}
                    keyExtractor={item => `categorie-product-${item.id}`}
                />
            }
        </View>
    );
}




export default ShopListScreen;