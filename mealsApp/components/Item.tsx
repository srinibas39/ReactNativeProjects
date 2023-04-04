import { Pressable, View, Text, StyleSheet } from "react-native"


interface ItemProps {
    title: string,
    color: string,
    onPress: () => void
}




export const Item = ({ title, color, onPress }: ItemProps) => {

  
    return <View style={[styles.itemContainer, { backgroundColor: color }]}>
        <Pressable style={styles.button} android_ripple={{ color: "#fff" }} onPress={onPress}>
            <View style={styles.innerContainer} >
                <Text style={styles.font}>{title}</Text>
            </View>
        </Pressable>
    </View>
}

const styles = StyleSheet.create({
    itemContainer: {
        height: 150,
        width: 150,
        margin: 10,
        // backgroundColor: "#fff",
        borderRadius: 8,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        elevation: 1,
        shadowColor: "#ccc",
        shadowOffset: { height: 0, width: 2 },
        shadowRadius: 5,
        shadowOpacity: 0.25,
        overflow: "hidden",

    },
    button: {
        flex: 1,
    },
    innerContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    iosRipple: {
        color: "#ccc"
    },
    font: {
        fontSize: 18,
        fontWeight: "bold",
        color: "black"
    }

})