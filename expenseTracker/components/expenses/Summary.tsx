import { View, Text } from "react-native"
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
    return <FlatList data={expenses} keyExtractor={(item) => item.id.toString()} renderItem={({ item }) => {
        return <View>
            <Text>{item?.description}</Text>
        </View>
    }} />
}   