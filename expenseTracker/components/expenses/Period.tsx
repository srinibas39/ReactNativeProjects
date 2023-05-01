import { View, Text, StyleSheet } from "react-native";

interface PeriodProps {
    expenses: {
        id: number,
        description: string,
        amount: number,
        date: Date
    }[],
    periodName: string
}

export const Period = (props: PeriodProps) => {

    const { expenses, periodName } = props

    const calculateSum = () => {
        return expenses.reduce((sum, expense) => sum + expense?.amount, 0)
    }

    return <View style={styles.periodContainer}>
        <Text style={styles.periodDuration}>{periodName}</Text>
        <Text style={styles.periodPrice}>{'\u20B9'}{calculateSum()}</Text>
    </View>
}


const styles = StyleSheet.create({
    periodContainer: {
        backgroundColor: "#64748b",
        paddingHorizontal: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 50,
        borderRadius: 6
    },
    periodDuration: {
        color: "#020617"
    },
    periodPrice: {
        color: "#020617",
        fontSize: 20,
        fontWeight: "bold"
    }
})