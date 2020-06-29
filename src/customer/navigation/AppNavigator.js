import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeTabNavigation from './HomeTabNavigation';
import ProductListScreen from '../screens/product/ProductListScreen';
import ProductInCategorieScreen from '../screens/product/ProductInCategorieScreen';
import ShopScreen from '../screens/shop/ShopScreen';
import LoginScreen from '../screens/login/LoginScreen';
import { StyleProvider } from 'native-base-shoutem-theme';
import useTheme from '../../common/theme/use-theme';
import ProductDetailScreen from '../screens/product-detail/ProductDetailScreen';
import SignUpScreen from '../../auth/screens/signup/SignUpScreen';
import WelcomeScreen from '../../auth/screens/welcome/WelcomeScreen';
import PreferenceScreen from '../../auth/screens/preference/PreferenceScreen';
import VerificationScreen from '../../auth/screens/verification/VerificationScreen';

const Stack = createStackNavigator();

function AppNavigation(props) {
    const {theme} = useTheme();

    return (
        <StyleProvider style={theme}>
            <Stack.Navigator initialRouteName="Preference">
                <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}/>
                <Stack.Screen name="Home" component={HomeTabNavigation} options={{headerShown:false}}/>
                <Stack.Screen name="ProductList" component={ProductListScreen} options={{headerShown:false}}/>
                <Stack.Screen name="ProductDetail" component={ProductDetailScreen} options={{headerShown:false}}/>
                <Stack.Screen name="ProductInCategorie" component={ProductInCategorieScreen} options={{headerShown:false}}/>
                <Stack.Screen name="Boutique" component={ShopScreen} options={{headerShown:false}}/>
                <Stack.Screen name="SignUp" component={SignUpScreen} options={{headerShown:false}}/>
                <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown:false}}/>
                <Stack.Screen name="Preference" component={PreferenceScreen} options={{headerShown:false}}/>
                <Stack.Screen name="Verification" component={VerificationScreen} options={{headerShown:false}}/>
            </Stack.Navigator>
        </StyleProvider>
    );
}

export default AppNavigation;