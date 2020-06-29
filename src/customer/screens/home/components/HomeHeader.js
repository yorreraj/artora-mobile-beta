import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Header, Left, Body, Right, Icon, H3, Title} from 'native-base';
import CustomBadge from '../../../../common/components/CustomBadge';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useMutation } from '@apollo/react-hooks';
import useTheme from '../../../../common/theme/use-theme';
import { MUTATION_SWITCH_THEME } from '../../../../graphql/mutations/mutation-switch-theme';

function HomeHeader(props) {
    const { colors, barStyle } = useTheme()

    const [ switchTheme ] = useMutation(
        MUTATION_SWITCH_THEME,
        { variables: { theme: 'light' } }
    )

    return (
       <Header noShadow style={styles.root} iosBarStyle={barStyle}>
            <Left>
                <Icon type="MaterialIcons"  name='sort' style={styles.leftIcon} />
            </Left>
            <Body>
                <Title style={styles.title}>Artora</Title>
            </Body>
            <Right>
                <TouchableOpacity onPress={switchTheme}>
                    <View style={{...styles.roundedIconContainer, backgroundColor:colors.backgroundPrimary}}>
                        <Icon type="Octicons" name='search' style={styles.rightIcon}/>
                    </View>
                </TouchableOpacity>
                <View style={{...styles.roundedIconContainer, backgroundColor:colors.backgroundPrimary}}>
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