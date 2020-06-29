import React from 'react';
import {StyleSheet, Dimensions, Image, Modal} from 'react-native';
import { View, Text, Icon } from 'native-base';
import { AntDesign } from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient';
import Carousel from 'react-native-snap-carousel';
import ImageViewer from 'react-native-image-zoom-viewer';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ASUS_ZEN_BOOK } from '../../../../../common/fake-data';
import VideoViewer from './VideoViewer';

const SCREEN_SIZE = Dimensions.get('window');
const IMAGE_WIDTH = SCREEN_SIZE.width - 80;

const IMAGES_THUMB_URI = [
    {
        format:"video",
        uri:"https://img.youtube.com/vi/7MV_o5CH2AI/mqdefault.jpg"
    },
    ...ASUS_ZEN_BOOK.map(item=>({format:"image",uri:item}))
]


function ProductImageContainer({pictures, youtubeVideoId}) {
    const [activePreviewImageIndex, setActivePreviewImageIndex] = React.useState(-1)
    const [showModalVideo, setShowModalVideo] = React.useState(false)
    const thumbnails = [
        { format:"video", uri:`https://img.youtube.com/vi/${youtubeVideoId}/mqdefault.jpg` },
        ...pictures.map(uri => ({ format:"image", uri }))
    ]


    const handlePressItem = (item) => {
        if(item.format !== "video"){
            setActivePreviewImageIndex(pictures.indexOf(item.uri))
        }else{
            setShowModalVideo(true);
        }
    }

    const renderItem = (item) => (
        <TouchableOpacity 
            activeOpacity={0.6}
            onPress={()=>handlePressItem(item)}
            style={styles.root}
        >
            <Image style={styles.image} source={{uri:item.uri}}/>
            {
                (item.format==="video")&&(
                    <>
                        <View style={styles.content}>
                            <AntDesign name="playcircleo" size={40} color="white" />
                        </View>
                        <LinearGradient
                            colors={['transparent', 'rgba(0,0,0,0.8)']} 
                            style={styles.linearGradient}
                        />
                    </>
                )
            }
        </TouchableOpacity>
    )

    return (
        <View>
            <Carousel
                data={thumbnails}
                renderItem={({item})=>renderItem(item)}
                sliderWidth={SCREEN_SIZE.width}
                itemWidth={IMAGE_WIDTH}
                enableMomentum={false}
                lockScrollWhileSnapping={true}
                loop={true}
            />
            <Modal 
                visible={activePreviewImageIndex > -1}
                transparent={true} 
                animationType="slide"
                onRequestClose={()=>setActivePreviewImageIndex(-1)}
            >
                <ImageViewer 
                    enableSwipeDown
                    imageUrls={pictures.map(url=>({url}))}
                    index={activePreviewImageIndex}
                    onSwipeDown={()=>setActivePreviewImageIndex(-1)}
                    onRequestClose={()=>setActivePreviewImageIndex(-1)}
                />
            </Modal>
            <VideoViewer 
                visible={showModalVideo} 
                videoId="7MV_o5CH2AI"
                onRequestClose={()=>setShowModalVideo(false)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    root:{
        width: IMAGE_WIDTH,
        height: 180,
        backgroundColor:"#F1F1F1",
        borderRadius:10
    },
    image:{
        flex:1,
        borderRadius:10
    },
    linearGradient:{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom:0,
        height: "100%",
        borderRadius:10
    },
    content:{
        zIndex:999,
        height:"100%",
        position: 'absolute',
        left: 0,
        right:0,
        borderRadius:10,
        alignItems:"center",
        justifyContent:"center",
        padding:10
    }
})

export default ProductImageContainer;