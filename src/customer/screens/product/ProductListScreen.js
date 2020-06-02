import React from 'react';
import { View, Text, Container } from 'native-base';
import MasonryList from 'react-native-masonry-list';
import ProductListHeader from './components/ProductListHeader';
import {PRODUCTS, PROMOTIONS} from '../../../common/fake-data';
import ProductItem from '../../../common/components/ProductItem';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AnimatedItem from '../../../common/components/animations/AnimatedItem';
import {ThemeContext} from '../../../../App';

const getImages = (sectionId) => {
    const data = (sectionId === "promotions") ? PROMOTIONS : PRODUCTS;
    return data.map(item=>({
        ...item,
        uri:item.imageUri
    }))
}

const headerTitles = {
    "recomanded":"Pour vous",
    "in-the-news": "A la une",
    "promotions":"Promotions",
    "new-arrival":"Nouveautés"
}

function ProductListScreen(props) {
    const theme = React.useContext(ThemeContext)
    const sectionId = props.route.params.sectionId;

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

    return (
        <Container style={{backgroundColor:theme.backgroundPrimary}}>
            <ProductListHeader {...props} title={headerTitles[sectionId]}/>
            <MasonryList
                images={getImages(sectionId)}
                spacing={3}
                masonryFlatListColProps={{
                    showsVerticalScrollIndicator:false,
                    style:{
                        backgroundColor:theme.backgroundPrimary,
                        alignSelf:"center"
                    }
                }}
                listContainerStyle={{
                    paddingTop:10,
                    paddingBottom:30
                }}
                completeCustomComponent={({style, data})=>(
                    <AnimatedItem style={style}>
                        <TouchableOpacity onPress={()=>props.navigation.navigate('ProductDetail')} activeOpacity={0.6}>
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
        </Container>
    );
}

export default ProductListScreen;