import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Container, Content, Button, Text, Icon, Spinner } from 'native-base';
import { FlatList } from 'react-native-gesture-handler';
import { ThemeContext } from '../../../../App';
import ShopHeader from './components/ShopHeader';
import RecomandedContainer from './components/sections/RecomandedContainer';
import PromotionContainer from './components/sections/PromotionContainer';
import NewArrivalContainer from './components/sections/NewArrivalContainer';
import CategorieContainer from './components/sections/CategorieContainer';
import AnimatedItem from './components/AnimatedItem';

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
    const theme = React.useContext(ThemeContext)
    const [sections, setSections] = React.useState(null)

    React.useEffect(()=>{
        setSections(SECTIONS)
    },[])

    return (
        <Container style={{backgroundColor:theme.backgroundPrimary}}>
            <ShopHeader {...props}/>
            <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
                {
                    (sections)?(
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={sections}
                            renderItem={({item, index})=>(
                                <AnimatedItem index={index}>
                                    <Button iconRight transparent style={styles.buttonTitle}>
                                        <Text>{item.name}</Text>
                                        <Icon type="Entypo" name="chevron-right" />
                                    </Button>
                                    <item.Section/>
                                </AnimatedItem>
                            )}
                            keyExtractor={item => `shop-${item.id}`}
                            ListFooterComponent={
                                <View style={{paddingTop:10, paddingBottom:20}}>
                                    <View style={{padding:10, backgroundColor:"#FF7002",marginHorizontal:10,borderRadius:5}}>
                                        <Text style={{color:"white"}}>Nos produits par categorie</Text>
                                    </View>
                                    <CategorieContainer/>
                                </View>
                            }
                        />
                    ):(
                        <Spinner />
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