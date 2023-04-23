import { View, Text, StyleSheet } from "react-native"
export const SelectedMeal = ({ items }: any) => {
    return <View>
        {
            items.length && items.map((ingredient: string) => {
                return <View style={styles.mealSteps} key={ingredient}>
                    <Text style={styles.mealStepsText} >{ingredient}</Text>
                </View>
            })
        }
    </View>
}

const styles = StyleSheet.create({
    mealSteps: {
        minheight: 40,
        backgroundColor: "#fbbf24",
        marginVertical: 10,
        justifyContent: "center",
        // alignItems: "center",
        padding:6

    },
    mealStepsText: {
        color: "black",
        fontSize: 19,
        fontWeight: "bold",

    }
})