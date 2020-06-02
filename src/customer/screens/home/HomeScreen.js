import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, Icon, Button, Spinner} from 'native-base';
import { FlatList } from 'react-native-gesture-handler';
import { ThemeContext } from '../../../../App';
import AnimatedItem from '../../../common/components/animations/AnimatedItem';
import InTheNewsContainer from './components/InTheNewsContainer';
import PromotionContainer from './components/PromotionContainer';
import RecomandedContainer from './components/RecomandedContainer';
import NewArrivalContainer from './components/NewArrivalContainer';

const SECTIONS = [
    {
        id:"recomanded",
        sectionName:"Pour vous",
        sectionRender: () => <RecomandedContainer/>
    },
    {
        id:"in-the-news",
        sectionName:"A la une",
        sectionRender: () => <InTheNewsContainer/>
    },
    {
        id:"promotions",
        sectionName:"Promotions",
        sectionRender: () => <PromotionContainer/>
    },
    {
        id:"new-arrival",
        sectionName:"Nouveautés",
        sectionRender: () => <NewArrivalContainer/>
    }
]

function HomeScreen({navigation}) {
    const [sections, setSections] = React.useState(null)
    const theme = React.useContext(ThemeContext)

    const handlePressTitle = (id) => {
        navigation.navigate("ProductList", {sectionId:id})
    }
    
    React.useEffect(()=>{
        setSections(SECTIONS)
    },[])

    return (
        <View style={{...styles.root, backgroundColor:theme.backgroundPrimary}}>
            {
                (sections)?(
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={sections}
                        renderItem={({item, index})=>(
                            <AnimatedItem index={index}>
                                <Button onPress={()=>handlePressTitle(item.id)} iconRight transparent style={styles.buttonTitle}>
                                    <Text>{item.sectionName}</Text>
                                    <Icon  type="Entypo" name="chevron-right"/>
                                </Button>
                                {
                                    item.sectionRender()
                                }
                            </AnimatedItem>
                        )}
                        keyExtractor={item => `promotion-product-${item.id}`}
                    />
                ):(
                    <Spinner/>
                )
            }
        </View>
    );
}

const styles = StyleSheet.create({
    root:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        paddingBottom:20
    },
    buttonTitle:{
        height:40
    }
})

export default HomeScreen;