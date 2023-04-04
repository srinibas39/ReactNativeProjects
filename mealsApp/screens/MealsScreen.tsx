import { useRoute } from "@react-navigation/native"
import { View, Text, StyleSheet, FlatList } from "react-native"
import { MEALS } from "../data/dummyData";
import { MealItem } from "../components/MealItem";



export const MealsScreen = () => {



    const route = useRoute<any>();
    const idx = route.params?.id

    const mealsData = MEALS.filter((meal) => meal?.categoryIds.indexOf(idx) >= 0)


    const getMealItem = (itemObj: any) => {
        const item = itemObj.item;
        const mealItemProps = {
            title: item.title,
            imageUrl: item.imageUrl,
            complexity: item.complexity,
            affordability: item.affordability,
            duration: item.duration

        }
        return <MealItem {...mealItemProps} />
    }



    return <View style={styles.mealContainer}>
        <FlatList data={mealsData} keyExtractor={(item) => item.id} renderItem={getMealItem} />
    </View>
}

const styles = StyleSheet.create({
    mealContainer: {
        flex: 1,
        padding: 16
    }
})
