import React from 'react';
import {StyleSheet} from 'react-native';
import { Header, Left, Body, Icon, Title, Right } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ThemeContext } from '../../../../../../App';

function ProductDetailHeader({navigation}) {
    const theme = React.useContext(ThemeContext)
    const [favoris, setFavoris] = React.useState(false);
    const roundedIconContainerStyle = {...styles.roundedIconContainer, backgroundColor:theme.backgroundPrimary}

    return (
        <Header noShadow style={styles.root} iosBarStyle={theme.name==="light"?"dark-content":"light-content"}>
            <Left>
                <TouchableOpacity onPress={navigation.goBack} style={roundedIconContainerStyle}>
                    <Icon  type="Entypo" name="chevron-left"/>
                </TouchableOpacity>
            </Left>
            <Right>
                <TouchableOpacity style={roundedIconContainerStyle}>
                    <Icon 
                        type="Entypo"  
                        name="phone"
                        style={styles.rightIcon}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>setFavoris(!favoris)} style={roundedIconContainerStyle}>
                    <Icon 
                        type="AntDesign"  
                        name={favoris?'heart':'hearto'} 
                        style={{
                            ...styles.rightIcon,
                            ...favoris?{
                                color:"#FF7002"
                            }:{}
                        }}
                    />
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

export default ProductDetailHeader;