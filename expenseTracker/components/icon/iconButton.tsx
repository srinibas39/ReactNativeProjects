import { View, Pressable, StyleSheet, StyleProp, ViewStyle } from "react-native"
import Icon from "react-native-vector-icons/Ionicons"

interface IconButtonProps {
    name: string,
    color: string,
    size: number,
    onPress: () => void,
    style?: StyleProp<ViewStyle>;

}
export const IconButton = ({ name, color, size, onPress, style }: IconButtonProps) => {
    return <Pressable onPress={onPress} style={({ pressed }) => pressed && styles.pressed}>
        <View style={[styles.iconContainer, style]}>
            <Icon name={name} color={color} size={size} />
        </View>
    </Pressable>

}

const styles = StyleSheet.create({
    iconContainer: {

    },
    pressed: {
        opacity: 0.5
    }
})