import React from 'react';
import { TouchableOpacity } from 'react-native';
import { View } from 'native-base';
import ShopItem from '../../../../customer/screens/shop/components/ShopItem';
import useTheme from '../../../../common/theme/use-theme';

function ShopChoiceList({shops, selected, onPressItem}) {
    const { colors } = useTheme()

    return (
        <View>
            {
                shops.map(({id, imageUri, name, description, location}) => (
                    <TouchableOpacity 
                        activeOpacity={0.8}
                        style={{
                            marginBottom:10, 
                            ...( selected.indexOf(id)>-1 ? 
                            { 
                                borderWidth:4, 
                                borderRadius:15, 
                                borderColor:colors.primary 
                            }:{})
                        }} 
                        key={id}
                        onPress={()=> { if(onPressItem) onPressItem(id) }}
                    >
                        <ShopItem name={name} description={description} location={location} imageUri={imageUri}/>
                    </TouchableOpacity>
                ))
            }
        </View>
    );
}

export default ShopChoiceList;