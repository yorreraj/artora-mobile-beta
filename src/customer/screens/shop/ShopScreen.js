import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Container, Content, Button, Text, Icon, Spinner } from 'native-base';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import ShopHeader from './components/ShopHeader';
import RecomandedContainer from './components/sections/RecomandedContainer';
import PromotionContainer from './components/sections/PromotionContainer';
import NewArrivalContainer from './components/sections/NewArrivalContainer';
import CategorieContainer from './components/sections/CategorieContainer';
import AnimatedItem from './components/AnimatedItem';
import useTheme from '../../../common/theme/use-theme';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_SHOP_PRODUCT } from '../../../graphql/queries/query-shop-product';
 
const SECTIONS = [
    {
        id:"promotions",
        name:"Promotions",
        Section:PromotionContainer
    },
    {
        id:"new-arrival",
        name:"Nouveautés",
        Section:NewArrivalContainer
    },
    {
        id:"recomanded",
        name:"Pour vous",
        Section:RecomandedContainer
    }
]

function ShopScreen(props) {
    const { colors } = useTheme()
    const { data, loading } = useQuery(QUERY_SHOP_PRODUCT, { fetchPolicy:"cache-and-network", variables:{shopId:"shop-O-7mx5NOy"}})

    const newArrivalSelector = () => data.newProductsFromShop.map(({id, name, prices, pictures}) => ({
        id,
        name,
        price:prices.filter(({isMain}) => isMain)[0].amount,
        imageUri:pictures.filter(({isMain}) => isMain)[0].uri
    }))

    return (
        <Container style={{backgroundColor:colors.backgroundPrimary}}>
            <ShopHeader {...props}/>
            <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
                {
                    (!loading)?(
                        <ScrollView>
                            {/* <AnimatedItem>
                                <Button iconRight transparent style={styles.buttonTitle}>
                                    <Text>Promotions</Text>
                                    <Icon type="Entypo" name="chevron-right" />
                                </Button>
                                <PromotionContainer/>
                            </AnimatedItem> */}
                            <AnimatedItem>
                                <Button iconRight transparent style={styles.buttonTitle}>
                                    <Text>Nouveautés</Text>
                                    <Icon type="Entypo" name="chevron-right" />
                                </Button>
                                <NewArrivalContainer {...props} products={newArrivalSelector()}/>
                            </AnimatedItem>
                            {/* <AnimatedItem>
                                <Button iconRight transparent style={styles.buttonTitle}>
                                    <Text>Pour vous</Text>
                                    <Icon type="Entypo" name="chevron-right" />
                                </Button>
                                <RecomandedContainer/>
                            </AnimatedItem> */}
                            <View style={{paddingTop:10, paddingBottom:20}}>
                                <View style={{padding:10, backgroundColor:"#FF7002",marginHorizontal:10,borderRadius:5}}>
                                    <Text style={{color:"white"}}>Nos produits par categorie</Text>
                                </View>
                                <CategorieContainer/>
                            </View>
                        </ScrollView>
                    ):(
                        <Spinner/>
                    )
                }
            </View>
        </Container>
    );
}

const styles = StyleSheet.create({
    buttonTitle:{
        height:40
    }
})

export default ShopScreen;