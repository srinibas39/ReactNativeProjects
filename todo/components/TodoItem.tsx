import { Pressable, StyleSheet, Text, View } from "react-native"

interface TodoItemProps {
    text: string,
    handleDelete: (id: string) => void,
    id: string
}

export const TodoItem = (props: TodoItemProps) => {
    const { text, handleDelete, id } = props

    return <View style={styles.todoText}>
        <Pressable android_ripple={{ color: "blue" }} onPress={() => handleDelete(id)}
            style={({ pressed }: any) => pressed && styles.pressIos}>
            <View >
                <Text style={styles.text}>{text}</Text>
            </View>
        </Pressable>
    </View>
}

const styles = StyleSheet.create({
    todoText: {
        borderRadius: 4,
        backgroundColor: "lightblue",
        margin: 10,
    },
    text: {
        padding: 10,
        color: "black"
    },
    pressIos: {
        color: "blue"
    }
})