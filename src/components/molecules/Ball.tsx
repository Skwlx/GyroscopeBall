import React, {useEffect} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

interface BallProps {
  AccX: number;
  AccY: number;
}

//  Math.round(-1 * ((AccY * window.height) / 2));
//  Math.round((AccX * window.width) / 2);

const window = Dimensions.get('window');

const Ball: React.FC<BallProps> = ({AccX, AccY}) => {
  const accValue = useSharedValue({x: 0, y: 0});
  const prevAccValue = useSharedValue({x: 0, y: 0});
  const rewriteValue = useDerivedValue(() => {
    let newXValue = prevAccValue.value.x + accValue.value.x;
    let newYValue = prevAccValue.value.y + accValue.value.y * -1;
    if (newYValue >= window.height / 2 - 30) {
      newYValue = window.height / 2 - 30;
    } else if (newYValue <= -window.height / 2 + 30) {
      newYValue = -window.height / 2 + 30;
    }
    if (newXValue >= window.width / 2) {
      newXValue = window.width / 2;
    } else if (newXValue <= -(window.width / 2)) {
      newXValue = -window.width / 2;
    }
    console.log(window.width / 2, newXValue);
    prevAccValue.value = {
      x: newXValue,
      y: newYValue,
    };
    return {
      x: newXValue,
      y: newYValue,
    };
  });
  useEffect(() => {
    accValue.value = {x: AccX, y: AccY};
  });

  const animatedStyles = {
    motion: useAnimatedStyle(() => {
      return {
        transform: [
          {
            translateX: withSpring(rewriteValue.value.x),
          },
          {
            translateY: withSpring(rewriteValue.value.y),
          },
        ],
      };
    }),
  };

  return (
    <Animated.View style={[animatedStyles.motion, styles.box]}>
      <View style={styles.ball} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 200,
    height: 200,
    borderWidth: 1,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ball: {
    width: 20,
    height: 20,
    backgroundColor: 'white',
    borderRadius: 50,
  },
});

export default Ball;
