import { View, ActivityIndicator, StyleSheet, Text } from "react-native";

interface ErrorOverlayProps {
    error: string
}

export const ErrorOverlay = ({ error }: ErrorOverlayProps) => {
    return <View style={styles.loadingOverlay}>
        <Text style={styles.text}>{error}</Text>
    
    </View>
}

const styles = StyleSheet.create({
    loadingOverlay: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1e293b",
    },
    text: {
        color: "#22c55e"
    }
})