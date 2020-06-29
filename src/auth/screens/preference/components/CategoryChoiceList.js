import React from 'react';
import useTheme from '../../../../common/theme/use-theme';
import { List, View, ListItem, Icon, Body, Text, Left, Right } from 'native-base';
import { StyleSheet } from 'react-native';

function CategoryChoiceList({families, selected, onPressItem}) {
    const { colors } = useTheme()

    return (
        <List>
            {
                families.map( family => (
                    <View key={family.id}>
                        <ListItem itemDivider style={styles.listItemDivider}>
                            <Icon type="FontAwesome" name="square" style={{color:colors.primary, fontSize:15}}/>
                            <Body>
                                <Text style={{fontWeight:"bold"}}>{family.name}</Text>
                            </Body>
                        </ListItem>
                        {
                            family.categories.map( categorie =>(
                                <ListItem 
                                    key={categorie.id} 
                                    style={{backgroundColor:"transparent"}} 
                                    onPress={() => { if(onPressItem) onPressItem(categorie.id) }}
                                >
                                    <Left>
                                        <Text>{categorie.name}</Text>
                                    </Left>
                                    <Right>
                                        {
                                            (selected.indexOf(categorie.id) > -1) ? (
                                                <Icon type="MaterialIcons" name="check-box" style={{color:colors.primary, fontSize:24}}/>
                                            ):(
                                                <Icon type="MaterialIcons" name="check-box-outline-blank" style={{fontSize:24}}/>
                                            )
                                        }
                                    </Right>
                                </ListItem>
                            ))
                        }
                    </View>
                ))
            }
        </List>
    );
}

const styles = StyleSheet.create({
    listItemDivider:{
        backgroundColor:"transparent", 
        marginTop:5
    }
})

export default CategoryChoiceList;