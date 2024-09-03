import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native';

export default function App() {
  const [name, setName] = useState('');

  return (
    <ImageBackground 
           source={require("../assets/BG.jpeg")} 
           resizeMode="cover"
           style={styles.Bg}>
    
      <View style={styles.overlay}>
        <Text style={styles.title}>Every legend has a name...{"\n"}What's yours?</Text>

        <View style={styles.iconContainer}>
          <Text style={styles.icon}>👤</Text> {/* Replace this with an actual icon if desired */}
        </View>

        <TextInput
          style={styles.input}
          placeholder="Masukkan nama anda"
          placeholderTextColor="#00FF00"
          onChangeText={(text) => setName(text)}
          value={name}
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Masuk</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    width: '80%',
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Adjust the transparency
    alignItems: 'center',
  },
  title: {
    color: '#00FF00',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  iconContainer: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#00FF00',
  },
  icon: {
    fontSize: 50,
    color: '#00FF00',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#00FF00',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    color: '#00FF00',
    marginBottom: 20,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#00FF00',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#000000',
    fontSize: 18,
  },
  Bg:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
});
