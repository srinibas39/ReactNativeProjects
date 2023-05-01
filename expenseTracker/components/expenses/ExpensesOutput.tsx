import { View, Text } from "react-native";
import { Period } from "./Period";
import { Summary } from "./Summary";

interface ExpensesOutputProps {
    periodName: string
}
const dummyExpenses = [
    {
        id: 0,
        description: "hello banana",
        amount: 20,
        date: new Date('2023-12-01')
    },
    {
        id: 1,
        description: "hello Apple",
        amount: 30,
        date: new Date('2023-12-02')
    },
    {
        id: 2,
        description: "hello grapes",
        amount: 40,
        date: new Date('2023-11-01')
    },
    {
        id: 4,
        description: "hello orange",
        amount: 50,
        date: new Date('2023-6-01')
    },
    {
        id: 5,
        description: "hello kiwi",
        amount: 60,
        date: new Date('2023-5-08')
    },

]


export const ExpensesOutput = (props: ExpensesOutputProps) => {
    const { periodName } = props
    return <View>
        <Period expenses={dummyExpenses} periodName={periodName} />
        <Summary expenses={dummyExpenses} />
    </View>
}