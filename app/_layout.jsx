import React, { useEffect, useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {
  PaperProvider,
  MD3LightTheme as DefaultLightTheme,
  MD3DarkTheme as DefaultDarkTheme,
  useTheme,
} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import AsyncStorage from '@react-native-async-storage/async-storage'

import HomeScreen from './index'
import SettingsScreen from './settings'
import ProfileScreen from './profile'
import WelcomeScreen from './screens/welcome/index'
import LoginScreen from './screens/loginScreen'
import SignUpScreen from './screens/signupScreen'
import { StyleSheet } from 'react-native'
import SplashScreen from './screens/SplashScreen'
import NotificationScreen from './screens/notificationScreen'

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

const customLightTheme = {
  ...DefaultLightTheme,
  colors: {
    ...DefaultLightTheme.colors,
    primary: '#3498db',
    accent: '#e74c3c',
    background: '#f8f9fa',
    surface: '#f8f9fa',
    text: '#2c3e50',
    border: '#dcdcdc',
    notification: '#f39c12',
    errorContainer: 'red',
    onSurface: 'black',
    onSurfaceVariant: 'black',
    backdrop: '#e6e6e6',
    myTheme: '#516ac8',
    blue: '#e6f0ff',
    elevation: {
      level0: '#f2f2f2',
      level1: '#f2f2f2',
      level2: '#f2f2f2',
      level3: '#f2f2f2',
      level4: '#f2f2f2',
      level5: '#f2f2f2',
    },
  },
}

// Custom Dark Theme
const customDarkTheme = {
  ...DefaultDarkTheme,
  colors: {
    ...DefaultDarkTheme.colors,
    primary: '#1abc9c',
    accent: '#8e44a',
    background: '#0f0f0a',
    backdrop: '#181819',
    surface: '#0f0f0a',
    text: '#ecf0f1',
    border: '#7f8c8d',
    notification: '#e67e22',
    errorContainer: 'red',
    onSurfaceVariant: 'rgb(150, 142, 152)',
    myTheme: '#738fed',
    blue: '#0047b3',
    elevation: {
      level0: '#252527',
      level1: '#252527',
      level2: '#252527',
      level3: '#252527',
      level4: '#252527',
      level5: '#252527',
    },
  },
}

const BottomTabs = ({ saveThemePreference }) => {
  const { colors } = useTheme()
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.myTheme,
        tabBarStyle: {
          ...styles.tabBar,
          backgroundColor: colors.elevation.level0,
          padding: 10,
        },
      }}
    >
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon name='home' size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Profile'
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Icon name='account' size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Settings'
        children={() => (
          <SettingsScreen saveThemePreference={saveThemePreference} />
        )}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <Icon name='cog' size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
const styles = StyleSheet.create({
  tabBar: {
    borderTopWidth: 0,
    paddingTop: 3,
    height: 60,
  },
})

export default function Layout() {
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const [showSplash, setShowSplash] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const checkAuth = async () => {
    const token = await AsyncStorage.getItem('userToken')
    setIsAuthenticated(!!token)
    setIsLoading(false)
  }

  const loadThemePreference = async () => {
    const storedTheme = await AsyncStorage.getItem('themePreference')
    setIsDarkTheme(storedTheme === 'dark')
    setIsLoading(false)
  }

  useEffect(() => {
    const loadData = async () => {
      await loadThemePreference()
      await checkAuth()

      setTimeout(() => {
        setShowSplash(false)
      }, 2000)
    }

    loadData()
  }, [])

  const saveThemePreference = async (isDark) => {
    const theme = isDark ? 'dark' : 'light'
    await AsyncStorage.setItem('themePreference', theme)
    setIsDarkTheme(isDark)
  }

  if (isLoading || showSplash) {
    return <SplashScreen />
  }

  const theme = isDarkTheme ? customDarkTheme : customLightTheme

  return (
    <PaperProvider theme={theme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'none',
        }}
      >
        {/* Always include the Login screen */}
        <Stack.Screen
          options={{
            animation: 'slide_from_right',
          }}
          name='Welcome'
          component={WelcomeScreen}
        />
        <Stack.Screen
          name='Login'
          options={{ animation: 'none' }}
          component={LoginScreen}
        />
        <Stack.Screen
          name='SignUp'
          options={{
            animation: 'none',
          }}
          component={SignUpScreen}
        />
        <Stack.Screen name='Notification' component={NotificationScreen} />

        {isAuthenticated ? (
          <Stack.Screen name='Main'>
            {() => <BottomTabs saveThemePreference={saveThemePreference} />}
          </Stack.Screen>
        ) : (
          <>
            <Stack.Screen
              options={{
                animation: 'slide_from_right',
              }}
              name='Welcome'
              component={WelcomeScreen}
            />
          </>
        )}
      </Stack.Navigator>
    </PaperProvider>
  )
}
