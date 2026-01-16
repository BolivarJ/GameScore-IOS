import {
  StyleSheet,
  View,
  Text,
  Image,
  Animated,
  Pressable
} from "react-native";
import { useEffect, useRef } from "react";
import { Score } from "./Score";
import { Link } from "expo-router";
import { styled } from "nativewind"

const PressableStyled = styled(Pressable)

export function GameCard({ game }) {
  return (
    <Link href={`/${game.slug}`} asChild>
      <PressableStyled className="flex-row bg-slate-500/20 p-4 rounded-xl mb-4 border border-transparent active:border-white/50 active:opacity-70 ">
          <Image source={{ uri: game.image }} style={styles.image} />

          <View className={"flex-shrink ml-4"}>
            <View className={`flex-row justify-between items-start`}>
              <Text className={"text-white text-lg font-bold flex-1 mr-2"}>
                {game.title}
              </Text>

              <Score score={game.score} />
            </View>

            <Text
              className={`text-gray-300 text-sm mt-2 leading-5`}
              numberOfLines={3}
            >
              {game.description}
            </Text>
          </View>
      </PressableStyled>
    </Link>
  );
}

export function AnimatedGameCard({ game, index }) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 300,
      delay: index * 100,
      useNativeDriver: true,
    }).start();
  }, [index]);

  return (
    <Animated.View style={{ opacity }}>
      <GameCard game={game} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 90,
    height: 120,
    borderRadius: 8,
  },
});
