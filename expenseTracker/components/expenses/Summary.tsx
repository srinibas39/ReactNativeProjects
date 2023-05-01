import { View, Text, StyleSheet, Pressable } from "react-native"
import { FlatList } from "react-native-gesture-handler"

interface SummaryProps {
    expenses: {
        id: number,
        description: string,
        amount: number,
        date: Date
    }[],
}
export const Summary = (props: SummaryProps) => {
    const { expenses } = props;
    const dateFormat = (date: Date) => {
        return `${date.getDate()} - ${date.getMonth() + 1} - ${date.getFullYear()}`
    }
    return <FlatList data={expenses} keyExtractor={(item) => item.id.toString()} renderItem={({ item }) => {
        return <Pressable>
            <View style={styles.itemContainer}>
                <View style={styles.itemContainerDetails}>
                    <Text style={styles.itemDescription}>{item?.description}</Text>
                    <Text style={styles.itemDate}>{dateFormat(item?.date)}</Text>
                </View>
                <View style={styles.itemAmountContainer}>
                    <Text style={styles.itemAmount}>&#x20b9;{item?.amount}</Text>
                </View>
            </View>
        </Pressable>
    }} />
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
    }

})