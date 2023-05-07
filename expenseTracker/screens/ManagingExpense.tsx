import { useNavigation, useRoute } from "@react-navigation/native"
import { useLayoutEffect } from "react";
import { View, Text, StyleSheet } from "react-native"
import { IconButton } from "../components/icon/iconButton";
import { Button } from "../components/Button/Button";
import { useExpense } from "../store/ExpenseContext";
import { ExpenseForm } from "../components/expenseForm/expenseForm";
import { useState } from "react";
import { post, remove, update } from "../utils/firebase";
import { LoadingOverlay } from "../components/LoadingOverlay/LoadingOverlay";

export const ManagingExpense = () => {
    const route = useRoute<any>();
    const { expenseId, item } = route.params;
    const expenseIdExist = !!expenseId;
    const navigation = useNavigation<any>()
    const { removeExpense, updateExpense, addExpense } = useExpense();
    const [isLoading, setIsLoading] = useState(false)



    const parsedItem = expenseId && JSON.parse(item)
    // if (expenseId) {

    //    let currentExpense = getExpenses().filter((el: any) => el?.id === expenseId)
    // }


    const [manageForm, setManageForm] = useState({
        amount: {
            value: parsedItem?.amount ? JSON.stringify(parsedItem.amount) : "",
            valid: true
        },
        date: {
            value: parsedItem?.date ? parsedItem.date : "",
            valid: true
        },
        description: {
            value: parsedItem?.description ? parsedItem.description : "",
            valid: true
        }
    })

    const handleText = (label: string, value: string,) => {
        if (label === "Amount") {
            setManageForm((p) => ({
                ...p, amount: {
                    ...p.amount,
                    value: value,
                    valid: true
                }
            }))
        }
        else if (label === "Date") {
            setManageForm((p) => ({
                ...p, date: {
                    ...p.date,
                    value: value,
                    valid: true
                }
            }))
        }
        else {
            setManageForm((p) => ({
                ...p, description: {
                    ...p.description,
                    value: value,
                    valid: true
                }
            }))
        }
    }

    const handleDelete = async () => {
        setIsLoading(true)
        try {
            const res = await remove(expenseId);
            removeExpense(expenseId)
            navigation.goBack()
        }
        catch (error) {
            console.log(error)
        }
        setIsLoading(false)

    }

    const handleCancel = () => {
        navigation.goBack()
    }

    const checkValidity = () => {
        let amountValid = true;
        let dateValid = true;
        let descriptionValid = true;
        // checking amount

        if (!manageForm.amount.value.trim()) {
            amountValid = false
            // setManageForm({ ...manageForm, amount: { ...manageForm.amount, valid: false } })
        }
        // hecking date
        if (!manageForm.description.value.trim()) {
            // setManageForm({ ...manageForm, description: { ...manageForm.description, valid: false } })
            descriptionValid = false
        }
        // }
        if (!manageForm.date.value.trim()) {
            // setManageForm({ ...manageForm, description: { ...manageForm.description, valid: false } })
            dateValid = false
        }
        // }
        setManageForm({
            ...manageForm,
            date: { ...manageForm.date, valid: dateValid },
            amount: { ...manageForm.amount, valid: amountValid },
            description: { ...manageForm.description, valid: descriptionValid },
        })

        if (amountValid && dateValid && descriptionValid) {
            return true
        }
        else {
            return false;
        }

    }

    const handleUpdate = async () => {
        setIsLoading(true)
        let isValid = checkValidity();

        if (isValid) {

            const expenses = {
                description: manageForm.description.value,
                amount: parseFloat(manageForm.amount.value),
                date: new Date(manageForm.date.value)
            }

            try {
                const res = await update(expenseId, expenses)
                updateExpense(expenseId, {
                    ...expenses,
                    id: expenseId
                })
                navigation.goBack()
            }
            catch (error) {
                console.log(error)
            }

        }
        setIsLoading(false)
    }

    const handleNew = async () => {
        setIsLoading(true)
        let isValid = checkValidity();
        if (isValid) {
            const expenses = {
                description: manageForm.description.value,
                amount: parseFloat(manageForm.amount.value),
                date: new Date(manageForm.date.value)
            }
            try {
                const id = await post(expenses)
                addExpense({ ...expenses, id })
                navigation.goBack()
            }
            catch (error) {
                console.log(error)
            }

        }
        setIsLoading(false)
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            title: expenseIdExist ? "Update Expense" : "New Expense"
        })
    }, [])


    if (isLoading) {
        return <LoadingOverlay />
    }

    return <View style={styles.allExpensesContainer}>
        <ExpenseForm handleText={handleText} manageForm={manageForm} />
        <View>

            <View style={styles.buttons}>
                <Button type="flat" onPress={handleCancel}>cancel</Button>
                {
                    expenseId ? <Button onPress={handleUpdate}>Update</Button> :
                        <Button onPress={handleNew}>New</Button>
                }
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