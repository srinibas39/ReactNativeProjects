import { View, Text, StyleSheet } from "react-native";
import { ExpensesOutput } from "../components/expenses/ExpensesOutput";
import { useExpense } from "../store/ExpenseContext";
import { useEffect, useState } from "react";
import { get } from "../utils/firebase";
import { LoadingOverlay } from "../components/LoadingOverlay/LoadingOverlay";

export const AllExpense = () => {

    const { expenses, setExpenses } = useExpense();
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        setIsLoading(true)
        const loadExpenses = async () => {
            try {
                const res = await get();
                setExpenses(res)
            }
            catch (error) {
                console.log(error);
            }
        }
        loadExpenses()
        setIsLoading(false)
    }, [])

    if (isLoading) {
        return <LoadingOverlay />
    }

    return <View style={styles.allExpensesContainer}>
        <ExpensesOutput expenses={expenses} periodName={"Total"} fallbackText={"No Expenses Exist!!!"} />
    </View>
}

const styles = StyleSheet.create({
    allExpensesContainer: {
        flex: 1,
        backgroundColor: "#1e293b",
        padding: 16
    }
})