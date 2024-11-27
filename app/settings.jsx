import React, { useState } from 'react'
import { View, StyleSheet, Dimensions, ScrollView } from 'react-native'
import {
  Text,
  Avatar,
  useTheme,
  Appbar,
  Menu,
  Divider,
} from 'react-native-paper'
import SettingsItem from '../components/SettingsItem'
import Section from '../components/Section'
import { useNavigation } from '@react-navigation/native'

const { height, width } = Dimensions.get('window')
const hp = (value) => (height * value) / 100
const wp = (value) => (width * value) / 100

export default function SettingsScreen({ saveThemePreference }) {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false)
  const { colors } = useTheme()

  const [visible, setVisible] = useState(false)

  const navigation = useNavigation()

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme)
    saveThemePreference(!isDarkTheme)
  }

  return (
    <View style={{ backgroundColor: colors.background }}>
      <Appbar.Header style={{ backgroundColor: colors.backdrop }}>
        <Appbar.BackAction onPress={() => navigation.navigate('Home')} />
        <Appbar.Content title='Settings' />
        <Appbar.Action
          icon={'magnify'}
          onPress={() => console.log('first')}
          iconColor={colors.onSurface}
        />
        <View>
          <Menu
            visible={visible}
            onDismiss={() => setVisible(false)}
            anchor={
              <Appbar.Action
                icon={'dots-vertical'}
                onPress={() => setVisible(true)}
                iconColor={colors.onSurface}
              />
            }
          >
            <Menu.Item leadingIcon='cog' onPress={() => {}} title='Item 1' />
            <Menu.Item leadingIcon='alert' onPress={() => {}} title='Item 1' />
            <Divider />
            <Menu.Item leadingIcon='alert' onPress={() => {}} title='Item 1' />
          </Menu>
        </View>
      </Appbar.Header>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* User Profile */}
        <View>
          <View
            style={[
              styles.profileSection,
              { backgroundColor: colors.backdrop },
            ]}
          >
            <Avatar.Image
              size={60}
              source={{ uri: 'https://via.placeholder.com/150' }}
            />
            <View style={styles.profileTextContainer}>
              <Text style={[styles.profileName, { color: colors.text }]}>
                John Doe
              </Text>
              <Text style={[styles.profileEmail, { color: colors.outline }]}>
                johndoe@example.com
              </Text>
            </View>
          </View>
        </View>
        {/* Settings Options */}
        <Section label={'Account'}>
          <SettingsItem
            icon='account-circle'
            label='Account'
            description='Privacy, security, and change number'
            onPress={() => console.log('Account Pressed')}
          />

          <SettingsItem
            icon='notifications'
            label='Notifications'
            description='Message and group notifications'
            onPress={() => console.log('Notifications Pressed')}
          />
          <SettingsItem
            icon='language'
            label='Language'
            description='Select your preferred language'
            onPress={() => console.log('Language Pressed')}
          />
          <SettingsItem
            icon='dark-mode'
            label='Dark Mode'
            description={isDarkTheme ? 'Enabled' : 'Disabled'}
            onPress={toggleTheme}
          />
        </Section>

        <Section label={'Help'}>
          <SettingsItem
            icon='help-outline'
            label='Help'
            description='FAQs and customer support'
            onPress={() => alert('Help')}
          />
          <SettingsItem
            icon='info-outline'
            label='About'
            description='Version 1.0.0 and other information'
            onPress={() => console.log('About Pressed')}
          />
          <SettingsItem
            icon='credit-card'
            label='Premium Package'
            description='Unlock exclusive features with our premium plan'
            onPress={() => console.log('Premium Package Pressed')}
          />
        </Section>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: hp(10),
    paddingTop: hp(1.5),
    gap: hp(1.5),
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(5),
    paddingVertical: hp(5),
  },
  profileTextContainer: {
    marginLeft: wp(4),
  },
  profileName: {
    fontSize: wp(5),
    fontWeight: 'bold',
  },
  profileEmail: {
    fontSize: wp(4),
  },
  label: {
    fontSize: wp(4.8),
    fontWeight: '700',
    paddingHorizontal: wp(4),
    paddingVertical: hp(1.5),
  },
})
