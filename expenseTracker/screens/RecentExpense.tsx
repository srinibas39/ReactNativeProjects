import { View, Text, StyleSheet } from "react-native";
import { ExpensesOutput } from "../components/expenses/ExpensesOutput";
import { useExpense } from "../store/ExpenseContext";

export const RecentExpense = () => {

    const { expenses } = useExpense()

    const calculateRecent7Days = (date: Date, days: number) => {
        return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days)
    }

    const calculateRecentExpenses = expenses.filter((expense) => {
        const today = new Date();
        const recent7Days = calculateRecent7Days(today, 7)

        return expense.date > recent7Days;
    })

    return <View style={styles.allExpensesContainer}>
        <ExpensesOutput expenses={calculateRecentExpenses} periodName={"Total"} fallbackText={"No Recent Expenses Exist!!!"} />
    </View>
}

const styles = StyleSheet.create({
    allExpensesContainer: {
        flex: 1,
        backgroundColor: "#1e293b",
        padding: 16
    }
})