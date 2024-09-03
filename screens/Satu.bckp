import { useNavigation} from "@react-navigation/native";
import { Button, Text, View } from "react-native";
import Dua from "./Dua";
import { useEffect, useState } from "react";

export default function Satu(){
    const navigation = useNavigation()
    const [count, setCount] = useState(0);
    const [quotes, setQuotes] = useState();

    function onPress(){
        setCount(count+1);
    }

    function minPress(){
        setCount(count-1);
    }

    function pindahHalaman(){
        navigation.replace("Dua");
    }

        async function getQuotes(){
            const response = await
            fetch ("https://api.quotable.io/random")

            const data = await response.json();

            setQuotes(data.content);
        }

        useEffect(() => {
        getQuotes();
    }, [count]);

    return(
        <View style={{flex: 1, justifyContent:"center", alignItems:"center", gap:20}}>
            <Text>Halaman useState</Text>
            <Button 
            title="Pindah Halaman"
            onPress={pindahHalaman}/>
            <Text>{count}</Text>
            <Button
            title=  "tambah"
            onPress={onPress}
            />
            <Button
            disabled= {count===0}
            title="kurang"
            onPress={minPress}
            />
            <Text>{quotes}</Text>
        </View>

    )
}