import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Button, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Satu from './screens/Satu';
import Dua from './screens/Dua';
import Tiga from './screens/Tiga';
import Empat from './screens/Empat';

const Stack = createNativeStackNavigator();
const Oke = 1;
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name='Satu' 
        component={Satu}
        />
        <Stack.Screen 
        name='Dua' 
        component={Dua}
        />
        <Stack.Screen 
        name='Tiga' 
        component={Tiga}
        />
        <Stack.Screen 
        name='Empat' 
        component={Empat}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0ff',
    alignItems: 'center', //posisi baris menyamping alignItems:
    justifyContent: 'center', //posisi kolom vertikal justifyContent
    //gap: 150,//jarak komponen gap
    flexDirection: "" //posisi komponen
  },
});


//fnction navigate bisa back
//function replace tidak bisa kembali (Log In Page)

