import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeTabNavigation from './HomeTabNavigation';
import ProductListScreen from '../screens/product/ProductListScreen';
import ProductDetailScreen from '../screens/product/ProductDetailScreen';
import ProductInCategorieScreen from '../screens/product/ProductInCategorieScreen';
import ShopScreen from '../screens/shop/ShopScreen';
import LoginScreen from '../screens/login/LoginScreen';

const Stack = createStackNavigator();

function AppNavigation(props) {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}/>
            <Stack.Screen name="Home" component={HomeTabNavigation} options={{headerShown:false}}/>
            <Stack.Screen name="ProductList" component={ProductListScreen} options={{headerShown:false}}/>
            <Stack.Screen name="ProductDetail" component={ProductDetailScreen} options={{headerShown:false}}/>
            <Stack.Screen name="ProductInCategorie" component={ProductInCategorieScreen} options={{headerShown:false}}/>
            <Stack.Screen name="Boutique" component={ShopScreen} options={{headerShown:false}}/>
        </Stack.Navigator>
    );
}

export default AppNavigation;