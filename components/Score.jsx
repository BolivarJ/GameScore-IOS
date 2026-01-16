import { View, Text } from "react-native";

export function Score({ score }) {
  const getScoreColor = (score) => {
    if (score >= 90) return 'bg-green-500';
    if (score >= 80) return 'bg-yellow-500';
    return 'bg-red-500';
  };

    return (
        <View className={`${getScoreColor(score)} w-10 h-10 rounded-lg items-center justify-center`}>
            <Text className={`text-white font-bold text-lg`}>
                {score}
            </Text>
        </View>
    );
}

