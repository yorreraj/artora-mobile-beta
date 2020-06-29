import React, { useState } from 'react';
import { Container, Body, Footer, H1, View, Text, Button, Input, Item, Spinner } from 'native-base';
import useTheme from '../../../common/theme/use-theme';
import { ScrollView } from 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import { gql } from 'apollo-boost';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { QUERY_GET_CONNECTED_USER } from '../../../graphql/queries/query-get-connected-user';

const MUTATION_ACTIVATE_ACCOUNT = gql`
    mutation($userId:String!, $activationKey:String!) {
        activateAccount(
            userId: $userId,
            activationKey: $activationKey
        ) { id }
    } 
`

function VerificationScreen({navigation}) {
    const { colors } = useTheme()
    const { data, loading } = useQuery(QUERY_GET_CONNECTED_USER)
    const [ activationCode, setActivationCode ] = useState("")
    const [ activationError, setActivationError ] = useState(false)
    const [activate,  activationOptions ] = useMutation(MUTATION_ACTIVATE_ACCOUNT, {
        onError: _ => setActivationError(true),
        onCompleted: _ => navigation.navigate('Welcome')
    })

    const handlePressVerify = () => {
        const userId = data.connectedUser.user.id;
        if(Boolean(activationCode)){
            activate({
                variables:{
                    userId,
                    activationKey:activationCode
                }
            })
        }
    }

    return (
        <Container style={{backgroundColor:"white"}}>
            {
                (!loading && data)&&(
                    <ScrollView style={{marginTop:30, paddingHorizontal:20}} showsVerticalScrollIndicator={false}>
                        <View style={{alignItems:"center", paddingVertical:50}}>
                            <H1 style={{fontWeight:"bold", color:colors.primary}}>Vérifier le compte</H1>
                            <Text style={{textAlign:'center', paddingTop:10}}>
                                Veuillez entrer le code de vérification que nous avons envoyé à votre adresse e-mail.
                            </Text>
                        </View>
                        <View style={{alignItems:"center", paddingVertical:50}}>
                            <Item regular style={{width:200, marginBottom:20, borderRadius:10}} error={activationError}>
                                <Input 
                                    keyboardType="numeric"
                                    maxLength={4}
                                    placeholder="____" 
                                    style={{fontSize:30, textAlign:"center", letterSpacing:15, fontWeight:"bold"}}
                                    value={activationCode}
                                    onChangeText={ text => {
                                        if(activationError) setActivationError(false)
                                        setActivationCode(text)
                                    }}
                                />
                            </Item>
                            <Button 
                                transparent 
                                rounded 
                                style={{width:"100%", backgroundColor:colors.primary, justifyContent:"center"}}
                                onPress={handlePressVerify}
                            >
                                <Text style={{fontSize:22, color:"white"}}>Vérifier</Text>
                            </Button>
                        </View>
                        <View style={{alignItems:"center", paddingVertical:40}}>
                            <Text>Je n'ai pas reçu le code</Text>
                            <Button transparent disabled={activationOptions.loading}>
                                {
                                    (activationOptions.loading) ? (
                                        <Spinner color="white"/>
                                    ):(
                                        <Text style={{fontWeight:"bold"}}>Veuillez me renvoyer</Text>
                                    )
                                }
                            </Button>
                        </View>
                    </ScrollView>
                )
            }
            <StatusBar backgroundColor="white" barStyle="dark-content"/>
        </Container>
    );
}

export default VerificationScreen;