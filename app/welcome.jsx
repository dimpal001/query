import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native'
import { useRouter } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { useTheme, Button } from 'react-native-paper'

export default function WelcomeScreen() {
  const router = useRouter()
  const { colors } = useTheme()

  return (
    <ImageBackground
      source={require('../assets/images/welcome.jpeg')}
      style={styles.background}
      imageStyle={{ opacity: 0.7, filter: 'grayscale(1)' }}
    >
      <View style={styles.container}>
        {/* App Name */}
        <Text style={[styles.appName, { color: colors.myTheme }]}>MyApp</Text>

        {/* Hero Line */}
        <Text style={[styles.heroLine, { color: colors.myTheme }]}>
          Transforming Ideas Into Reality
        </Text>

        {/* Arrow Button */}
        <TouchableOpacity
          style={[styles.button, { backgroundColor: colors.myTheme }]}
          onPress={() => router.push('Home')} // Navigate to Home
        >
          <Ionicons name='arrow-forward' size={24} color='#fff' />
        </TouchableOpacity>

        {/* Get Started Button */}
        <Button
          mode='contained'
          onPress={() => router.push('Home')}
          style={[styles.getStartedButton, { backgroundColor: colors.myTheme }]}
          labelStyle={styles.buttonText}
        >
          Get Started
        </Button>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
  container: {
    alignItems: 'center',
    padding: 20,
    marginBottom: 50,
  },
  appName: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 10,
    textTransform: 'uppercase',
  },
  heroLine: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 30,
    fontWeight: '600',
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  getStartedButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  buttonText: {
    fontWeight: '600',
  },
})
