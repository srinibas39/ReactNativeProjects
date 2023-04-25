import { View, Text } from "react-native";
import { MealList } from "../components/MealList";
import { useFavorite } from "../store/context/favoritesContext";
import { MEALS } from "../data/dummyData";

export const Favoritescreen = () => {
    const { ids } = useFavorite();
    const favoriteMeals = MEALS.filter((meal: any) => ids.includes(meal?.id))
    
    return <MealList mealsData={favoriteMeals}/>
}