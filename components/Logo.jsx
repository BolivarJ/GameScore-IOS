import { View, Image, StyleSheet } from "react-native";

export const Logo = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/logito.png")}
        style={styles.logoImage}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 250, 
    height: 40,
    justifyContent: "center",
    alignItems: "flex-start", 
  },
  logoImage: {
    width: "100%",
    height: "100%",
    transform: [{ scale: 2.0 }], 
  },
});
