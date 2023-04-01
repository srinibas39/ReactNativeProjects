import { View, Text, StyleSheet } from "react-native";

interface GuessNumberProps {
    no: number
}

export const GuessNumber = ({ no }: GuessNumberProps) => {
    return <View style={styles.guessNumberContainer}>
        <Text style={styles.number}>{no}</Text>
    </View>
}

const styles = StyleSheet.create({
    guessNumberContainer: {
        padding: 16,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 2,
        margin: 16,
        borderColor: "#fff"
    },
    number: {
        fontSize: 32,
    }

})