import React, { useState } from 'react';
import { Text, View, Button, H1, Container, Spinner } from 'native-base';
import useTheme from '../../../common/theme/use-theme';
import { Dimensions, ImageBackground, StatusBar, ScrollView, StyleSheet } from 'react-native';
import bg from '../../../../assets/auth-bg.png'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useCreateUser } from '../../../graphql/hooks/use-create-user';
import CustomInput from './components/CustomInput';

const WIDTH = Dimensions.get('window').width

function SignUpScreen({navigation}) {
    const { colors } = useTheme()
    const [hidePassword, setHidePassword] = useState(true)
    const [inputValues, setInputValues] = useState({
        name:"",
        login:"",
        password:""
    })
    const [ createUser, { errors, removeError, loading } ] = useCreateUser(inputValues, () => navigation.navigate('Verification'))

    const handleChangeInput = (inputName, text) => {
        if(Boolean(errors[inputName])) 
            removeError(inputName)
        const newValues = {...inputValues}
        newValues[inputName] = text
        setInputValues(newValues)
    }

    return (
        <Container>
            <ScrollView showsVerticalScrollIndicator={false}>
                <ImageBackground 
                    style={{height:200}} 
                    imageStyle={styles.headerImageBackground} 
                    source={bg}
                />
                <View style={styles.formContainer}>
                    <H1 style={{...styles.title, ...styles.colorGrey}}>S'inscrire</H1>
                    <CustomInput 
                        inputProps={{
                            placeholder:"Nom", 
                            value:inputValues.name,
                            onChangeText: text => handleChangeInput('name', text)
                        }}
                        errorMessage={errors.name}
                    />
                    <CustomInput 
                        inputProps={{
                            placeholder:"Numéro mobile ou e-mail", 
                            value:inputValues.login,
                            onChangeText: text => handleChangeInput('login', text)
                        }}
                        errorMessage={errors.login}
                    />
                    <CustomInput 
                        inputProps={{
                            placeholder:"Mot de passe", 
                            value:inputValues.password,
                            secureTextEntry:hidePassword,
                            onChangeText: text => handleChangeInput('password', text)
                        }}
                        errorMessage={errors.password}
                        iconProps={{
                            type:"Feather",
                            name: hidePassword ? "eye":"eye-off"
                        }}
                        onPressIcon={ () => setHidePassword(!hidePassword) }
                    />

                    <Button
                        style={{ ...styles.buttonRegister, backgroundColor:colors.primary}}
                        transparent
                        rounded
                        onPress={() => createUser()}
                        disabled={loading}
                    >
                        {
                            (!loading)?(
                                <Text style={{color:"white"}}> S'inscrire </Text>
                            ):(
                                <Spinner color="white"/>
                            )
                        }
                    </Button>
                    <View style={{flexDirection:"row", justifyContent:"center", marginTop:30}}>
                        <Text style={{...styles.colorGrey}}>Vous avez déjà un compte?</Text>
                        <TouchableOpacity>
                            <Text style={{color:colors.primary, marginLeft:5}}>Se connecter</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            <StatusBar backgroundColor={colors.primary}/>
        </Container>
    );
}

const styles = StyleSheet.create({
    headerImageBackground:{
        left:-10, 
        width:WIDTH+20,  
        borderBottomLeftRadius:50, 
        borderBottomRightRadius:50
    },
    formContainer:{
        backgroundColor:"white", 
        position:"relative", 
        top:-40, 
        marginHorizontal:20, 
        borderRadius:10, 
        paddingTop:40, 
        paddingBottom:30, 
        paddingHorizontal:20
    },
    colorGrey:{
        color:"#707070"
    },  
    title:{
        fontWeight:"bold", 
        marginBottom:20
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
    buttonRegister:{
        marginTop:25,
        justifyContent:"center"
    }
})

export default SignUpScreen;