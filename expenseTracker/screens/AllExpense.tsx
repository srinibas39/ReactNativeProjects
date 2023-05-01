import { View, Text, StyleSheet } from "react-native";
import { ExpensesOutput } from "../components/expenses/ExpensesOutput";
import { useExpense } from "../store/ExpenseContext";

export const AllExpense = () => {

    const { expenses } = useExpense();

    return <View style={styles.allExpensesContainer}>
        <ExpensesOutput expenses={expenses} periodName={"Total"} />
    </View>
}

const styles = StyleSheet.create({
    allExpensesContainer: {
        flex: 1,
        backgroundColor: "#1e293b",
        padding: 16
    }
})