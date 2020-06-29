import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { Container, Text, View, Icon, Spinner } from 'native-base';
import MasonryList from 'react-native-masonry-list';
import ProductListHeader from './components/ProductListHeader';
import ProductItem from '../../../common/components/ProductItem';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AnimatedItem from '../../../common/components/animations/AnimatedItem';
import useTheme from '../../../common/theme/use-theme';
import { useQueryListProduct } from '../../../graphql/hooks/use-query-list-product';
import { productsListSelector } from '../../../graphql/selectors/products-list-selector';

const headerTitles = {
    "recomanded":"Pour vous",
    "in-the-news": "A la une",
    "promotions":"Promotions",
    "new-arrival":"Nouveautés"
}

function Item({style, data}){
    return (
        <View style={style}>
            <TouchableOpacity onPress={()=>props.navigation.navigate('ProductDetail')} activeOpacity={0.6}>
                <ProductItem 
                    width={style.width} 
                    height={style.height} 
                    product={{
                        ...data,
                        imageUri:data.uri
                    }}
                    customStyles={{
                        productName:{
                            fontSize:12
                        },
                        price:{
                            fontSize:11
                        },
                        content:{
                            padding:10
                        }
                    }}
                />
            </TouchableOpacity>
        </View>
    )
}

function ProductListScreen(props) {
    const { colors } = useTheme()
    const { data, handleFetchMore, loading } = useQueryListProduct()
    const sectionId = props.route.params.sectionId;

    return (
        <Container style={{backgroundColor:colors.backgroundPrimary}}>
            <ProductListHeader {...props} title={headerTitles[sectionId]}/>
            {
                (data)&&
                <MasonryList
                    containerWidth={Dimensions.get('window').width}
                    images={productsListSelector(data)}
                    spacing={3}
                    masonryFlatListColProps={{
                        showsVerticalScrollIndicator:false,
                        style:{
                            backgroundColor:colors.backgroundPrimary,
                            alignSelf:"center"
                        }
                    }}
                    listContainerStyle={styles.mansoryContainer}
                    completeCustomComponent={({style, data}) => <Item style={style} data={data}/>}
                    onEndReachedThreshold={0.3}
                    onEndReached={handleFetchMore}
                    imageContainerStyle={{borderRadius: 10, marginVertical:0}}
                />
            }
            {
                (loading)&&
                <Spinner style={{width:"100%", height:40, position:"absolute", bottom:0, left:0, justifyContent:"center"}}/>
            }
        </Container>
    );
}

const styles = StyleSheet.create({
    mansoryContainer:{
        paddingTop:10,
        paddingBottom:30
    }
})

export default ProductListScreen;