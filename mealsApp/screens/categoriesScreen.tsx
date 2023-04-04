import { FlatList, StyleSheet, Text, View } from "react-native"
import { CATEGORIES } from "../data/dummyData"
import { Item } from "../components/Item"



export const CategoriesScreen = ({ navigation }: any) => {
    const CategoryItem = (itemObj: any) => {
        
        const onPress = () => {
            navigation.navigate("mealsOverview", { id: itemObj.item.id })
        }
        return <Item title={itemObj.item.title} color={itemObj.item.color} onPress={onPress} />
    }
    return <View style={styles.app}>
        <FlatList data={CATEGORIES} keyExtractor={(item) => item.id} renderItem={CategoryItem} numColumns={2} />
    </View>
}


const styles = StyleSheet.create({
    app: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        margin: 16
    }
})