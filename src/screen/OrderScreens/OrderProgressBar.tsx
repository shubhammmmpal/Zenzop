import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

interface OrderProgressBarProps {
  currentStep: number; // index of current step (e.g., 2 means first 2 are filled)
  totalSteps?: number;
}

const OrderProgressBar: React.FC<OrderProgressBarProps> = ({ currentStep, totalSteps = 5 }) => {
  return (
    <View style={styles.container}>
      {Array.from({ length: totalSteps }).map((_, index) => {
        const fill = useSharedValue(0);

        useEffect(() => {
          fill.value = withTiming(index < currentStep ? 1 : 0, { duration: 400 });
        }, [currentStep]);

        const animatedStyle = useAnimatedStyle(() => ({
          backgroundColor: fill.value === 1 ? '#34A853' : '#D9D9D9', // green vs gray
        }));

        return (
          <Animated.View
            key={index}
            style={[styles.segment, animatedStyle, index < totalSteps - 1 && { marginRight: 8 }]}
          />
        );
      })}
    </View>
  );
};

export default OrderProgressBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 15,
    marginBottom:20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  segment: {
    flex: 1,
    height: 4,
    borderRadius: 4,
  },
});
