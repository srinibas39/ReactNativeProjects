import { View, Text, TextInput, StyleSheet } from "react-native";

interface InputProps {
    label: string,
    inputConfiguration: {
        [key: string]: unknown
    }
}


export const Input = (props: InputProps) => {
    const { label, inputConfiguration } = props;
    const textStyle = [];
    textStyle.push(styles.textInput);
    if (inputConfiguration && inputConfiguration.multiline) {
        textStyle.push(styles.textInputMultiline)
    }


    return <View style={styles.InputContainer}>
        <Text style={styles.label}>{label}</Text>
        <TextInput {...inputConfiguration} style={textStyle} />
    </View>

}

const styles = StyleSheet.create({
    InputContainer: {

    },
    label: {
        fontSize: 16,
        color: "#e2e8f0"
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
