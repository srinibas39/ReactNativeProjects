import { useState } from "react";
import { Alert, StyleSheet, TextInput, View } from "react-native"
import { PrimaryButton } from "../components/PrimaryButton"

interface GameStartProps {
    changeScreen: (no: number) => void
}

export const GameStart = (props: GameStartProps) => {

    const { changeScreen } = props;

    const [text, setText] = useState<string>("");


    const handleText = (text: string) => {
        setText(text)
    }

    const handleReset = () => {
        console.log("Reset");

    }

    const handleAlert = () => {
        setText("")
    }

    const handleConfirm = () => {
        const no = parseInt(text);
        if (isNaN(no) || no <= 0 || no >= 100) {
            Alert.alert("Invalid message", "Please enter no within 1 to 99", [
                {
                    text: "Okay", style: "destructive", onPress: handleAlert
                }
            ])
        }
        else {
            changeScreen(no)
        }
    }

    return <View style={styles.startContainer}>
        <TextInput
            style={styles.input}
            maxLength={2}
            keyboardType="number-pad"
            autoCorrect={false}
            value={text}
            onChangeText={handleText}
        />
        <View style={styles.primaryButtons}>
            <PrimaryButton onPress={handleReset}>Reset</PrimaryButton>
            <PrimaryButton onPress={handleConfirm}>Confirm</PrimaryButton>
        </View>
    </View>
}

const styles = StyleSheet.create({
    startContainer: {
        margin: 16,
        padding: 16,
        borderRadius: 8,
        elevation: 4,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        shadowOpacity: 0.3,
        justifyContent: "center",
        alignItems: "center",
       
        
    }
    ,
    input: {
        padding: 6,
        margin: 10,
        borderWidth: 2,
        borderColor: "#fff",
        fontSize: 32,
        width: 60,
        textAlign: "center",
   
    },
    primaryButtons: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    }
});