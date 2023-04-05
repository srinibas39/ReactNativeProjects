import { View, Text, StyleSheet, Pressable, Image, Platform } from "react-native";

interface MealItemProps {
    title: string,
    imageUrl: string,
    complexity: string,
    affordability: string,
    duration: string
}

export const MealItem = (props: MealItemProps) => {

    const { title, imageUrl, complexity, affordability, duration } = props

    console.log(imageUrl);


    return <View style={styles.mealItem}>
        <Pressable android_ripple={{ color: "#ccc" }} style={({ pressed }) => pressed ? [styles.pressable, styles.iosRipple] : styles.pressable}>
            <View >
                <View>
                    <Image source={{ uri: imageUrl }} style={styles.image} />
                    <Text style={styles.text}>{title}</Text>
                </View>
                <View style={styles.details}>
                    <Text style={styles.detailText}>{complexity.toUpperCase()}</Text>
                    <Text style={styles.detailText}>{duration}min</Text>
                    <Text style={styles.detailText}>{affordability.toUpperCase()}</Text>
                </View>

            </View>
        </Pressable>

    </View>
}

const styles = StyleSheet.create({

    mealItem: {
        flex: 1,
        margin: 16,
        elevation: 4,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        shadowOpacity: 0.35,
        borderWidth: 2,
        borderColor: "ccc",
        borderRadius: 8,
        overflow: Platform.OS === "android" ? "hidden" : "visible"

    },
    pressable: {
        flex: 1,
        padding: 16,
    },
    iosRipple: {
        flex: 1,
        overflow: "hidden",
        opacity: 0.2,

    },

    text: {
        color: "white",
        fontSize: 16,
        textAlign: "center",
        marginVertical: 8,
    }
    ,
    image: {
        height: 200,
        width: "100%"
    },
    details: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",

    },
    detailText: {
        color: "white",
        marginHorizontal: 4
    }
})