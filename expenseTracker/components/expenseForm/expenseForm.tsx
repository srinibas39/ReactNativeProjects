import { View, Text, StyleSheet } from "react-native";
import { Input } from "./Input";
import { useState } from "react";


interface ExpenseFormProps {
    handleText: (label: string, value: string,) => void,
    manageForm: any
}

export const ExpenseForm = (props: ExpenseFormProps) => {
    const { handleText, manageForm } = props




    return <View style={styles.expenseFormContainer}>

        <View style={styles.form}>
            <Input
                label={"Amount"}
                inputConfiguration={{ keyboardType: "decimal-pad" }}
                onChangeText={handleText}
                errorStyle={!manageForm.amount.valid ? { backgroundColor: "#fca5a5" } : {}}
                value={manageForm.amount.value}
            />
            <Input
                label={"Date"}
                inputConfiguration={{
                    placeholder: "YYYY-MM-DD",
                    maxLength: 10
                }}
                onChangeText={handleText}
                errorStyle={!manageForm.date.valid ? { backgroundColor: "#fca5a5" } : {}}
                value={manageForm.date.value}
            />
        </View>
        <View style={styles.form}>
            <Input
                label={"Description"}
                inputConfiguration={{
                    autoCorrect: false,
                    autoCapitalize: "none",
                    multiline: true,
                }}
                onChangeText={handleText}
                errorStyle={!manageForm.description.valid ? { backgroundColor: "#fca5a5" } : {}}
                value={manageForm.description.value}
            />

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