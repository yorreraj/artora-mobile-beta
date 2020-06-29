import React from 'react';
import { Container, Body, Footer, H1, View, Text, Button, Input, Item } from 'native-base';
import useTheme from '../../../common/theme/use-theme';
import { ScrollView } from 'react-native-gesture-handler';
import { StatusBar } from 'react-native';

function VerificationScreen({navigation}) {
    const { colors } = useTheme()

    return (
        <Container style={{backgroundColor:"white"}}>
            <ScrollView style={{marginTop:30, paddingHorizontal:20}} showsVerticalScrollIndicator={false}>
                <View style={{alignItems:"center", paddingVertical:50}}>
                    <H1 style={{fontWeight:"bold", color:colors.primary}}>Vérifier le compte</H1>
                    <Text style={{textAlign:'center', paddingTop:10}}>
                        Veuillez entrer le code de vérification que nous avons envoyé à votre adresse e-mail.
                    </Text>
                </View>
                <View style={{alignItems:"center", paddingVertical:50}}>
                    <Item regular style={{width:200, marginBottom:20, borderRadius:10}}>
                        <Input 
                            keyboardType="numeric"
                            maxLength={4}
                            placeholder="____" 
                            style={{fontSize:30, textAlign:"center", letterSpacing:15, fontWeight:"bold"}}/>
                    </Item>
                    <Button 
                        transparent 
                        rounded 
                        style={{width:"100%", backgroundColor:colors.primary, justifyContent:"center"}}
                        onPress={() => navigation.navigate("Welcome")}
                    >
                        <Text style={{fontSize:22, color:"white"}}>Vérifier</Text>
                    </Button>
                </View>
                <View style={{alignItems:"center", paddingVertical:40}}>
                    <Text>Je n'ai pas reçu le code</Text>
                    <Button transparent>
                        <Text style={{fontWeight:"bold"}}>Veuillez me renvoyer</Text>
                    </Button>
                </View>
            </ScrollView>
            <StatusBar backgroundColor="white" barStyle="dark-content"/>
        </Container>
    );
}

export default VerificationScreen;