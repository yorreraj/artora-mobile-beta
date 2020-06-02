import React from 'react';
import {StyleSheet, Animated} from 'react-native';
import { Container, View, Text } from 'native-base';
import MasonryList from 'react-native-masonry-list';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ProductItem from '../../../common/components/ProductItem';
import {PRODUCTS} from '../../../common/fake-data';
import ProductListHeader from './components/ProductListHeader';
import MenuCategorie from './components/product-in-categorie/MenuCategorie';
import AnimatedItem from '../../../common/components/animations/AnimatedItem';
import { ThemeContext } from '../../../../App';

const products = PRODUCTS.map(item=>({
    ...item,
    uri:item.imageUri
}))

const headerAnimConfig = {
    visibleValue:0,
    hideValue:-100,
    propertyToAnimate:"top"
}

let prevOffset = 0;

function ProductInCategorieScreen(props) {
    const theme = React.useContext(ThemeContext)
    const [hideNavigation, setHidenavigation] = React.useState(false);
    const [activeMenuId, setActiveMenuId] = React.useState("tous-categories");
    const [selectedCategorie, setSelectedCategorie] = React.useState(null);
    const animValue = React.useState(new Animated.Value(0))[0]

    const productItemStyles = {
        productName:{
            fontSize:12
        },
        price:{
            fontSize:11
        },
        content:{
            padding:5
        }
    }

    React.useEffect(()=>{
        Animated.timing(
            animValue,
            {
                toValue:hideNavigation?-110:0,
                duration:500
            }
        ).start()
    },[hideNavigation])

    React.useEffect(()=>{
        const {famille, categorie} = props.route.params
        setSelectedCategorie({famille,categorie})
    },[])

    return (
        <Container style={{flex:1, backgroundColor:theme.backgroundPrimary}}>
            {
                (selectedCategorie)&&
                <>
                    {
                        <Animated.View style={[styles.headerContainer, {backgroundColor:theme.backgroundSecondary},  {top:animValue}]}>
                            <ProductListHeader {...props}/>
                            <View style={{marginLeft:15}}>
                                <Text style={{fontWeight:"bold"}}>{selectedCategorie.famille.title}</Text>
                                <View style={{flexDirection:"row"}}>
                                    <Text style={{color:theme.textLight, fontSize:14, marginRight:5}}>{selectedCategorie.categorie.title}</Text>
                                    <Text style={{color:theme.primary, fontSize:14, fontWeight:"bold"}}>(200)</Text>
                                </View>
                            </View>
                            <MenuCategorie 
                                categories={[
                                    {id:"tous-categories", title:"Tous"}, 
                                    ...selectedCategorie.categorie.sousCategories
                                ]}
                                activeMenuId={activeMenuId}
                                onPressMenu={({id})=>setActiveMenuId(id)}
                            />
                        </Animated.View>
                    }
                    <MasonryList
                        images={products}
                        spacing={3}
                        masonryFlatListColProps={{
                            showsVerticalScrollIndicator:false,
                            onScroll:(e)=>{
                                const currentOffset = e.nativeEvent.contentOffset.y;
                                const direction = (currentOffset>150 && currentOffset>prevOffset)?'down':'up';
                                const headerVisible = direction==="down";
                                if(headerVisible !== hideNavigation){
                                    setHidenavigation(headerVisible)
                                }
                                prevOffset =currentOffset;
                            },
                            style:{
                                backgroundColor:theme.backgroundPrimary,
                                alignSelf:"center"
                            }
                        }}
                        listContainerStyle={{
                            paddingBottom:30,
                            paddingTop:170
                        }}
                        completeCustomComponent={({style, data})=>(
                            <AnimatedItem style={style}>
                                <TouchableOpacity activeOpacity={0.6}>
                                    <ProductItem 
                                        width={style.width} 
                                        height={style.height} 
                                        product={data}
                                        customStyles={productItemStyles}
                                    />
                                </TouchableOpacity>
                            </AnimatedItem>
                        )}
                    />
                </>
            }
        </Container>
    );
}

const styles = StyleSheet.create({
    headerContainer:{
        position:"absolute", 
        top:0, 
        left:0,
        zIndex:999
    }
})

export default ProductInCategorieScreen;