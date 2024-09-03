import { useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "react-native";

export default function Dua(){
    const navigation = useNavigation()
    const x = useNavigation()

    function pindahHal3(params) {
        navigation.navigate("Tiga")
    }

    function backHal1(){
        x.navigate("Satu")
    }

    return(
        <View style={{flex: 1, justifyContent:"center", alignItems:"center"}}>
            <Text>Halaman Dua</Text>
            <Button 
            title="Next"
            onPress={pindahHal3}
            />
            <Button
            title="Back"
            onPress={backHal1}/>
        </View>

    )
}