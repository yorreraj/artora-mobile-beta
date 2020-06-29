import React from 'react';
import { StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Container, View, H1, Text, Button } from 'native-base';
import useTheme from '../../../../common/theme/use-theme';

const SCREEN_DIMENSIONS = Dimensions.get('window')

function GenderChoiceLlist({genders, selected, onPressItem}) {
    const { colors } = useTheme()

    return (
        <View style={styles.listContainer}>
            {
                genders.map(({id, gender}) => (
                    <TouchableOpacity 
                        key={`gender-${id}`} 
                        style={{
                            ...styles.item,
                            ...(selected.indexOf(id)>-1?{
                                borderColor: colors.primary,
                                backgroundColor: colors.primary
                            }:{})
                        }}
                        onPress={()=>{
                            if(onPressItem) onPressItem(id)
                        }}
                    >   
                        <Text
                            style={{
                                fontWeight:"bold",
                                ...(selected.indexOf(id)>-1?{
                                    color:"white"
                                }:{})
                            }}
                        >
                            {gender}
                        </Text>
                    </TouchableOpacity>
                ))
            }
        </View>
    );
}

const styles = StyleSheet.create({
    root:{
        marginTop:30
    },
    content:{
        paddingHorizontal:20
    },
    header:{
        alignItems:'flex-end', 
        marginTop:5
    },
    title:{
        fontWeight:"bold", 
        paddingTop:20, 
        paddingBottom:40, 
        paddingHorizontal:5
    },
    listContainer:{
        flexDirection:"row", 
        flexWrap:"wrap",
        justifyContent:"center"
    },
    item:{
        width:(SCREEN_DIMENSIONS.width-60)/2, 
        height:45, 
        borderWidth:3,
        borderRadius:50, 
        justifyContent:"center", 
        alignItems:"center", 
        margin:5
    },
    buttonFooter:{
        width:SCREEN_DIMENSIONS.width,
        position:"absolute",
        bottom:0, 
        left:0, 
        alignItems:"center", 
        justifyContent:"center", 
        borderRadius:0
    },
    buttonFooterText:{
        fontSize:20
    }
})

export default GenderChoiceLlist;