import React from 'react';
import {StyleSheet, FlatList} from 'react-native';
import {Text} from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import useTheme from '../../../../../common/theme/use-theme';

function MenuCategorie({categories, activeMenuId, onPressMenu}) {
    const { colors } = useTheme()

    const handlePressMenu = (item) => {
        if(onPressMenu)
            onPressMenu(item)
    }

    return (
        <FlatList
            style={styles.flatList}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categories}
            renderItem={({item, index})=>(
                <TouchableOpacity 
                    activeOpacity={0.6}
                    onPress={()=>handlePressMenu(item)}
                    style={[
                        styles.menuItem, 
                        { borderColor:colors.textLight},
                        (item.id===activeMenuId)?styles.menuItemActive:{}
                    ]}
                >
                    <Text 
                        style={[
                            styles.menuText,
                            {color:colors.textLight},
                            (item.id===activeMenuId)?styles.menuTextActive:{}
                        ]}
                    >
                        {item.title}
                    </Text>
                </TouchableOpacity>
            )}
            keyExtractor={item => item.id}
        />
    );
}

const styles = StyleSheet.create({
    flatList:{
        margin:10
    },
    menuItem:{
        padding:5,
        marginHorizontal:5,
        borderWidth:1,
        borderRadius:5
    },
    menuItemActive:{
        borderColor:"#FF7002",
        backgroundColor:"#FF7002"
    },
    menuTextActive:{
        color:"#F1F1F1"
    }
})

export default MenuCategorie;