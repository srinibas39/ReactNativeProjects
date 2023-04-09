import { useRoute } from "@react-navigation/native";
import { View, Text, Image, FlatList } from "react-native";
import { MEALS } from "../data/dummyData";
import { MealDetail } from "../components/MealDetails";



export const MealsDetailScreen = () => {
    const route = useRoute<any>();

    const mealId = route.params.mealId;

    const selectedMeal = MEALS.find((meal) => meal.id === mealId)

    return <View>
        <Image source={{ uri: selectedMeal?.imageUrl }} />
        <Text>{selectedMeal?.title}</Text>

        <MealDetail
            affordability={selectedMeal?.affordability}
            complexity={selectedMeal?.complexity}
            duration={selectedMeal?.duration} />

        {
            selectedMeal?.ingredients.map((ingredient: string) => {
                return <Text key={ingredient}>{ingredient}</Text>
            })
        }

        {
            selectedMeal?.steps.map((step: string) => {
                return <Text key={step}>{step}</Text>
            })
        }




    </View>
}