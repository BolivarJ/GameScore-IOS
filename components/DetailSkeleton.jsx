import { View, Animated } from "react-native";
import { useEffect, useRef } from "react";

export function DetailSkeleton() {
  const opacity = useRef(new Animated.Value(0.3)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, { toValue: 1, duration: 800, useNativeDriver: true }),
        Animated.timing(opacity, { toValue: 0.3, duration: 800, useNativeDriver: true }),
      ])
    ).start();
  }, []);

  return (
    <Animated.View style={{ opacity }} className="px-6 items-center mt-10">
      <View className="bg-white/10 rounded-xl mb-6" style={{ width: 214, height: 294 }} />
      
      <View className="bg-white/10 w-16 h-16 rounded-full mb-4" />
      <View className="bg-white/10 w-48 h-8 rounded-lg mb-10" />
      
      <View className="bg-white/10 w-full h-4 rounded mb-2" />
      <View className="bg-white/10 w-full h-4 rounded mb-2" />
      <View className="bg-white/10 w-3/4 h-4 rounded" />
    </Animated.View>
  );
}