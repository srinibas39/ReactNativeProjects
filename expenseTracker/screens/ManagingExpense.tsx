import { useNavigation, useRoute } from "@react-navigation/native"
import { useLayoutEffect } from "react";
import { View, Text, StyleSheet } from "react-native"

export const ManagingExpense = () => {
    const route = useRoute<any>();
    const { expenseId } = route.params;
    const expenseIdExist = !!expenseId;
    const navigation = useNavigation<any>()

    useLayoutEffect(() => {
        navigation.setOptions({
            title: expenseIdExist ? "Update Expense" : "New Expense"
        })
    }, [navigation, expenseId])

    return <View style={styles.allExpensesContainer}>
        <Text>Managing Expense</Text>
    </View>
}

const styles = StyleSheet.create({
    allExpensesContainer: {
        flex: 1,
        backgroundColor: "#1e293b",
        padding: 16
    }
})