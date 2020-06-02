import React, { useRef, useEffect } from 'react';
import { Animated } from 'react-native';

function FadeInView({children, isVisible, style}) {
    const fadeAnim = useRef(new Animated.Value(0)).current

    useEffect(() => {
        Animated.timing(
            fadeAnim,
            {
              toValue: isVisible?0:-90,
              duration: 600
            }
        ).start()
    }, [isVisible])

    return (
        <Animated.View  style={{...style,  top: fadeAnim }} >
            {children}
        </Animated.View>
    );
}

export default FadeInView;