import React from 'react';
import { Animated } from 'react-native';

function AnimatedItem({children, index}) {
    const animeValue = React.useState(new Animated.Value(100))[0]

    React.useEffect(()=>{
        Animated.timing(
            animeValue,
            {
                toValue:0,
                duration:800,
                delay:index*200
            }
        ).start()
    },[])

    return (
      <Animated.View style={{paddingTop:animeValue}}>
          {children}
      </Animated.View>  
    );
}

export default AnimatedItem;