import React, { useState } from 'react'
import { StyleSheet, View, FlatList, Text, Pressable } from 'react-native'
import { Appbar, Menu, useTheme } from 'react-native-paper'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { NotificationItem } from './notifications/NotificationItem'

export default function NotificationScreen({ navigation }) {
  const theme = useTheme()
  const { colors } = theme

  const [menuVisible, setMenuVisible] = useState(false)

  const notifications = [
    {
      id: '1',
      title: 'New Update Available',
      content: 'Version 2.0 is now live!',
      time: '2 hours ago',
    },
    {
      id: '2',
      title: 'Scheduled Maintenance',
      content: 'Maintenance on 28th Nov, 2:00 AM - 4:00 AM',
      time: '1 day ago',
    },
    {
      id: '3',
      title: 'Account Login Alert',
      content: 'New login detected from a new device.',
      time: '3 days ago',
    },
  ]

  const clearAllNotifications = () => {
    console.log('Clearing all notifications')
    // Add functionality to clear notifications
  }

  const markAllAsRead = () => {
    console.log('Marking all notifications as read')
    // Add functionality to mark all as read
  }

  const openSettings = () => {
    console.log('Navigating to notification settings')
    navigation.navigate('NotificationSettings')
  }

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Appbar.Header style={{ backgroundColor: colors.backdrop }}>
        <Appbar.BackAction onPress={() => navigation.navigate('Main')} />
        <Appbar.Content title='Notifications' />
        <Menu
          visible={menuVisible}
          onDismiss={() => setMenuVisible(false)}
          anchor={
            <Appbar.Action
              icon={() => (
                <MaterialIcons name='more-vert' size={24} color='white' />
              )}
              onPress={() => setMenuVisible(true)}
            />
          }
        >
          <Menu.Item
            onPress={markAllAsRead}
            leadingIcon='check-all'
            title={<Text>Read all</Text>}
          />
          <Menu.Item
            titleStyle={{ color: colors.error }}
            onPress={clearAllNotifications}
            leadingIcon={() => (
              <MaterialIcons name='delete' size={24} color={colors.error} />
            )}
            title='Clear all'
          />
        </Menu>
      </Appbar.Header>

      <FlatList
        data={notifications}
        renderItem={({ item }) => (
          <NotificationItem item={item} colors={colors} />
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    paddingVertical: 10,
  },
  notificationContainer: {
    flexDirection: 'row',
    padding: 15,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  content: {
    fontSize: 14,
    marginVertical: 5,
  },
  timestamp: {
    fontSize: 12,
    color: '#888',
    fontStyle: 'italic',
  },
})
