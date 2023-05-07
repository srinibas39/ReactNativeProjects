import { View, ActivityIndicator, StyleSheet } from "react-native";

export const LoadingOverlay = () => {
    return <View style={styles.loadingOverlay}>
        <ActivityIndicator size="large" color={"#22c55e"} />
    </View>
}

const styles = StyleSheet.create({
    loadingOverlay: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1e293b",
    }
})