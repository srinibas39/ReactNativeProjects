import { ParamListBase, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { View, Text, StyleSheet, Pressable } from "react-native"
import { FlatList } from "react-native-gesture-handler"

interface SummaryProps {
    expenses: {
        id: string,
        description: string,
        amount: number,
        date: Date
    }[],
    fallbackText: string
}

export const Summary = (props: SummaryProps) => {
    const { expenses, fallbackText } = props;


    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

    const dateFormat = (date: Date) => {
        return `${date.getDate()} - ${date.getMonth() + 1} - ${date.getFullYear()}`
    }

    const handlePress = (id: string) => {
        navigation.navigate("Managing Expense", { expenseId: id })
    }


    return <>
        {
            expenses.length ? <FlatList data={expenses} keyExtractor={(item) => item.id} renderItem={({ item }) => {
                return <Pressable onPress={() => handlePress(item?.id)} style={({ pressed }) => pressed && styles.pressed}>
                    <View style={styles.itemContainer}>
                        <View style={styles.itemContainerDetails}>
                            <Text style={styles.itemDescription}>{item?.description}</Text>
                            <Text style={styles.itemDate}>{dateFormat(item?.date)}</Text>
                        </View>
                        <View style={styles.itemAmountContainer}>
                            <Text style={styles.itemAmount}>&#x20b9;{item?.amount}</Text>
                        </View>
                    </View>
                </Pressable >
            }} /> :
                <View style={styles.fallBack}>
                    <Text style={styles.fallBackText}>{fallbackText}</Text>
                </View>
        }



    </>
}

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: "#020617",
        padding: 10,
        marginVertical: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 10,
    },
    itemContainerDetails: {

    },
    itemDescription: {
        fontWeight: "bold",
        fontSize: 16
    },
    itemDate: {

    },
    itemAmountContainer: {
        backgroundColor: "#f1f5f9",
        height: "100%",
        minWidth: 70,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    itemAmount: {
        color: "#020617",
        fontSize: 18,
        fontWeight: "bold"
    },
    pressed: {
        opacity: 0.5
    },
    fallBack: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 16
    },
    fallBackText: {
        color: "#22c55e",
        fontSize: 18
    }


})