import { useRoute } from "@react-navigation/native"
import { View, Text, StyleSheet, FlatList } from "react-native"
import { MEALS } from "../data/dummyData";
import { MealItem } from "../components/MealItem";
import { MealList } from "../components/MealList";



export const MealsScreen = () => {



    const route = useRoute<any>();
    const idx = route.params?.id

    const mealsData = MEALS.filter((meal) => meal?.categoryIds.indexOf(idx) >= 0)

    return <MealList mealsData={mealsData} />


}

const styles = StyleSheet.create({
    mealContainer: {
        flex: 1,
        padding: 16
    }
})