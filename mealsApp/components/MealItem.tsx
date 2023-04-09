import { useNavigation, useRoute } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { View, Text, StyleSheet, Pressable, Image, Platform } from "react-native";
import { CATEGORIES } from "../data/dummyData";
import { MealDetail } from "./MealDetails";

interface MealItemProps {
    title: string,
    imageUrl: string,
    complexity: string,
    affordability: string,
    duration: string,
    id: string
}

export const MealItem = (props: MealItemProps) => {


    const route = useRoute<any>();
    const idx = route.params?.id

    const navigation = useNavigation<any>();

    const { title, imageUrl, complexity, affordability, duration, id } = props

    const handlePress = () => {
        navigation.navigate("mealsDetail", { mealId: id })
    }

    useLayoutEffect(() => {

        const navigationTitle = CATEGORIES.find((category) => category.id === idx)?.title

        navigation.setOptions({ title: navigationTitle })

    }, [idx, navigation])


    return <View style={styles.mealItem}>
        <Pressable
            onPress={handlePress}
            android_ripple={{ color: "#ccc" }}
            style={({ pressed }) => pressed ? [styles.pressable, styles.iosRipple] : styles.pressable}
        >
            <View >
                <View>
                    <Image source={{ uri: imageUrl }} style={styles.image} />
                    <Text style={styles.text}>{title}</Text>
                </View>

                <MealDetail affordability={affordability} complexity={complexity} duration={duration} />

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

})