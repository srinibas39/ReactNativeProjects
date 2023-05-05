import { View, Text, StyleSheet } from "react-native";
import { Input } from "./Input";

export const ExpenseForm = () => {
    return <View style={styles.expenseFormContainer}>

        <View style={styles.form}>
            <Input label={"Amount"} inputConfiguration={
                { keyboardType: "decimal-pad" }
            } />
            <Input label={"Date"} inputConfiguration={
                {
                    placeholder: "YYYY-MM-DD",
                    maxLength: 10
                }
            } />
        </View>
        <View style={styles.form}>
            <Input label={"Description"} inputConfiguration={
                {
                    autoCorrect: false,
                    autoCapitalize: "none",
                    multiline: true,
                }
            } />

        </View>
    </View>
}

const styles = StyleSheet.create({
    expenseFormContainer: {
        // backgroundColor:"red",
    },
    form: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    description: {

    }
})