import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';

export default function SecondScreen({ route }) {
  const { userName } = route.params;

  return (
    <ImageBackground
      source={{ uri: 'https://example.com/your-background-image.jpg' }} // Replace with the background image URL you want to use
      style={styles.container}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Let's Start</Text>
        <Text style={styles.subtitle}>{'< />'}</Text>
        <Text style={styles.title}>Your Journey,</Text>
        <Text style={styles.userName}>{userName}!</Text>

        <TouchableOpacity style={styles.beginnerButton}>
          <Text style={styles.buttonText}>Web Development : Beginner</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.advancedButton}>
          <Text style={styles.lockIcon}>🔒</Text>
          <Text style={styles.buttonText}>Web Development : Advanced</Text>
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
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    alignItems: 'center',
  },
  title: {
    color: '#00FF00',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    color: '#00FF00',
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 10,
  },
  userName: {
    color: '#00FF00',
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 30,
  },
  beginnerButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#0000FF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 20,
  },
  advancedButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#FF0000',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    position: 'relative',
  },
  lockIcon: {
    position: 'absolute',
    left: 20,
    color: '#00FF00',
    fontSize: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
});
