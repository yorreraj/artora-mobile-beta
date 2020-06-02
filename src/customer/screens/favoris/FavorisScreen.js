import React from 'react';
import { Dimensions } from 'react-native';
import {View, Text} from 'native-base';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
import MapView, {Marker} from 'react-native-maps';

const mapStyles = [
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#242f3e"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#746855"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#242f3e"
        }
      ]
    },
    {
      "featureType": "administrative.locality",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#d59563"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#d59563"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#263c3f"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#6b9a76"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#38414e"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#212a37"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9ca5b3"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#746855"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#1f2835"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#f3d19c"
        }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#2f3948"
        }
      ]
    },
    {
      "featureType": "transit.station",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#d59563"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#17263c"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#515c6d"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#17263c"
        }
      ]
    }
  ]
function FavorisScreen(props) {
    const [positions, setPositions] = React.useState({
        region:null,
        location:null
    })

    React.useEffect(()=>{
        getLocation()
    },[])

    const getLocation = async () => {
        const { status } = await Permissions.askAsync(Permissions.LOCATION)

        if(status === 'granted'){
            await Location.watchPositionAsync(
                {
                  enableHighAccuracy: true,
                  distanceInterval: 1,
                  timeInterval: 5000
                },
                newLocation => {
                    setPositions({
                        region:{
                            latitude:newLocation.coords.latitude,
                            longitude:newLocation.coords.longitude,
                            latitudeDelta: 0.01013503265924598,
                            longitudeDelta: 0.006621368229389191
                        },
                        location:{latitude:newLocation.coords.latitude, longitude:newLocation.coords.longitude}
                    })
                },
                error => console.log(error)
            );
        }
    }

    return (
        <View style={{flex:1}}>
            {
                (positions.location && positions.region)&&(
                    <MapView
                        initialRegion={positions.region}
                        showsCompass={true}
                        rotateEnabled={true}
                        style={{
                            width:Dimensions.get('window').width, 
                            height:Dimensions.get('window').height,
                        }}
                        customMapStyle={mapStyles}
                    >
                        <Marker coordinate={positions.location}/>
                    </MapView>
                )
            }
        </View>
    );
}

export default FavorisScreen;