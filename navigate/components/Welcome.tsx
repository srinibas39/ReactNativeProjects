import { View, Text, Button } from "react-native";

export const Welcome = ({ navigation }: any) => {

    const handlePress=()=>{
        navigation.toggleDrawer()
    }
    return <View>
        <Text>Hello I am Welcome</Text>
        <View style={{ padding: 16 }}>
            <Button title="toggle"  onPress={handlePress}/>
        </View>
    </View>
}