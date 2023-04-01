import { View, Text, StyleSheet, Pressable } from "react-native"

interface PrimaryButtonProps {
    children: string,
    onPress: () => void,
}

export const PrimaryButton = ({ children, onPress }: PrimaryButtonProps) => {

    return <View style={styles.buttonContainer}>
        <Pressable onPress={onPress} android_ripple={{ color: "gray" }}  >
            <View style={styles.pressStyle}>
                <Text style={styles.buttonText}>{children}</Text>
            </View>
        </Pressable>
    </View>
}

const styles = StyleSheet.create({
    buttonContainer: {
        margin: 10,
        textAlign: "center",
        backgroundColor: "lightgray",
        overflow: "hidden"
    },
    buttonText: {
        fontSize: 20,
        color: "red",
        textAlign:"center"
    },
    pressStyle: {
        padding: 10
    }

})