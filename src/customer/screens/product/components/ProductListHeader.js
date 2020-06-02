import React from 'react';
import { StyleSheet } from 'react-native';
import { Header, Right, Left, Body, Title, Icon } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ThemeContext } from '../../../../../App';

function ProductListHeader({navigation, title}) {
    const theme = React.useContext(ThemeContext)
    const roundedIconContainerStyle = {...styles.roundedIconContainer, backgroundColor:theme.backgroundPrimary }

    return (
        <Header noShadow style={styles.root} iosBarStyle={theme.name==="light"?"dark-content":"light-content"}>
            <Left>
                <TouchableOpacity onPress={navigation.goBack} style={roundedIconContainerStyle}>
                    <Icon  type="Entypo" name="chevron-left"/>
                </TouchableOpacity>
            </Left>
            {
                (title)&&(
                    <Body>
                        <Title>{title}</Title>
                    </Body>
                )
            }
            <Right>
                <TouchableOpacity style={roundedIconContainerStyle}>
                    <Icon type="Octicons"  name='search' style={styles.rightIcon}/>
                </TouchableOpacity>
                <TouchableOpacity style={roundedIconContainerStyle}>
                    <Icon type="Octicons"  name='settings' style={{...styles.rightIcon}}/>
                </TouchableOpacity>
            </Right>
        </Header>
    );
}

const styles = StyleSheet.create({
    root:{
        paddingBottom:20
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

export default ProductListHeader;