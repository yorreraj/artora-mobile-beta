import React from 'react';
import { Animated } from 'react-native';

function AnimatedItem({children, index, style}) {
    const animeValue = React.useState(new Animated.Value(200))[0]
    const animOpacity = React.useState(new Animated.Value(0))[0]

    React.useEffect(()=>{
        Animated.parallel([
            Animated.timing(
                animeValue,
                {
                    toValue:0,
                    duration:600,
                    delay:index*100
                }
            ).start(),
            Animated.timing(
                animOpacity,
                {
                    toValue:1,
                    duration:1000,
                    delay:index*200
                }
            ).start()
        ])
    },[])

    return (
      <Animated.View style={{paddingTop:animeValue, opacity:animOpacity , ...style}}>
          {children}
      </Animated.View>  
    );
}

export default AnimatedItem;