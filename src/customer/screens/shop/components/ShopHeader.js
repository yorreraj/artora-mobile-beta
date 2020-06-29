import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Header, Left, Body, Title, Right, Icon } from 'native-base';
import useTheme from '../../../../common/theme/use-theme';

function ShopHeader(props) {
    const { colors, barStyle } = useTheme()
    const roundedIconContainerStyle = {...styles.roundedIconContainer, backgroundColor:colors.backgroundPrimary};

    return (
        <Header noShadow style={styles.root} iosBarStyle={barStyle}>
            <Left>
                <TouchableOpacity onPress={props.navigation.goBack} style={roundedIconContainerStyle}>
                    <Icon  type="Entypo" name="chevron-left"/>
                </TouchableOpacity>
            </Left>
            <Body>
                <Title>Mada Tech</Title>
            </Body>
            <Right>
                <TouchableOpacity style={roundedIconContainerStyle}>
                    <Icon type="Octicons"  name='search' style={styles.rightIcon}/>
                </TouchableOpacity>
                <TouchableOpacity style={roundedIconContainerStyle}>
                    <Icon type="FontAwesome5"  name='map-marker-alt' style={{...styles.rightIcon}}/>
                </TouchableOpacity>
            </Right>
        </Header>
    );
}


const styles = StyleSheet.create({
    root:{
        paddingBottom:20
    },
    title:{
        color:"#111111"
    },
    rightIcon:{
        fontSize:20
    },
    roundedIconContainer:{
        width:35,
        height:35,
        borderRadius:20,
        marginLeft:8,
        alignItems:"center",
        justifyContent:"center"
    }
})


export default ShopHeader;