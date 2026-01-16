import { View, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons"; 

export function FilterGames({ value, onChangeText }) {
  return (
    <View className="px-4 py-2"> 
      <View className="bg-white/10 flex-row items-center px-3 rounded-2xl border border-white/10 h-12">

        <TextInput
          placeholder="Busca tu juego favorito..."
          placeholderTextColor="#666"
          className="text-white flex-1 h-10 font-medium"
          value={value}
          onChangeText={onChangeText}
          autoCorrect={false}
          textAlignVertical="center" 
          underlineColorAndroid="transparent"
        />
        {value.length > 0 && (
          <Ionicons 
            name="close-circle" 
            size={20} 
            color="#999" 
            onPress={() => onChangeText("")} 
          />
        )}
      </View>
    </View>
  );
}