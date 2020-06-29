import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Icon, Text } from 'native-base';
import useTheme from '../theme/use-theme';
import { TouchableOpacity } from 'react-native-gesture-handler';

function HorizontalIconMenu({menus, activeMenuIndex, onPressMenu}) {
    const { colors } = useTheme()

    const handlePressMenu = (index) => {
        if(onPressMenu) onPressMenu(index)
    }

    return (
        <View style={styles.root}>
            {
                menus.map(({name, iconName}, index) => (
                    <TouchableOpacity  style={styles.menu} onPress={() => handlePressMenu(index)}>
                        <Icon type="Entypo" name={iconName} style={{...styles.icon, ...(activeMenuIndex===index)?{backgroundColor:colors.primary, color:"white"}:{backgroundColor:colors.backgroundSecondary}}}/>
                        {
                            (activeMenuIndex === index)&&
                            <Text style={{color:colors.primary, paddingLeft:10}}>{name}</Text>
                        }
                    </TouchableOpacity>
                ))
            }
        </View>
    );
}

const styles = StyleSheet.create({
    root:{
        display:"flex", 
        flexDirection:"row", 
        alignItems:"flex-start", 
        justifyContent:"space-between"
    },
    menu:{
        alignItems:"center",
        flexDirection:"row"
    },
    icon:{
        fontSize:22,
        padding: 8, 
        borderRadius:50, 
        marginBottom:5
    }
})


export default HorizontalIconMenu;