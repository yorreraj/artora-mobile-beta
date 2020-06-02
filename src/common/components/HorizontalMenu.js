import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text} from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';

function HorizontalMenu({menus, activeIndex, onPressItem, inactiveTextColor}) {
    return (
        <View style={styles.root}>
            {
                menus.map((menu, index)=>(
                    <TouchableOpacity 
                        key={`horizontal-menu-item-${index}`}
                        onPress={()=>onPressItem(index)}
                        style={[
                            styles.menuItemContainer,
                            (index===activeIndex)?styles.menuItemContainerActive:{}
                        ]}
                    >
                        <Text 
                            style={[
                                styles.menuItem, 
                                {color:inactiveTextColor},
                                (index===activeIndex)?styles.menuItemActive:{}
                            ]}
                        >
                            {menu}
                        </Text>
                    </TouchableOpacity>
                ))
            }
        </View>
    );
}

const styles = StyleSheet.create({
    root:{
        flexDirection:"row",
        justifyContent:"space-between",
        borderBottomWidth:1,
        borderBottomColor:"#FF7002"
    },
    menuItem:{
        fontSize:16
    },
    menuItemContainer:{
        paddingBottom:5
    },
    menuItemContainerActive:{
        borderBottomWidth:4,
        borderBottomColor:"#FF7002"
    },
    menuItemActive:{
        color:"#FF7002"
    }
})


export default HorizontalMenu;