import { Dimensions, Pressable, StyleSheet, View } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { Text, useTheme } from 'react-native-paper'

const { height, width } = Dimensions.get('window')
const hp = (value) => (height * value) / 100
const wp = (value) => (width * value) / 100

export default function SettingsItem({ icon, label, description, onPress }) {
  const { colors } = useTheme()
  return (
    <Pressable
      style={[styles.settingItem]}
      android_ripple={{ color: colors.backdrop, borderless: false }}
      onPress={onPress}
    >
      <View style={styles.iconContainer}>
        <MaterialIcons name={icon} size={24} color={colors.outline} />
      </View>
      <View style={styles.textContainer}>
        <Text style={[styles.label, { color: colors.text }]}>{label}</Text>
        {description && (
          <Text style={{ color: colors.onSurfaceDisabled }}>{description}</Text>
        )}
      </View>
      <MaterialIcons name='chevron-right' size={24} color={colors.outline} />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: hp(2.5),
    paddingHorizontal: wp(5),
  },
  iconContainer: {
    marginRight: wp(4),
  },
  textContainer: {
    flex: 1,
  },
  label: {
    fontSize: wp(5),
  },
})
