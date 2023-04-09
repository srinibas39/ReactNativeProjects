import { View, Text, StyleSheet } from "react-native";

interface MealDetailProps {
    complexity: string,
    duration: string,
    affordability: string
}

export const MealDetail = (props: MealDetailProps) => {

    const { complexity, duration, affordability } = props

    return <View style={styles.details}>
        <Text style={styles.detailText}>{complexity.toUpperCase()}</Text>
        <Text style={styles.detailText}>{duration}min</Text>
        <Text style={styles.detailText}>{affordability.toUpperCase()}</Text>
    </View>
}

const styles = StyleSheet.create({
    details: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",

    },
    detailText: {
        color: "white",
        marginHorizontal: 4
    }
})