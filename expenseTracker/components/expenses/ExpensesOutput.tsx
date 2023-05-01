import { View, Text, StyleSheet } from "react-native";
import { Period } from "./Period";
import { Summary } from "./Summary";

interface ExpensesOutputProps {
    expenses: {
        id: string,
        description: string,
        amount: number,
        date: Date
    }[],
    periodName: string,
    fallbackText: string
}



export const ExpensesOutput = (props: ExpensesOutputProps) => {
    const { expenses, periodName, fallbackText } = props
    return <View style={styles.expensesOutputContainer}>
        <Period expenses={expenses} periodName={periodName} />
        <Summary expenses={expenses} fallbackText={fallbackText} />
    </View>
}

const styles = StyleSheet.create({
    expensesOutputContainer: {
        flex: 1,
        marginBottom: 10
    }
})