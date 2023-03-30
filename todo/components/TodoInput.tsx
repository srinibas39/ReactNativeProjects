import { useState } from "react"
import { Button, Image, Modal, StyleSheet, TextInput, View } from "react-native"

interface TodoInputProps {
    handleAdd: (text: string) => void,
    openModal: boolean,
    closeModal: () => void
}

export const TodoInput = (props: TodoInputProps) => {

    const { handleAdd, openModal, closeModal } = props

    const [text, setText] = useState<string>("")

    const handleInput = (text: string) => {
        setText(text)
    }

    const addHandler = () => {
        handleAdd(text)
        setText("")
    }


    return <Modal visible={openModal} animationType="slide">
        <View style={styles.container}>
            <Image style={styles.image} source={require("../assets/genera.png")} />
            <View style={styles.todoHeaderContainer}>
                <TextInput style={styles.textInput} placeholder='Write your todo' onChangeText={handleInput} value={text} />
                <View style={styles.buttonContainer}>
                    <Button title='ADD' onPress={addHandler} />
                    <Button title="CANCEL" onPress={closeModal} />
                </View>
            </View>
        </View>
    </Modal>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"black"

    },
    todoHeaderContainer: {
        width: "100%",
        marginTop: 16,
        justifyContent: 'space-between',
        alignItems: "center",
        marginBottom: 16,
    },
    textInput: {
        width: "80%",
        borderWidth: 2,
        borderColor: "lightblue",
        padding: 16
    },
    buttonContainer: {
        marginTop: 16,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around"
    },
    image:{
        height:100,
        width:100
    }
})