import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from 'react-native-paper'

export default function ScreenWrapper({ children, bg }) {
  const { colors } = useTheme()
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.background,
      }}
    >
      {children}
    </View>
  )
}

const styles = StyleSheet.create({})
