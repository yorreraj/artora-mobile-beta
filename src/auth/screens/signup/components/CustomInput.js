import React from 'react';
import { StyleSheet } from 'react-native';
import { Item, Input, Icon, View, Text } from 'native-base';
import Popover from 'react-native-popover-view/dist/Popover';
import { TouchableOpacity } from 'react-native-gesture-handler';
import useTheme from '../../../../common/theme/use-theme';

const placeHolderTextColor = "#979596"

function CustomInput({ errorMessage, inputProps, iconProps, onPressIcon }) {
    const { colors } = useTheme()

    return (
        <Item regular style={styles.itemInput} error={Boolean(errorMessage)}>
            <Input
                style={{...styles.colorGrey, fontSize:20}} 
                placeholderTextColor={placeHolderTextColor}
                {...inputProps}
            />
            {
                (Boolean(errorMessage))&&
                <Popover
                    from={(
                        <TouchableOpacity>
                            <Icon type="MaterialIcons" name="error-outline"/>
                        </TouchableOpacity>
                    )}
                    backgroundStyle={{backgroundColor:"transparent"}}
                    popoverStyle={{...styles.popoverStyle, backgroundColor:colors.primary}}
                >
                    <View style={{flexDirection:"row", alignItems:"center"}}>
                        <Icon type="MaterialIcons" name="error-outline" style={{color:"white", paddingHorizontal:5, fontSize:25}}/>
                        <Text style={{color:"white", fontSize:16}}>
                            { errorMessage }
                        </Text>
                    </View>
                </Popover>
            }
            {
                (!Boolean(errorMessage) && iconProps)&&
                <TouchableOpacity onPress={() => { if(onPressIcon) onPressIcon() }}>
                    <Icon style={{...styles.colorGrey, ...styles.iconEye}} {...iconProps}/>
                </TouchableOpacity>
            }
        </Item>
    );
}

const styles = StyleSheet.create({
    colorGrey:{
        color:"#707070"
    }, 
    itemInput:{
        borderRadius:5, 
        borderColor:"#eeeeee", 
        height:45,
        marginBottom:10
    },
    iconEye:{
        fontSize:20
    },
    popoverStyle:{
        paddingVertical:5, 
        paddingRight:28
    }
})

export default CustomInput;