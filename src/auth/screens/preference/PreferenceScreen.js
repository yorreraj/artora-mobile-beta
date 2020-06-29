import React, { useState, useRef } from 'react';
import { Container, View, Header, Left, Icon, Right, Text, Footer, Button, Body, H1, Title } from 'native-base';
import { StyleSheet, TouchableOpacity, StatusBar, BackHandler } from 'react-native';
import useTheme from '../../../common/theme/use-theme';
import { ScrollView } from 'react-native-gesture-handler';
import GenderChoiceLlist from './components/GenderChoiceLlist';
import CategoryChoiceList from './components/CategoryChoiceList';
import ShopChoiceList from './components/ShopChoiceList';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_CATEGORIES_PERSON } from '../../../graphql/queries/query-categories-person';
import { QUERY_USER_PREFERENCE_DATA } from '../../../graphql/queries/query-user-preference-data';

const GENDERS = ["Garçon", "Fillette", "Adolescent", "Adolescente", "Homme", "femme", "Vieux", "Vieille"].map((gender, id) => ({id, gender}))
const FAMILIES = [
    {
        id:"family-1",
        name:"Agriculture & Alimentation",
        categories: ["Agriculture", "Produits alimentaires"].map((category, index) => ({
            id:`1${index}`,
            name:category
        }))
    },
    {
        id:"family-2",
        name:"Vêtements, Textiles et Accessoires",
        categories:["Vêtements", "Textile et Cuir", "Bijoux fantaisie", "Montres, lunettes, gants"].map((category, index) => ({
            id:`2${index}`,
            name:category
        }))
    },
    {
        id:"family-3",
        name:"Auto & Transport",
        categories:["Véhicules et Accessoires"].map((category, index) => ({
            id:`3${index}`,
            name:category
        }))
    },
    {
        id:"family-4",
        name:"Sacs, Chaussures et Accessoires",
        categories:["Sacs et valises", "Chaussures et Accessoires"].map((category, index) => ({
            id:`4${index}`,
            name:category
        }))
    },
    {
        id:"family-5",
        name:"Electronique",
        categories:["Grand public", "Appareil Ménager", "Sécurité et protection"].map((category, index) => ({
            id:`5${index}`,
            name:category
        }))
    }
]
const SHOPS = [
    {
        imageUri:"https://tonpetitlook.com/wp-content/uploads/2019/11/72727821_102714184486718_7729928714519052288_o.jpg",
        name:"Shop Style",
        description:"Vente de vêtement",
        location:"Antinarenina"
    },
    {
        imageUri:"https://contenu.maruche.ca/Fichiers/a2fcfb95-f9fc-e611-80f8-00155d09650f/Sites/4e5d1027-74f7-e611-80f8-00155d09650f/Images/boutique-souvenir-2019-1.jpg",
        name:"Boutique souvenir",
        description:"Article de souvenir",
        location:"Analakely"
    },
    {
        imageUri:"https://tonpetitlook.com/wp-content/uploads/2019/11/72727821_102714184486718_7729928714519052288_o.jpg",
        name:"Shop Style",
        description:"Vente de vêtement",
        location:"Antinarenina"
    },
    {
        imageUri:"https://contenu.maruche.ca/Fichiers/a2fcfb95-f9fc-e611-80f8-00155d09650f/Sites/4e5d1027-74f7-e611-80f8-00155d09650f/Images/boutique-souvenir-2019-1.jpg",
        name:"Boutique souvenir",
        description:"Article de souvenir",
        location:"Analakely"
    },
    {
        imageUri:"https://tonpetitlook.com/wp-content/uploads/2019/11/72727821_102714184486718_7729928714519052288_o.jpg",
        name:"Shop Style",
        description:"Vente de vêtement",
        location:"Antinarenina"
    },
    {
        imageUri:"https://contenu.maruche.ca/Fichiers/a2fcfb95-f9fc-e611-80f8-00155d09650f/Sites/4e5d1027-74f7-e611-80f8-00155d09650f/Images/boutique-souvenir-2019-1.jpg",
        name:"Boutique souvenir",
        description:"Article de souvenir",
        location:"Analakely"
    }
].map((shop, index) => ({...shop, id:`shop-${index}`}))
const TITLES = [
    "Vous cherchez de produit pour qui ?",
    "Quels produits vous intéressent ?",
    "Suivez les boutiques que vous aimez."
]

function PreferenceScreen({navigation}) {
    const { colors } = useTheme()
    const scrollView = useRef(null);
    const [selectedChoice, setSelectedChoice] = useState({
        gender:[],
        category:[],
        shop:[]
    })
    const [currentStep, setCurrendStep] = useState(0)
    const { data, loading } = useQuery(QUERY_USER_PREFERENCE_DATA)

    if(!loading) console.log(data)
    

    const handlePressGender = (id) => {
        const newSelection = [...selectedChoice.gender]
        const index = newSelection.indexOf(id)
        if(index > -1)
            newSelection.splice(index, 1)
        else
            newSelection.push(id)
        setSelectedChoice({...selectedChoice, gender:newSelection})
    }

    const handlePressCategory = (id) => {
        const newSelection = [...selectedChoice.category]
        const index = newSelection.indexOf(id)
        if(index > -1)
            newSelection.splice(index, 1)
        else
            newSelection.push(id)
        setSelectedChoice({...selectedChoice, category:newSelection})
    }

    const handlePressShop = (id) => {
        const newSelection = [...selectedChoice.shop]
        const index = newSelection.indexOf(id)
        if(index > -1)
            newSelection.splice(index, 1)
        else
            newSelection.push(id)
        setSelectedChoice({...selectedChoice, shop:newSelection})
    }

    const handlePressNext = () => {
        scrollView.current.scrollTo({x: 0, y: 0, animated: true})
        if(currentStep < 2)
            setCurrendStep(currentStep+1)
        else
            console.log(selectedChoice)
    }

    const handlePressPrev = () => {
        scrollView.current.scrollTo({x: 0, y: 0, animated: true})
        setCurrendStep(currentStep-1)
    }

    BackHandler.addEventListener('hardwareBackPress', () => {
        if(currentStep === 0)
            navigation.goBack()
        else
            handlePressPrev()

        return true
    })

    return (
        <Container style={styles.container}>
            <Header noShadow transparent iosBarStyle="dark-content" style={styles.header}>
                {
                    (currentStep > 0)&&
                    <Left>
                        <TouchableOpacity activeOpacity={0.5} onPress={() => handlePressPrev()}>
                            <Icon type="Entypo" name="chevron-left"/>
                        </TouchableOpacity>
                    </Left>
                }
                <Right>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => handlePressNext()}>
                        <Text>Ignorer</Text>
                    </TouchableOpacity>
                </Right>
            </Header>
            <Body style={{width:"100%", paddingHorizontal:20}}>
                {
                    (data && !loading)&&(
                        <ScrollView ref={scrollView} showsVerticalScrollIndicator={false}>
                            <H1 style={styles.title}>
                                { TITLES[currentStep] }
                            </H1>
                            {
                                (currentStep === 0) &&
                                <GenderChoiceLlist 
                                    genders={data.categoriesPerson.map(({id, name}) => ({id, gender:name}))}
                                    selected={selectedChoice.gender} 
                                    onPressItem={handlePressGender}
                                />
                            }
                            {
                                (currentStep === 1) &&
                                <CategoryChoiceList 
                                    families={data.familiesProduct} 
                                    selected={selectedChoice.category} 
                                    onPressItem={handlePressCategory}
                                />
                            }
                            {
                                (currentStep === 2) &&
                                <ShopChoiceList 
                                    shops={data.shops.map(({id,name,photoUri,pointsOfSale}) => ({
                                        id, name, imageUri:photoUri, description:"", location:pointsOfSale[0].name
                                    }))} 
                                    selected={selectedChoice.shop} 
                                    onPressItem={handlePressShop}
                                />
                            }
                        </ScrollView>
                    )
                }
            </Body>
            <Footer>
                <Button style={{backgroundColor:colors.primary,flex:1, height:"100%", justifyContent:"center"}} onPress={() => handlePressNext()}>
                    <Text>Suivant</Text>
                </Button>
            </Footer>
        </Container>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"white"
    },
    header:{
        marginVertical:10,
        marginHorizontal:10
    },
    title:{
        fontWeight:"bold", 
        paddingTop:20, 
        paddingBottom:40, 
        paddingHorizontal:5
    }
})

export default PreferenceScreen;