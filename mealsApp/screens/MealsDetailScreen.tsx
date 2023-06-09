import { useNavigation, useRoute } from "@react-navigation/native";
import { View, Text, Image, FlatList, StyleSheet, Button } from "react-native";
import { MEALS } from "../data/dummyData";
import { MealDetail } from "../components/MealDetails";
import { StepTitle } from "../components/StepTitle";
import { ScrollView } from "react-native-gesture-handler";
import { SelectedMeal } from "../components/SelectedMeal";
import { useLayoutEffect } from "react";
import { useFavorite } from "../store/context/favoritesContext";
import { useDispatch, useSelector } from "react-redux";
import { addFavorites, removeFavorites } from "../store/redux/favorites";


// interface FavoriteContextType {
//     ids: string[];
//     updateFavorites: (id: string) => void;
//     removeFavorites: (id: string) => void;
//   }


interface stateType {
    favoriteMeals: {
        ids: string[]
    }
}


export const MealsDetailScreen = () => {
    const route = useRoute<any>();
    const navigation = useNavigation<any>();


    // context
    // const { ids, updateFavorites, removeFavorites } = useFavorite();
    // redux
    const mealids = useSelector((state: stateType) => state?.favoriteMeals?.ids);

    const dispatch = useDispatch();


    const mealId = route.params.mealId;

    const selectedMeal = MEALS.find((meal) => meal.id === mealId)

    // const checkFavorites = ids.includes(mealId);
    const checkFavorites = mealids.includes(mealId)

    const handleButton = (type: string) => {
        if (type === "remove") {
            //  removeFavorites(mealId)
            dispatch(removeFavorites({ id: mealId }))
        }
        else {
            // updateFavorites(mealId)
            dispatch(addFavorites({ id: mealId }))
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return checkFavorites ? (
                    <Button title="ADDED" onPress={() => handleButton("remove")} />
                ) : (
                    <Button title="FAVORITES" onPress={() => handleButton("add")} />
                );
            },
        });
    }, [checkFavorites]);


    return <ScrollView style={styles.mealDetail}>
        <Image source={{ uri: selectedMeal?.imageUrl }} style={styles.image} />
        <Text style={styles.title}>{selectedMeal?.title}</Text>

        <MealDetail
            affordability={selectedMeal?.affordability}
            complexity={selectedMeal?.complexity}
            duration={selectedMeal?.duration} />

        <StepTitle>Ingredients</StepTitle>

        <SelectedMeal items={selectedMeal?.ingredients} />

        <StepTitle>Steps</StepTitle>

        <SelectedMeal items={selectedMeal?.steps} />

    </ScrollView>
}

const styles = StyleSheet.create({
    mealDetail: {
        flex: 1,
        padding: 16,
        marginBottom: 20
    },
    image: {
        height: 350,
        width: "100%"
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        margin: 10,
        color: "#fff"
    },

})