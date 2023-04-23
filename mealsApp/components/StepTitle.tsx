import { View, Text, StyleSheet } from "react-native"

interface StepTitleProps {
    children: string
}

export const StepTitle = ({ children }: StepTitleProps) => {
    return <View style={styles.stepTitle}>
        <Text style={styles.stepText}>{children}</Text>
    </View>
}

const styles = StyleSheet.create({
    stepTitle: {
        marginVertical: 10,
        height: 40,
        // backgroundColor:"#fbbf24",
        borderBottomWidth: 2,
        borderBottomColor: "#fbbf24"

    },
    stepText: {
        color: "#fbbf24",
        fontSize: 20,
        textAlign: "center",
    }
})