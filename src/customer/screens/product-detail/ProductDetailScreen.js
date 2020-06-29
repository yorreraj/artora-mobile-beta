import React, { useState } from 'react';
import { Container, View, Text, Form, Textarea, Button, Icon, Item } from 'native-base';
import useTheme from '../../../common/theme/use-theme';
import ProductDetailHeader from './components/ProductDetailHeader';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_DETAIL_PRODUCT } from '../../../graphql/queries/query-detail-product';
import { ScrollView } from 'react-native-gesture-handler';
import ProductPictureViewer from './components/ProductPictureViewer';
import ProductDescription from './components/ProductDescription';
import ProductPrice from './components/ProductPrice';
import HorizontalMenu from '../../../common/components/HorizontalMenu';
import CommentItem from './components/CommentItem';
import { Dimensions } from 'react-native';
import HorizontalIconMenu from '../../../common/components/HorizontalIconMenu';
import ProductComment from './components/ProductComment';
import ProductPointOfSale from './components/ProductPointOfSale';

function ProductDetailScreen(props) {
    const { colors } = useTheme()
    const [activeMenuInfo, setActiveMenuInfo] = useState(0)
    const { data } = useQuery(QUERY_DETAIL_PRODUCT, { fetchPolicy:"cache-and-network", variables:{ productId:'product-_bV3m8QPzF' } })

    const renderProductInfo = () => {
        const product = data.product
        switch(activeMenuInfo){
            case 0:
                return (
                    <ProductDescription 
                        descriptions={product.descriptions} 
                        productColors={product.colors} 
                    />
                )
            case 1:
                return (
                    <ProductPrice prices={product.prices}/>
                )
            case 2:
                return (
                    <ProductPointOfSale pointsOfSale={product.pointsOfSale}/>
                )
            case 3:
                return (
                    <ProductComment/>
                )
        }
    }

    return (
        <Container style={{flex:1, backgroundColor:colors.backgroundPrimary}}>
            <ProductDetailHeader  {...props}/>
            <SafeAreaView>
                {
                    (data)&&
                    <ScrollView showsVerticalScrollIndicator={false} style={{marginBottom:100}}>
                        <View style={{marginTop:10}}>
                            <ProductPictureViewer 
                                pictures={data.product.pictures.map(({uri}) => uri )} 
                                youtubeVideoId={data.product.youtubeVideoId}
                            />
                        </View>
                        <View style={{marginHorizontal:15,  paddingVertical:15}}>
                            <Text style={{fontWeight:"bold"}}>{ data.product.name }</Text>
                            <View style={{marginTop:10}}>
                                <HorizontalIconMenu
                                    menus={[
                                        {
                                            name:"Déscriptions",
                                            iconName:"info"
                                        },
                                        {
                                            name:"Prix",
                                            iconName:"price-tag"
                                        },
                                        {
                                            name:"Points de vente",
                                            iconName:"location-pin"
                                        },
                                        {
                                            name:"Commentaires",
                                            iconName:"chat"
                                        },
                                    ]}
                                    activeMenuIndex={activeMenuInfo}
                                    onPressMenu={(index) => setActiveMenuInfo(index)}
                                />
                                {renderProductInfo()}
                            </View>
                        </View>
                    </ScrollView>
                }
            </SafeAreaView>
        </Container>
    );
}

export default ProductDetailScreen;