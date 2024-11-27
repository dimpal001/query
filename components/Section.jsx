import { StyleSheet, Text, View } from 'react-native'
import React, { Children } from 'react'
import { useTheme } from 'react-native-paper'
import { hp, wp } from '../helpers/common'

export default function Section({ children, label }) {
  const { colors } = useTheme()
  return (
    <View style={{ backgroundColor: colors.backdrop }}>
      {label && (
        <Text
          style={{
            fontWeight: '700',
            color: colors.myTheme,
            paddingHorizontal: wp(6),
            paddingTop: hp(1.5),
            fontSize: wp(5),
          }}
        >
          {label}
        </Text>
      )}
      {children}
    </View>
  )
}

const styles = StyleSheet.create({})
