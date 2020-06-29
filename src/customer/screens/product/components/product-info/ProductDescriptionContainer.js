import React from 'react';
import { StyleSheet } from 'react-native';
import { View, List, ListItem, Text } from 'native-base';
import { FontAwesome } from '@expo/vector-icons'; 
import {ASUS_ZEN_BOOK_CONFIG} from '../../../../../common/fake-data';
import useTheme from '../../../../../common/theme/use-theme';

const productColors = ["#000000", "#DD4500", "#F0F0F0"]

function ProductDescriptionContainer(props) {
    const { colors } = useTheme()

    return (
        <List>
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
            {
                ASUS_ZEN_BOOK_CONFIG.map(({item, content}, index)=>(
                    <ListItem key={`product-description-${index}`} style={styles.listItem}>
                        <View>
                            <Text style={styles.textTitle}>{item}</Text>
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

export default ProductDescriptionContainer;