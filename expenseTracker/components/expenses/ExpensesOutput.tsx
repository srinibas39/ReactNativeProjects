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
    periodName: string
}



export const ExpensesOutput = (props: ExpensesOutputProps) => {
    const { expenses, periodName } = props
    return <View style={styles.expensesOutputContainer}>
        <Period expenses={expenses} periodName={periodName} />
        <Summary expenses={expenses} />
    </View>
}

const styles = StyleSheet.create({
    expensesOutputContainer: {
        flex: 1,
        marginBottom: 10
    }
})