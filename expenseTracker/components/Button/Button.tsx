import { View, Text, Pressable, StyleSheet } from "react-native";

interface buttonProps {
    children: string,
    type?: string,
    onPress: () => void
}

export const Button = ({ children, type, onPress }: buttonProps) => {
    return <View style={styles.buttonContainer}>
        <Pressable style={({ pressed }) => pressed && styles.pressed}>
            <View style={[styles.button, type === "flat" && styles.flat]}>
                <Text style={styles.buttonText}>{children}</Text>
            </View>
        </Pressable>
    </View>
}

const styles = StyleSheet.create({
    buttonContainer: {
        margin: 10,
    },
    pressed: {
        opacity: 0.5
    },
    button: {
        backgroundColor: "#020617",
        width: 100,
        padding: 10,
        borderRadius: 6,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    buttonText: {
        color: "#22c55e"
    },
    flat: {
        backgroundColor: "transparent"
    },
    flatText: {

    }

})