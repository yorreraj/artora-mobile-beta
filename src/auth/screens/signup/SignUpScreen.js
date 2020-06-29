import React, { useState } from 'react';
import { Text, View, Item, Input, Icon, Button, H1, Container, Spinner } from 'native-base';
import useTheme from '../../../common/theme/use-theme';
import { Dimensions, ImageBackground, StatusBar, ScrollView, StyleSheet } from 'react-native';
import bg from '../../../../assets/auth-bg.png'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Popover from 'react-native-popover-view';
import { useCreateUser } from '../../../graphql/hooks/use-create-user';

const WIDTH = Dimensions.get('window').width
const placeHolderTextColor = "#979596"

function SignUpScreen({navigation}) {
    const { colors } = useTheme()
    const [hidePassword, setHidePassword] = useState(true)
    const [inputValues, setInputValues] = useState({
        name:"",
        login:"",
        password:""
    })
    const [ createUser, { errors, loading } ] = useCreateUser(inputValues, () => navigation.navigate('Verification'))

    const handleChangeInput = (inputName, text) => {
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
                    <Item regular style={styles.itemInput} error={Boolean(errors.name)}>
                        <Input 
                            style={{...styles.colorGrey, fontSize:20}} 
                            placeholder="Nom" 
                            placeholderTextColor={placeHolderTextColor}
                            onChangeText = { (text) => handleChangeInput('name', text) }
                        />
                        {
                            (Boolean(errors.name))&&
                            <Popover
                                from={(
                                    <TouchableOpacity>
                                        <Icon type="MaterialIcons" name="error-outline"/>
                                    </TouchableOpacity>
                                )}
                                backgroundStyle={{backgroundColor:"transparent"}}
                                popoverStyle={{backgroundColor:colors.primary, paddingVertical:5, paddingRight:25}}
                                placement="bottom"
                            >
                                    <View style={{flexDirection:"row", alignItems:"center"}}>
                                        <Icon type="MaterialIcons" name="error-outline" style={{color:"white", paddingHorizontal:5, fontSize:25}}/>
                                        <Text style={{color:"white", fontSize:16}}>
                                            Le nom est obligatoire et il doit être en minuscule sauf le premier lettre. (Exemple: Yorre Rajaonarivelo)
                                        </Text>
                                    </View>
                            </Popover>
                        }
                    </Item>
                    <Item regular style={styles.itemInput} error={Boolean(errors.login)}>
                        <Input 
                            style={{...styles.colorGrey, fontSize:20}} 
                            placeholder="Numéro mobile ou e-mail" 
                            placeholderTextColor={placeHolderTextColor}
                            onChangeText = { (text) => handleChangeInput('login', text) }
                        />
                        {
                            (Boolean(errors.login))&&
                            <Icon type="MaterialIcons" name="error-outline"/>
                        }
                    </Item>
                    <Item regular style={styles.itemInput} error={Boolean(errors.password)}>
                        <Input 
                            style={{...styles.colorGrey, fontSize:20}} 
                            placeholder="Mot de passe" 
                            placeholderTextColor={placeHolderTextColor} 
                            secureTextEntry={hidePassword}
                            onChangeText = { (text) => handleChangeInput('password', text) }
                        />
                        {
                            (Boolean(errors.password)) ? (
                                <Icon type="MaterialIcons" name="error-outline"/>
                            ):(
                                <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
                                    <Icon active type="Feather" name={hidePassword ? "eye":"eye-off"} style={{...styles.colorGrey, ...styles.iconEye}}/>
                                </TouchableOpacity>
                            )
                        }
                    </Item>
                    <Button
                        style={{ ...styles.buttonRegister, backgroundColor:colors.primary}} 
                        onPress={() => navigation.navigate('Verification')}
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