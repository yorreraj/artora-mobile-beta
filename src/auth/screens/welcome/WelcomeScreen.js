import React from 'react';
import { Image, StatusBar } from "react-native";
import { View, Text, H1, Button } from 'native-base';
import imageWelcome from '../../../../assets/flamenco-welcome.png'
import useTheme from '../../../common/theme/use-theme';

function WelcomeScreen({navigation}) {
    const { colors } = useTheme()
    return (
        <View style={{flex:1, paddingTop:20, backgroundColor:"white"}}>
            <View style={{alignItems:"center", paddingVertical:20}}>
                <H1 style={{color:colors.primary, fontWeight:"bold", marginTop:20}} >Félicitation Yorre!!!</H1>
                <Text style={{color:"#707070", fontSize:18, marginTop:5}}>Bienvenu parmi les utilisateurs d'Artora.</Text>
                <Image source={imageWelcome} style={{width:200, height:160, resizeMode: 'stretch', marginTop: 20}}/>
            </View>
            <View style={{flex:1, paddingHorizontal:20, flexDirection:"column", justifyContent:"center"}}>
                <Text style={{textAlign:"center", color:"#707070", fontSize:18}}>
                    Veuillez nous renseigner vos préférences pour qu'on puisse vous proposez les meilleurs produits adéquats.
                </Text>
                <Button style={{marginTop:20, justifyContent:"center",  backgroundColor:colors.primary}} transparent rounded onPress={() => navigation.navigate("Preference")}>
                    <Text style={{fontSize:20, fontWeight:"bold", color:"white"}}>Commencer</Text>
                </Button>
                <Button style={{marginTop:20, justifyContent:"center"}} transparent>
                    <Text style={{fontSize:16, height:40,  color:colors.primary}}>Me demander plus tard</Text>
                </Button>
            </View>
            <StatusBar backgroundColor="white" barStyle="dark-content"/>
        </View>
    );
}

export default WelcomeScreen;