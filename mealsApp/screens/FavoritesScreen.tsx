import { View, Text } from "react-native";
import { MealList } from "../components/MealList";
import { useFavorite } from "../store/context/favoritesContext";
import { MEALS } from "../data/dummyData";
import { useSelector } from "react-redux";


interface State {
    favoriteMeals: {
        ids: string[]
    }
}

export const Favoritescreen = () => {
    // const { ids } = useFavorite();
    const ids = useSelector((state: State) => state?.favoriteMeals?.ids)
    const favoriteMeals = MEALS.filter((meal: any) => ids.includes(meal?.id))

    return <MealList mealsData={favoriteMeals} />
}