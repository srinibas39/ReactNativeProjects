import { View, Text, TextInput, StyleSheet } from "react-native";

interface InputProps {
    label: string,
    inputConfiguration: {
        [key: string]: unknown
    },
    onChangeText: (label: string, value: string,) => void,
    errorStyle: any,
    value:string
}

export const Input = (props: InputProps) => {
    const { label, inputConfiguration, onChangeText, errorStyle,value } = props;
    const textStyle = [];
    textStyle.push(styles.textInput)
    if (inputConfiguration && inputConfiguration.multiline) {
        textStyle.push(styles.textInputMultiline)
    }


    return <View style={styles.InputContainer}>
        <Text style={styles.label}>{label}</Text>
        <TextInput {...inputConfiguration} value={value} style={[textStyle, errorStyle]} onChangeText={(text) => onChangeText(label, text)} />
    </View>

}

const styles = StyleSheet.create({
    InputContainer: {
        flex: 1,
        margin: 10

    },
    label: {
        fontSize: 16,
        color: "#22c55e",
        textAlign: "center"
    },
    textInput: {
        backgroundColor: "#475569",
        marginVertical: 10,
        padding: 10,
        color: "#22c55e",
    },
    textInputMultiline: {
        minHeight: 100,
        textAlignVertical: "top"
    }

});
