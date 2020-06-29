import React from 'react';
import { View, Text, Container } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProductDetailHeader from './components/product-info/ProductDetailHeader';
import HorizontalMenu from '../../../common/components/HorizontalMenu';
import ProductImageContainer from './components/product-info/ProductImageContainer';
import ProductDescriptionContainer from './components/product-info/ProductDescriptionContainer';
import ProductPriceContainer from './components/product-info/ProductPriceContainer';
import useTheme from '../../../common/theme/use-theme';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const QUERY_DETAILS_PRODUCT = gql`
    query DetailsProduct($productId:String!){
        product(productId:$productId){
            id,
            name,
            available,
            youtubeVideoId,
            newArrival,
            inTheNew,
            inTheNewSince,
            createdOn,
            colors,
            pictures{id, uri, isMain},
            descriptions{id, title,content},
            prices{id, label,amount,currency, isMain},
            subCategories{name},
            pointsOfSale{id, name,shop{name}}
        }
    }
`

function ProductDetailScreen(props) {
    const { colors } = useTheme()
    const [activeMenuInfo, setActiveMenuInfo] = React.useState(0);
    const { data } = useQuery(QUERY_DETAILS_PRODUCT, { fetchPolicy:"cache-and-network", variables:{ productId:'product-_bV3m8QPzF' } })

    if(data) console.log(data)

    const picturesDataSelector = () => {
        const pictures = data.product.pictures.map(({uri}) => ({
            format:"image", uri
        }))
        pictures.push({
            format:"video",
            uri:`https://img.youtube.com/vi/${data.product.youtubeVideoId}/mqdefault.jpg`
        })
        return pictures
    } 

    const getDetailContent = ()=>{
        switch(activeMenuInfo){
            case 0:
                return <ProductDescriptionContainer/>
            case 1:
                return <ProductPriceContainer/>
        }
    }

    return (
        <Container style={{flex:1, backgroundColor:colors.backgroundPrimary}}>
            <ProductDetailHeader {...props}/>
            <SafeAreaView>
                {
                    (data)&&
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={{marginTop:10}}>
                            <ProductImageContainer pictures={data.product.pictures.map(({uri}) => uri )} youtubeVideoId={data.product.youtubeVideoId}/>
                        </View>
                        <View style={{marginHorizontal:15,  paddingVertical:15}}>
                            <Text style={{fontWeight:"bold"}}>Asus Zen Book Pro Duo</Text>
                            <View style={{marginTop:10}}>
                                <HorizontalMenu 
                                    menus={["Déscriptions", "Prix", "Points de vente"]}
                                    activeIndex={activeMenuInfo}
                                    onPressItem={(index)=>setActiveMenuInfo(index)}
                                    inactiveTextColor={colors.text}
                                />
                                {getDetailContent()}
                            </View>
                        </View>
                    </ScrollView>
                }
            </SafeAreaView>
        </Container>
    );
}

export default ProductDetailScreen;