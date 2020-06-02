import React from 'react';
import { View, Text, Container } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProductDetailHeader from './components/product-info/ProductDetailHeader';
import HorizontalMenu from '../../../common/components/HorizontalMenu';
import ProductImageContainer from './components/product-info/ProductImageContainer';
import ProductDescriptionContainer from './components/product-info/ProductDescriptionContainer';
import ProductPriceContainer from './components/product-info/ProductPriceContainer';
import { ThemeContext } from '../../../../App';

function ProductDetailScreen(props) {
    const theme = React.useContext(ThemeContext)
    const [activeMenuInfo, setActiveMenuInfo] = React.useState(0);

    const getDetailContent = ()=>{
        switch(activeMenuInfo){
            case 0:
                return <ProductDescriptionContainer/>
            case 1:
                return <ProductPriceContainer/>
        }
    }

    return (
        <Container style={{flex:1, backgroundColor:theme.backgroundPrimary}}>
            <ProductDetailHeader {...props}/>
            <SafeAreaView>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{marginTop:10}}>
                        <ProductImageContainer/>
                    </View>
                    <View style={{marginHorizontal:15,  paddingVertical:15}}>
                        <Text style={{fontWeight:"bold"}}>Asus Zen Book Pro Duo</Text>
                        <View style={{marginTop:10}}>
                            <HorizontalMenu 
                                menus={["Déscriptions", "Prix", "Points de vente"]}
                                activeIndex={activeMenuInfo}
                                onPressItem={(index)=>setActiveMenuInfo(index)}
                                inactiveTextColor={theme.text}
                            />
                            {getDetailContent()}
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </Container>
    );
}

export default ProductDetailScreen;