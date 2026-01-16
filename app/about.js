import { Logo } from "../components/Logo";
import { Link, Stack } from "expo-router";
import { ScrollView, Text, View, Pressable } from "react-native";
import { Screen } from "../components/Screen";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";


const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

export default function about() {
  const insets = useSafeAreaInsets();

  return (
    <Screen>
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
              </View>
            </View>
          ),
        }}
      />
      <ScrollView className="pt-4">
        <View className="px-6 pb-10">
          <Text className="text-white font-bold mb-4 text-3xl">
            Sobre el Proyecto
          </Text>

          <Text className="text-gray-300 text-lg leading-6 mb-6">
            ¡Hola! Soy Jhorman Bolivar y esta es mi primera aplicacion móvil desarrollada con
          <Text className="text-yellow-400 font-bold"> React Native</Text> y
          <Text className="text-yellow-400 font-bold"> Expo</Text>
          </Text>

          <View className="bg-white/5 p-4 rounded-2xl mb-8 border border-white/10">
            <Text className="text-white text-base leading-6 italic">
              "Decidí crear esta app para explorar el desarrollo mobile, 
               diseñé mi propia estructura de datos en JSON para visualizar algunos
               videojuegos, lo que supuso un reto increíble para dominar la navegación entre 
               pantallas, la optimización de listas y el diseño responsivo con NativeWind."
            </Text>
          </View>

          <Text className="text-white font-bold mb-4 text-xl">Tech Stack</Text>
          <View className="flex-row flex-wrap mb-8">
            {["React Native", "Expo Router", "NativeWind", "Lucide Icons"].map((tech) => (
              <View key={tech} className="bg-yellow-400/10 border border-yellow-400/20 px-3 py-1 rounded-full mr-2 mb-2">
                <Text className="text-yellow-400 text-sm font-bold">{tech}</Text>
              </View>
            ))}
          </View>

          <Text className="text-white font-bold mb-4 text-xl">¿Hablamos?</Text>
          <View className="gap-y-3">
            <Link href="https://github.com/BolivarJ" asChild>
              <Pressable className="bg-white/10 flex-row items-center p-4 rounded-xl active:bg-white/20">
                <FontAwesome name="github" size={24} color="white" />
                <Text className="text-white ml-4 font-semibold">Ver mi GitHub</Text>
              </Pressable>
            </Link>

            <Link href="https://www.linkedin.com/in/jhorman-bolívar-cañaveral-1578a4277/" asChild>
              <Pressable className="bg-blue-600/20 flex-row items-center p-4 rounded-xl active:bg-blue-600/30">
                <FontAwesome name="linkedin" size={24} color="#0077B5" />
                <Text className="text-white ml-4 font-semibold">Conectar en LinkedIn</Text>
              </Pressable>
            </Link>
          </View>

          <Text className="text-gray-500 text-center mt-10 text-xs">
            Versión 1.0.0 • Hecho por 
            <Text className="text-yellow-400 font-bold"> Jhorman</Text>
          </Text>
        </View>
      </ScrollView>
    </Screen>
  );
}
