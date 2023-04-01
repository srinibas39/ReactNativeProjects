import { StyleSheet, Text } from "react-native";

interface TitleProps {
    children: string
}

export const Title = ({ children }: TitleProps) => {
    return <Text style={styles.titleStyle}>{children}</Text>
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 32,
        color: "#ffffff",
        textAlign:"center",
        padding:10,
        borderWidth:2,
        margin:16,
        borderColor:"#ffffff"
    }
})