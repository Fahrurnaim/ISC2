import { useNavigation } from "@react-navigation/native";
import { Text, View, ImageBackground } from "react-native";
import { StyleSheet } from "react-native";

export default function Empat(){
    const navigation = useNavigation()

    return(
        <View style={styles.container}>
            <ImageBackground 
            source={require('../assets/wp.png')} 
            style={{flex:1, justifyContent:"center", alignItems:"center"}}
            resizeMode="cover">
                <View style={{alignItems: "center"}}>
                    <Text style={{color:"green", fontSize:40}}>Codeesey</Text>
                </View>
            </ImageBackground>
        </View>
        )
}

const styles = StyleSheet.create ({
    container : {
        flex : 1,
        justifyContent: "center",
    }

})