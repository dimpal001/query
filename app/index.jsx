import React, { useState } from 'react'
import {
  ScrollView,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native'
import { Appbar, Text, Card, Avatar, useTheme } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import { hp, wp } from '../helpers/common'

const HomeScreen = ({ navigation }) => {
  const [visible, setVisible] = useState(false)
  const { colors } = useTheme()
  const router = useNavigation()

  const handleMenuVisible = () => setVisible(!visible)

  const handleProfilePress = () => navigation.navigate('Profile')
  const handleNotificationsPress = () => navigation.navigate('Notifications')
  const handleOptionPress = (option) => console.log(`${option} pressed`)

  const handleLogout = async () => {
    await AsyncStorage.removeItem('userToken')
    router.navigate('Login')
  }

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      {/* Top Section */}
      <View style={styles.topSection}>
        <View style={styles.appInfo}>
          <Text style={[styles.appName, { color: colors.myTheme }]}>Query</Text>
        </View>
        <View
          style={{ flexDirection: 'row', gap: 15 }}
          // onPress={handleProfilePress}
        >
          <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
            <Avatar.Icon
              size={45}
              icon='bell'
              style={{ backgroundColor: colors.backdrop }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Avatar.Text
              size={45}
              label='DD'
              style={{ backgroundColor: colors.backdrop }}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Options Section */}
      <View style={{ padding: 2, paddingHorizontal: 10 }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {[
            { label: 'Subjects' },
            { label: 'New Exam' },
            { label: 'Question Updates' },
            { label: 'Quiz Updates' },
          ].map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.optionButton,
                { backgroundColor: colors.backdrop },
              ]}
              onPress={() => handleOptionPress(item.label)}
            >
              <Text style={[styles.optionText, { color: colors.text }]}>
                {item.label}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* User Statistics */}
      <Card style={[styles.statsCard, { backgroundColor: colors.blue }]}>
        <Card.Content>
          <Text style={[styles.cardTitle, { color: colors.text }]}>
            Your Progress
          </Text>
          <Text style={[styles.cardSubtitle, { color: colors.secondary }]}>
            Mathematics: 45/50 questions answered
          </Text>
          <Text style={[styles.cardSubtitle, { color: colors.secondary }]}>
            Science: 30/40 questions answered
          </Text>
          <Text style={[styles.cardSubtitle, { color: colors.secondary }]}>
            History: 20/30 questions answered
          </Text>
        </Card.Content>
      </Card>

      {/* Classmates Progress */}
      <View style={styles.classmatesSection}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>
          Classmates' Progress
        </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {Array(5)
            .fill(null)
            .map((_, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.classmateCard,
                  { backgroundColor: colors.backdrop },
                ]}
              >
                <Avatar.Text
                  size={50}
                  label='CD'
                  style={{ backgroundColor: colors.background }}
                />
                <Text
                  style={[styles.classmateName, { color: colors.text }]}
                >{`Student ${index + 1}`}</Text>
                <Text
                  style={[
                    styles.classmateProgress,
                    { color: colors.secondary },
                  ]}
                >
                  {`${(Math.random() * 100) | 0}% Complete`}
                </Text>
              </TouchableOpacity>
            ))}
        </ScrollView>
      </View>
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: wp(5),
  },
  appInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  appName: {
    fontSize: wp(8),
    fontWeight: 'bold',
    marginRight: wp(2),
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: hp(2),
  },
  optionButton: {
    minWidth: wp(20),
    alignItems: 'center',
    padding: hp(1.5),
    paddingHorizontal: hp(2.4),
    marginRight: 7,
    borderRadius: wp(50),
  },
  optionText: {
    fontSize: wp(3.5),
    textAlign: 'center',
  },
  statsCard: {
    margin: wp(5),
    padding: wp(4),
    borderRadius: wp(2),
  },
  cardTitle: {
    fontSize: wp(5),
    fontWeight: 'bold',
    marginBottom: hp(1),
  },
  cardSubtitle: {
    fontSize: wp(4),
    marginTop: hp(0.5),
  },
  classmatesSection: {
    paddingHorizontal: wp(5),
    paddingVertical: hp(2),
  },
  sectionTitle: {
    fontSize: wp(5),
    fontWeight: 'bold',
    marginBottom: hp(1),
  },
  classmateCard: {
    width: wp(30),
    padding: hp(2),
    marginRight: wp(3),
    borderRadius: wp(2),
    alignItems: 'center',
  },
  classmateName: {
    marginTop: hp(1),
    fontSize: wp(4),
    fontWeight: 'bold',
  },
  classmateProgress: {
    marginTop: hp(0.5),
    fontSize: wp(3.5),
  },
})
