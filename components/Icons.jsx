import Feather from "@expo/vector-icons/Feather";
import { Pressable } from "react-native";
import { styled } from "nativewind";

export const StyledPressable = styled(Pressable);

export const HomeIcon = () => ( 
    <Feather name="home" size={24} color="white"/>
)

export const InfoIcon = () => ( 
    <Feather name="info" size={24} color="white" />
)

