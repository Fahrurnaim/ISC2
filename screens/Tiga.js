import { useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "react-native";

export default function Tiga(){
    const navigation = useNavigation()
    const x = useNavigation()

    function pindahHal4(params) {
        navigation.navigate("Empat")
    }

    function backHalaman(params) {
        x.navigate("Dua")
        
    }
    return(
        <View style={{flex: 1, justifyContent:"center", alignItems:"center", gap:10}}>
            <Text>Halaman Tiga</Text>
            <Button
            title="Next"
            onPress={pindahHal4}/>
            <Button
            title="Back"
            onPress={backHalaman}/>
        </View>

    )
}