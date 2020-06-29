import React from 'react';
import { StyleSheet } from 'react-native';
import { View, List, ListItem, Text } from 'native-base';
import { FontAwesome } from '@expo/vector-icons'; 
import useTheme from '../../../../common/theme/use-theme';

function ProductDescription({descriptions, productColors}) {
    const { colors } = useTheme()

    return (
        <List>
            {
                (productColors)&&
                <ListItem style={styles.listItem}>
                    <View>
                        <Text style={[styles.text, styles.textTitle]}>Couleurs</Text>
                        <View style={{flexDirection:"row"}}>
                            {
                                productColors.map((color, index)=>(
                                    <FontAwesome 
                                        key={`product-color-${index}`} 
                                        name="square" 
                                        size={30} 
                                        color={color} 
                                        style={{marginRight:10}}
                                    />
                                ))
                            }
                        </View>
                    </View>
                </ListItem>
            }
            {
                descriptions.map(({id, title, content})=>(
                    <ListItem key={id} style={styles.listItem}>
                        <View>
                            <Text style={styles.textTitle}>{title}</Text>
                            <Text style={{...styles.textContent, color:colors.textLight}}>{content}</Text>
                        </View>
                    </ListItem>
                ))
            }
        </List>
    );
}

const styles = StyleSheet.create({
    listItem:{
        marginLeft:0,
    },
    textTitle:{
        fontSize:14,
        fontWeight:"bold"
    },
    textContent:{
        fontSize:14
    }
})

export default ProductDescription;