import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabBar} from 'react-native-animated-nav-tab-bar';
import {Icon, Container} from "native-base";
import HomeScreen from '../screens/home/HomeScreen';
import CategorieScreen from '../screens/categorie/CategorieScreen';
import ShopListScreen from '../screens/shop/ShopListScreen';
import FavorisScreen from '../screens/favoris/FavorisScreen';
import HomeHeader from '../screens/home/components/HomeHeader';
import useTheme from '../../common/theme/use-theme';

const Tab = createBottomTabNavigator()

const tabScreens = [
    {
        name:"Accueil",
        component:HomeScreen,
        icon_name:"home"
    },
    {
        name:"Categories",
        component:CategorieScreen,
        icon_name:"grid"
    },
    {
        name:"ListeBoutiques",
        component:ShopListScreen,
        icon_name:"map-pin"
    },
    {
        name:"Favoris",
        component:FavorisScreen,
        icon_name:"heart"
    }
]

function HomeTabNavigation(props) {
    const { colors } = useTheme()
    
    return (
        <Container>
            <HomeHeader/>
            <Tab.Navigator
                tabBar={props=>(
                    <TabBar
                        activeColors={"#FFFFFF"}
                        activeTabBackgrounds={colors.primary}
                        tabBarBackground={colors.backgroundSecondary}
                        {...props}
                    />
                )}
            >
                {
                    tabScreens.map(({name, component, icon_name}, key)=>(
                        <Tab.Screen
                            key={`tab-screen-${key}`}
                            name={name}
                            component={component}
                            options={{
                                tabBarIcon:({focused, color, size})=>(
                                    <Icon
                                        type="Feather"
                                        name={icon_name}
                                        style={{
                                            color:focused?color:colors.textLight,
                                            fontSize:size?size:20
                                        }}
                                    />
                                )
                            }}
                        />
                    ))
                }
            </Tab.Navigator>
        </Container>
    );
}

export default HomeTabNavigation;