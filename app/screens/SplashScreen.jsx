import React from 'react'
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import { useTheme } from 'react-native-paper'

const SplashScreen = () => {
  const { colors } = useTheme()
  return (
    <View style={[styles.container, { backgroundColor: '#009900' }]}>
      <Text style={styles.title}>Query</Text>
      <ActivityIndicator size='large' color='white' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
})

export default SplashScreen
