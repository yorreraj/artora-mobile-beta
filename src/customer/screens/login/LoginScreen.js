import React from 'react';
import { View, Text, Container } from 'native-base';
import { ThemeContext } from '../../../../App';
import { StatusBar } from 'react-native';

function LoginScreen(props) {
    const theme = React.useContext(ThemeContext);
    return (
        <Container style={{flex:1, backgroundColor:theme.backgroundPrimary}}>
            
            <StatusBar 
                barStyle={theme.name==="light"?"dark-content":"light-content"} 
                backgroundColor={theme.backgroundPrimary}
            />
        </Container>
    );
}

export default LoginScreen;

