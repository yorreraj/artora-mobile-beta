import React from 'react';
import PropTypes from 'prop-types';
import { Animated } from 'react-native';

function ToggleAnimationView({children, config, isVisible,  style}) {
    const {visibleValue, hideValue, propertyToAnimate, duration} = config;
    const animValue = React.useRef(new Animated.Value(isVisible?hideValue:visibleValue)).current

    React.useEffect(()=>{
        Animated.timing(
            animValue,
            {
              toValue: isVisible?visibleValue:hideValue,
              duration: duration || 600
            }
        ).start()
    },[isVisible])

    return (
        <Animated.View  style={{...style,  [propertyToAnimate]:animValue}} >
            {children}
        </Animated.View>
    );
}

ToggleAnimationView.proptypes = {
    config:PropTypes.objectOf({
        visibleValue:PropTypes.number.isRequired,
        hideValue:PropTypes.number.isRequired,
        propertyToAnimate:PropTypes.string.isRequired,
        duration:PropTypes.number
    }).isRequired,
    isVisible:PropTypes.bool,
    style:PropTypes.object
}

export default ToggleAnimationView;