import React from 'react'
import {
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  Pressable,
  Dimensions,
} from 'react-native'
import {
  Avatar,
  Text,
  Button,
  List,
  Divider,
  useTheme,
  Card,
} from 'react-native-paper'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useRouter } from 'expo-router'

const { height, width } = Dimensions.get('window')
const hp = (value) => (height * value) / 100
const wp = (value) => (width * value) / 100

const ProfileScreen = () => {
  const { colors } = useTheme()
  const router = useRouter()

  // Mock user data
  const userData = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    avatar: 'https://via.placeholder.com/150',
    subscriptionPlan: 'Premium Plan',
    class: '12th Grade',
    subject: 'Mathematics',
    followers: 150,
    following: 120,
    questionsAsked: 45,
  }

  const SettingItem = ({ icon, label, description, onPress }) => (
    <Pressable
      style={[styles.settingItem, { backgroundColor: colors.backdrop }]}
      android_ripple={{ color: colors.backdrop, borderless: false }}
      onPress={onPress}
    >
      <View style={styles.iconContainer}>
        <MaterialIcons name={icon} size={24} color={colors.outline} />
      </View>
      <View style={styles.textContainer}>
        <Text style={[styles.label, { color: colors.text }]}>{label}</Text>
        {description && (
          <Text
            style={[styles.description, { color: colors.onSurfaceDisabled }]}
          >
            {description}
          </Text>
        )}
      </View>
      <MaterialIcons name='chevron-right' size={24} color={colors.outline} />
    </Pressable>
  )

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      style={{ backgroundColor: colors.background }}
    >
      {/* User Info Section */}
      <Card style={styles.profileCard}>
        <View style={styles.profileInfo}>
          <Avatar.Image size={80} source={{ uri: userData.avatar }} />
          <View style={styles.profileText}>
            <Text variant='titleLarge' style={{ color: colors.text }}>
              {userData.name}
            </Text>
            <Text variant='bodyMedium' style={{ color: colors.onSurface }}>
              {userData.email}
            </Text>
          </View>
        </View>
        <Divider style={styles.divider} />
        {/* Highlight Section */}
        <View style={styles.highlights}>
          <TouchableOpacity
            style={styles.highlightItem}
            onPress={() => console.log('Followers')}
          >
            <Text style={[styles.highlightCount, { color: colors.myTheme }]}>
              {userData.followers}
            </Text>
            <Text style={styles.highlightLabel}>Followers</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.highlightItem}
            onPress={() => console.log('Following')}
          >
            <Text style={[styles.highlightCount, { color: colors.myTheme }]}>
              {userData.following}
            </Text>
            <Text style={styles.highlightLabel}>Following</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.highlightItem}
            onPress={() => console.log('Questions')}
          >
            <Text style={[styles.highlightCount, { color: colors.myTheme }]}>
              {userData.questionsAsked}
            </Text>
            <Text style={styles.highlightLabel}>Questions</Text>
          </TouchableOpacity>
        </View>
      </Card>

      {/* Settings Options */}
      <View style={styles.settingsContainer}>
        <List.Section>
          <List.Subheader style={{ color: colors.myTheme, fontSize: 16 }}>
            Account Options
          </List.Subheader>
          <SettingItem
            icon='edit'
            label='Edit Profile'
            description='Update your personal information'
            onPress={() => console.log('Help Pressed')}
          />
          <SettingItem
            icon='notifications'
            label='Notifications'
            description='Manage your notification preferences'
            onPress={() => console.log('Help Pressed')}
          />
          <SettingItem
            icon='credit-card'
            label='Subscription'
            description='View or update your subscription plan'
            onPress={() => console.log('Help Pressed')}
          />
        </List.Section>

        <List.Section>
          <List.Subheader style={{ color: colors.myTheme, fontSize: 16 }}>
            Support
          </List.Subheader>
          <SettingItem
            icon='help-outline'
            label='Help & Support'
            description='FAQs and customer support'
            onPress={() => console.log('Help Pressed')}
          />
          <SettingItem
            icon='info-outline'
            label='About Us'
            description='Learn more about our app'
            onPress={() => console.log('Help Pressed')}
          />
        </List.Section>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  profileCard: {
    marginTop: 20,
    borderRadius: 10,
    margin: 16,
    padding: 16,
    elevation: 3,
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  profileText: {
    marginLeft: 16,
  },
  divider: {
    marginVertical: 10,
  },
  highlights: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  highlightItem: {
    alignItems: 'center',
    flex: 1,
  },
  highlightCount: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  highlightLabel: {
    fontSize: 14,
    color: '#666',
  },
  settingsContainer: {
    marginTop: 20,
  },
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
})

export default ProfileScreen
