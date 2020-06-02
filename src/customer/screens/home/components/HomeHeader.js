import React from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import {View, Header, Left, Body, Right, Icon, H3, Title} from 'native-base';
import CustomBadge from '../../../../common/components/CustomBadge';
import { ThemeContext } from '../../../../../App';

function HomeHeader(props) {
    const theme = React.useContext(ThemeContext);

    return (
       <Header noShadow style={styles.root} iosBarStyle={theme.name==="light"?"dark-content":"light-content"}>
            <Left>
                <Icon type="MaterialIcons"  name='sort' style={styles.leftIcon} />
            </Left>
            <Body>
                <Title style={styles.title}>Artora</Title>
            </Body>
            <Right>
                <View style={{...styles.roundedIconContainer, backgroundColor:theme.backgroundPrimary}}>
                  <Icon type="Octicons" name='search' style={styles.rightIcon}/>
                </View>
                <View style={{...styles.roundedIconContainer, backgroundColor:theme.backgroundPrimary}}>
                  <Icon type="Octicons" name='bell' style={styles.rightIcon}/>
                  <CustomBadge
                    rootStyle={styles.badge}
                    color="#FF7002"
                    textColor="#FFFFFF"
                    value={2}
                  />
                </View>
            </Right>
       </Header> 
    );
}

const styles = StyleSheet.create({
    root:{
        paddingTop:0
    },
    leftIcon:{
        fontSize:35
    },
    rightIcon:{
        fontSize:20
    },  
    title:{
        fontWeight:"bold",
        fontSize:25
    },
    badge:{
        position: 'absolute', 
        top:0 , 
        right:0
    },
    roundedIconContainer:{
        padding:8,
        borderRadius:20,
        marginLeft:8
    },
})

export default HomeHeader;