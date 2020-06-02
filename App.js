import React from 'react';
import { AppLoading } from 'expo';
import { Container, Root } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import getTheme from './native-base-theme/components';
import AppNavigator from './src/customer/navigation/AppNavigator';
import darkColor from './native-base-theme/variables/darkColor';
import lighColor from './native-base-theme/variables/lightColor';
import { NavigationContainer } from '@react-navigation/native';
import {StyleProvider, clearThemeCache } from 'native-base-shoutem-theme';

const themes = {
  lightTheme:{
    name:"light",
    text:"#000000",
    textLight:"#707070",
    primary:"#FF6800",
    backgroundPrimary:"#FFFFFF",
    backgroundSecondary:"#F1F1F1"
  },
  darkTheme:{
    name:"dark",
    text:"#FFFFFF",
    textLight:"#b1c3ef",
    primary:"#FF6800",
    backgroundPrimary:"#1E263B",
    backgroundSecondary:"#252F47"
  }
}

export const ThemeContext = React.createContext(themes.darkTheme)

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      theme:{
        theme:themes.darkTheme,
        style:getTheme(darkColor)
      }
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({...this.state, isReady: true  });

    /* setTimeout(()=>{
        clearThemeCache()
        this.setState({
          isReady:true,
          theme:{
            theme:themes.darkTheme,
            style:getTheme(darkColor)
          }
        })
    },5000) */

  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
        <Root>
            <NavigationContainer>
              <StyleProvider style={this.state.theme.style}>
                  <ThemeContext.Provider value={this.state.theme.theme}>
                    <AppNavigator/>
                  </ThemeContext.Provider>
              </StyleProvider>
            </NavigationContainer>
        </Root>
    );
  }
}

