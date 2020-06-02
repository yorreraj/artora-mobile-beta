import React, { useEffect } from 'react';
import { Modal, Dimensions } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import { View, Text, Spinner } from 'native-base';

function VideoViewer({visible, videoId, onRequestClose}) {
    const [showLoader, setShowLoader] = React.useState(true)
    const [windowSize, setWindowSize] = React.useState(Dimensions.get('window'))

    const getOrientation = () => (windowSize.width > windowSize.height) ? 'LANDSCAPE':'PORTRAIT'

    React.useEffect(()=>{
        setShowLoader(true)
        Dimensions.addEventListener('change', ()=>{
            setWindowSize(Dimensions.get('window'))
        })
    },[])

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
            onRequestClose={()=>{setShowLoader(true); onRequestClose()}}
        >
            <View style={{flex:1, backgroundColor:"black", justifyContent:"center"}}>
                {
                    (showLoader)&&(
                        <View style={{zIndex:999, backgroundColor:"rgba(0,0,0,.8)", width:windowSize.width, height:windowSize.height, position:"absolute", top:0, left:0, justifyContent:"center", alignItems:"center"}}>
                            <Spinner/>
                        </View>
                    )
                }
                <YoutubePlayer
                    height={getOrientation()==='LANDSCAPE'?windowSize.height:200}
                    width={windowSize.width}
                    videoId={videoId}
                    play={true}
                    volume={50}
                    playbackRate={1}
                    initialPlayerParams={{
                        cc_lang_pref: "fr",
                        showClosedCaptions: true,
                        preventFullScreen:true
                    }}
                    onChangeState={(event)=>{
                        if(event === "playing")
                            setShowLoader(false)
                    }}
                />
            </View>
        </Modal>
    );
}

export default VideoViewer;