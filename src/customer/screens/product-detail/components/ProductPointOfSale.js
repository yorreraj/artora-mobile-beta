import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { List, ListItem, View, Text, Left, Right, Icon } from 'native-base';
import useTheme from '../../../../common/theme/use-theme';

function ProductPointOfSale({pointsOfSale}) {
    const { colors } = useTheme()

    console.log(pointsOfSale)

    return (
        <List>
            {
                pointsOfSale.map(({id, name, location})=>(
                    <ListItem key={id} style={styles.listItem}>
                        <Left>
                            <View>
                                <Text style={styles.textTitle}>{name}</Text>
                                <Text style={{...styles.textContent, color:colors.textLight}}>{location}</Text>
                            </View>
                        </Left>
                        <Right style={{flexDirection:"row", justifyContent:"flex-end"}}>
                            <TouchableOpacity style={{paddingHorizontal:15}}>
                                <Icon type="MaterialCommunityIcons" name="map-search" style={{fontSize:25, color:colors.text}}/>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Icon type="Entypo" name="phone" style={{fontSize:25, color:"#37ba28"}}/>
                            </TouchableOpacity>
                        </Right>
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

export default ProductPointOfSale;