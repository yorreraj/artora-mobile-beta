import React from 'react';
import {Modal, TouchableOpacity, StyleSheet, Animated} from 'react-native';
import {View, Text, Button} from 'native-base'; 
import { FlatList } from 'react-native-gesture-handler';
import CategorieItem from './components/CategorieItem';
import {CATEGORIES} from '../../../common/fake-data';
import useTheme from '../../../common/theme/use-theme';


function CategorieScreen({navigation}) {
    const { colors } = useTheme()
    const [selectedFamilleCategorie, setSelectedFamilleCategorie] = React.useState(null)
    const animationValue = React.useState(new Animated.Value(100))[0]

    React.useEffect(()=>{
        Animated.timing(
            animationValue,
            {
                toValue:selectedFamilleCategorie!==null?0:100,
                duration:500
            }
        ).start()
    },[selectedFamilleCategorie])

    const handlePressItem = (familleCategorie) => {
        setSelectedFamilleCategorie(familleCategorie)
    }

    const handlePressCategorie = (categorie) => {
        const famille = {...selectedFamilleCategorie}
        setSelectedFamilleCategorie(null)
        navigation.navigate('ProductInCategorie', {famille, categorie})
    }

    return (
        <View style={{ flex:1, backgroundColor:colors.backgroundPrimary}}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={selectedFamilleCategorie !== null}
                onRequestClose={()=>setSelectedFamilleCategorie(null)}
            >
                <TouchableOpacity 
                    activeOpacity={1} 
                    onPress={()=>setSelectedFamilleCategorie(null)} 
                    style={styles.modalOverlay}>
                        {
                            (selectedFamilleCategorie)&&(
                                <Animated.View 
                                    style={[
                                        styles.modaleMenuContainer, 
                                        {backgroundColor:colors.backgroundPrimary},
                                        {
                                            top:animationValue.interpolate({
                                                inputRange:[0,100],
                                                outputRange:["0%","100%"]
                                            })
                                        }
                                    ]}
                                >
                                    <Text style={styles.menuTitle}>{selectedFamilleCategorie.title}</Text>
                                    {
                                        selectedFamilleCategorie.categories.map((categorie)=>(
                                            <Button 
                                                onPress={()=>handlePressCategorie(categorie)} 
                                                key={categorie.id} 
                                                transparent 
                                                style={{...styles.buttonMenu, backgroundColor:colors.backgroundSecondary}}
                                            >
                                                <Text style={styles.buttonMenuText}>{categorie.title}</Text>
                                            </Button>
                                        ))
                                    }
                                </Animated.View>
                            )
                        }
                </TouchableOpacity>
            </Modal>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={CATEGORIES}
                renderItem={({item})=>(
                    <TouchableOpacity onPress={()=>handlePressItem(item)} activeOpacity={0.6} style={{padding:10}}>
                        <CategorieItem imageUri={item.image} title={item.title}/>
                    </TouchableOpacity>
                )}
                keyExtractor={item => `categorie-product-${item.id}`}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    modalOverlay:{
        flex:1,
        justifyContent:"flex-end",
        backgroundColor:"rgba(0,0,0,.6)"
    },
    modaleMenuContainer:{
        margin:10, 
        borderRadius:10, 
        padding:20
    },
    menuTitle:{
        color:"#FF7002", 
        fontWeight:"bold", 
        marginBottom:10
    },
    buttonMenu:{
        borderRadius:5, 
        marginVertical:5 
    }
})

export default CategorieScreen;