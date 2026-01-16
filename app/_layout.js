import { Stack } from "expo-router";
import { View,  } from "react-native";
import { StatusBar } from "expo-status-bar";


export default function Layout() {
    
  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "black" },
          contentStyle: { backgroundColor: "black" },
          headerTitleAlign: "center",
          animation: "fade",
          headerBackVisible: false,
        }}
      />
    </View>
  );
}