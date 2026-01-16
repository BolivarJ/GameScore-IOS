import { Stack, useLocalSearchParams } from "expo-router";
import { Image, ScrollView, Text, View } from "react-native";
import { Screen } from "../components/Screen";
import { useEffect, useState } from "react";
import { getGameDetails } from "../lib/metacritic";
import { Score } from "../components/Score";
import { DetailSkeleton } from "../components/DetailSkeleton";

export default function Detail() {
  const { id } = useLocalSearchParams();
  const [gameInfo, setGameinfo] = useState(null);

  useEffect(() => {
    if (id) {
      getGameDetails(id).then(setGameinfo);
    }
  }, [id]);

  return (
    <Screen>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#ffee00" },
          headerTintColor: "black",
          headerTitle: () => (
            <Text className="text-black font-extrabold text-base uppercase tracking-tight">
              {gameInfo?.title || " "}
            </Text>
          ),
          headerRight: () => null,
        }}
      />

      <View className="flex-1 bg-black">
        {gameInfo === null ? (
          <DetailSkeleton />
        ) : (
          <ScrollView >
            <View className="px-6 pt-8 items-center">
              <View className="mb-8 border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  source={{ uri: gameInfo.image }}
                  style={{ width: 240, height: 320 }}
                />
              </View>

              <View className="items-center mb-8">
                <Text className="text-white text-center font-black text-4xl mt-4 tracking-tighter leading-none">
                  {gameInfo.title}
                </Text>
              </View>

              <View className="flex-row items-center w-full mb-6">
                <View className="flex-1 h-[1px] bg-white/10" />
                <View className="mx-4 bg-white/5 px-4 py-1.5 rounded-full border border-white/10">
                  <Text className="text-yellow-400 text-[10px] font-black uppercase tracking-[2px]">
                    Resumen del Juego
                  </Text>
                </View>
                <View className="flex-1 h-[1px] bg-white/10" />
              </View>

              <View className="border-l-4 border-yellow-400 pl-4 py-2 mb-12">
                <Text className="text-white/90 leading-7 text-lg font-medium italic">
                  {gameInfo.descriptionTwo}
                </Text>
              </View>
            </View>
          </ScrollView>
        )}
      </View>
    </Screen>
  );
}
