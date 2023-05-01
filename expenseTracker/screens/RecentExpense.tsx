import { View, Text, StyleSheet } from "react-native";
import { ExpensesOutput } from "../components/expenses/ExpensesOutput";

export const RecentExpense = () => {
    return <View style={styles.allExpensesContainer}>
        <ExpensesOutput periodName={"Total"} />
    </View>
}

const styles = StyleSheet.create({
    allExpensesContainer: {
        flex: 1,
        backgroundColor: "#1e293b",
        padding: 16
    }
})