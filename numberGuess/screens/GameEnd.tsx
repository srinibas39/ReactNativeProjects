import { View, Text, StyleSheet } from "react-native"
import { PrimaryButton } from "../components/PrimaryButton"
import { Title } from "../components/Title"

interface GameEndProps {
    no: number,
    setNo: React.Dispatch<React.SetStateAction<number>>,
    rounds: number,
    setRounds: React.Dispatch<React.SetStateAction<number>>,
    setRenderItem: React.Dispatch<React.SetStateAction<string>>
}

export const GameEnd = (props: GameEndProps) => {

    const { no, setNo, rounds, setRounds, setRenderItem } = props;

    const handleNewGame = () => {
        setNo(0);
        setRounds(0)
        setRenderItem("GameStart")
    }

    return <View>
        <Title>Game Over</Title>
        <Text style={styles.para}>
            You played about <Text style={styles.bold}>{rounds}</Text> rounds to guess <Text style={styles.bold}>{no}</Text>
        </Text>

        <PrimaryButton onPress={handleNewGame}>Start New Game</PrimaryButton>
    </View>
}

const styles = StyleSheet.create({
    para: {
        textAlign: "center",
        fontSize: 24,
        marginBottom: 16
    },
    bold: {
        color: "red"
    }
})