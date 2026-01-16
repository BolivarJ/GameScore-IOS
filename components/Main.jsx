import { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, FlatList, Pressable } from "react-native";
import { getLatestGames } from "../lib/metacritic";
import { AnimatedGameCard } from "./GameCard";
import { Screen } from "./Screen";
import { Link, Stack } from "expo-router";
import { Logo } from "../components/Logo";
import { InfoIcon } from "../components/Icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FilterGames } from "../components/FilterGames"

export function Main() {
  const [games, setGames] = useState([]);

  const [searchQuery, setSearchQuery] = useState("");

  const insets = useSafeAreaInsets();
  

  useEffect(() => {
    getLatestGames().then((data) => setGames(data));
  }, []);

  const filteredGames = games.filter((game)=>
    game.title.toLowerCase().includes(searchQuery.toLowerCase()) 
  );

  return (
    <Screen className="flex-1 bg-black">
      <Stack.Screen
        options={{
          headerLeft: () => null,
          header: () => (
            <View 
              style={{ paddingTop: insets.top }} 
              className="bg-black"
            >
              <View className="flex-row items-center justify-between px-4 h-14">
                <Logo />
                <Link href="/about" asChild>
                  <Pressable className="active:opacity-50">
                    <InfoIcon />
                  </Pressable>
                </Link>
              </View>
            </View>
          ),
        }}
      />
      {games.length === 0 ? (
        <ActivityIndicator color="#fff" size={"large"} />
      ) : (
        <FlatList
          data={filteredGames}
          keyExtractor={(game) => game.slug}
          renderItem={({ item, index }) => (
            <AnimatedGameCard game={item} index={index} />
          )}
          ListHeaderComponent={ 
            <View className="mb-4"> 
               <FilterGames
                value={searchQuery}
                onChangeText={(text) => setSearchQuery(text)}
              />
            </View>
          }
          ListEmptyComponent={
            <View className="flex-1 justify-center items-center mt-20">
              <Text className="text-white/50 text-lg">
                No se encontraron juegos con "{searchQuery}"
              </Text>
            </View>
          }
          stickyHeaderIndices={[]}
          initialNumToRender={5}
          contentContainerStyle={{ 
            paddingBottom: 10,
            paddingTop: 10, 
          }}
        />
      )}
    </Screen>
  );
}
