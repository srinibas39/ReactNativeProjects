import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native"
import { GuessNumber } from "../components/GuessNumber";
import { PrimaryButton } from "../components/PrimaryButton";
import { Title } from "../components/Title"

interface GameProps {
    userNumber: number,
    setRenderItem: React.Dispatch<React.SetStateAction<string>>,
    rounds: number,
    setRounds: React.Dispatch<React.SetStateAction<number>>
}
export const Game = (props: GameProps) => {

    const { userNumber, setRenderItem, rounds, setRounds } = props;
    let min = 1;
    let max = 100;

    const generateRandomNumber = (min: number, max: number, exclude: number): number => {

        let randomNumber = Math.floor(Math.random() * (max - min)) + min;
        if (randomNumber === exclude) {
            return generateRandomNumber(min, max, exclude)
        }
        else {
            return randomNumber;
        }
    }

    const [currentGuess, setCurrentGuess] = useState<number>(generateRandomNumber(min, max, userNumber))




    const handleGuess = (dir: string) => {

        // range check
        if ((dir === "lower" && currentGuess < userNumber) || (dir === "higher" && currentGuess > userNumber)) {
            Alert.alert("Don't lie", "Please try again",
                [{ text: "ok", style: "cancel" }])
            return;
        }
        if (dir === "lower") {
            max = currentGuess;
        }
        else {
            min = currentGuess + 1;
        }

        let randomNumber = generateRandomNumber(min, max, currentGuess)
        setCurrentGuess(randomNumber);
        setRounds((p) => p + 1);
    }

    useEffect(() => {
        if (currentGuess === userNumber) {
            setRenderItem("GameEnd")
        }
    }, [currentGuess])



    return <View style={styles.gameContainer}>
        <Title>Opponents Guess</Title>
        <View>
            <Text>Higher or Lower</Text>
        </View>
        <GuessNumber no={currentGuess} />
        <PrimaryButton onPress={() => handleGuess("higher")}>+</PrimaryButton>
        <PrimaryButton onPress={() => handleGuess("lower")}>-</PrimaryButton>

    </View>
}

const styles = StyleSheet.create({
    gameContainer: {
        flex: 1,
        padding: 16
    }
})