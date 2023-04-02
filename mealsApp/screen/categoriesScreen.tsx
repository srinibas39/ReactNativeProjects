import { FlatList, StyleSheet, Text, View } from "react-native"
import { CATEGORIES } from "../data/dummyData"
import { Item } from "../components/Item"


export const CategoryItem = (itemObj: any) => {
    return <Item title={itemObj.item.title} color={itemObj.item.color} />
}

export const CategoriesScreen = () => {
    return <View style={styles.app}>
        <FlatList data={CATEGORIES} keyExtractor={(item) => item.id} renderItem={CategoryItem} numColumns={2} />
    </View>
}


const styles = StyleSheet.create({
    app: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding:16,
        margin:16
    }
})