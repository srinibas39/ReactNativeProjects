import { View, Text } from "react-native";
import { Input } from "./Input";

export const ExpenseForm = () => {
    return <View>
        <Input label={"Amount"} inputConfiguration={
            { keyboardType: "decimal-pad" }
        } />
        <Input label={"Date"} inputConfiguration={
            {
                placeholder: "YYYY-MM-DD",
                maxLength: 10
            }
        } />
        <Input label={"Description"} inputConfiguration={
            {
                autoCorrect: false,
                autoCapitalize: false,
                multiline: true,
            }
        } />
    </View>
}