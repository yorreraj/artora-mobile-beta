import React, { useState, useEffect } from 'react';
import { AppLoading } from 'expo';
import { Root } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import AppNavigator from './src/customer/navigation/AppNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { ApolloProvider } from '@apollo/react-hooks';
import client from './src/graphql';


function App(props) {
  const [setReady, isReady] = useState(false)

  const loadFont = async () => {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    setReady(true)
  }

  useEffect(() => {
    if(!isReady)
      loadFont()
  })

  if(!isReady)
    return <AppLoading/>
  
  return(
    <ApolloProvider client={client}>
        <Root>
            <NavigationContainer>
              <AppNavigator/>
            </NavigationContainer>
        </Root>
    </ApolloProvider>
  )
}

export default App;