import { useNavigation, useRoute } from "@react-navigation/native"
import { useLayoutEffect } from "react";
import { View, Text, StyleSheet } from "react-native"
import { IconButton } from "../components/icon/iconButton";
import { Button } from "../components/Button/Button";

export const ManagingExpense = () => {
    const route = useRoute<any>();
    const { expenseId } = route.params;
    const expenseIdExist = !!expenseId;
    const navigation = useNavigation<any>()

    const handleDelete = () => {
        navigation.goBack()
    }

    const handleCancel = () => {
        navigation.goBack()
    }

    const handleUpdate = () => {
        navigation.goBack()
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            title: expenseIdExist ? "Update Expense" : "New Expense"
        })
    }, [])

    return <View style={styles.allExpensesContainer}>
        <View>

            <View style={styles.buttons}>
                <Button type="flat" onPress={handleCancel}>cancel</Button>
                <Button onPress={handleUpdate}>Update</Button>
            </View>

            <View style={styles.iconButton}>
                <IconButton name="trash" size={30} color={"#ef4444"} onPress={handleDelete} />
            </View>
        </View>
    </View>
}

const styles = StyleSheet.create({
    allExpensesContainer: {
        flex: 1,
        backgroundColor: "#1e293b",
        padding: 16
    },
    buttons: {
        marginHorizontal: 10,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    iconButton: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        borderWidth: 2,
        borderTopColor: "#22c55e",
        borderBottomColor: "#1e293b",
        borderLeftColor: "#1e293b",
        borderRightColor: "#1e293b"
    }
})