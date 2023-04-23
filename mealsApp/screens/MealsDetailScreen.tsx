import { useNavigation, useRoute } from "@react-navigation/native";
import { View, Text, Image, FlatList, StyleSheet, Button } from "react-native";
import { MEALS } from "../data/dummyData";
import { MealDetail } from "../components/MealDetails";
import { StepTitle } from "../components/StepTitle";
import { ScrollView } from "react-native-gesture-handler";
import { SelectedMeal } from "../components/SelectedMeal";
import { useLayoutEffect } from "react";



export const MealsDetailScreen = () => {
    const route = useRoute<any>();
    const navigation = useNavigation<any>();

    const mealId = route.params.mealId;

    const selectedMeal = MEALS.find((meal) => meal.id === mealId)

    const handleButton=()=>{
        console.log("pressed");  
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => <Button title={"Favorites"} onPress={handleButton} />
        })
    }, [])

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
        marginBottom:20
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
    stepTitle: {
        marginVertical: 10,
        height: 40,
        // backgroundColor:"#fbbf24",
        borderBottomWidth: 2,
        borderBottomColor: "#fbbf24"

    },
    stepText: {
        color: "#fbbf24",
        fontSize: 20,
        textAlign: "center",
    },
    mealSteps: {
        height: 40,
        backgroundColor: "#fbbf24",
        marginVertical: 10,
        justifyContent: "center",
        alignItems: "center"

    },
    mealStepsText: {
        color: "black",
        fontSize: 19,
        fontWeight: "bold",

    }
})