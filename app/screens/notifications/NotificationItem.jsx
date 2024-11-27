import { MaterialIcons } from '@expo/vector-icons'
import { useState } from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import { Menu, Text } from 'react-native-paper'

export const NotificationItem = ({ item, colors }) => {
  const [menuVisible, setMenuVisible] = useState(false)
  const [menuAnchor, setMenuAnchor] = useState(null)

  const openMenu = (event) => {
    setMenuAnchor(event.nativeEvent.target)
    setMenuVisible(true)
  }

  const closeMenu = () => {
    setMenuVisible(false)
    setMenuAnchor(null)
  }

  const deleteNotification = () => {
    console.log(`Deleting notification: ${item.id}`)

    closeMenu()
    // Add logic to delete the notification
  }

  const markAsRead = () => {
    console.log(`Marking notification as read: ${item.id}`)
    closeMenu()
    // Add logic to mark the notification as read
  }

  return (
    <View>
      <Menu
        visible={menuVisible}
        onDismiss={closeMenu}
        anchor={
          <Pressable
            android_ripple={{ color: colors.backdrop, borderless: false }}
            style={styles.notificationContainer}
            onLongPress={openMenu}
          >
            <View style={styles.iconContainer}>
              <MaterialIcons
                name='notifications'
                size={24}
                color={colors.myTheme}
              />
            </View>
            <View style={styles.textContainer}>
              <Text style={[styles.title, { color: colors.text }]}>
                {item.title}
              </Text>
              <Text style={[styles.content, { color: colors.text }]}>
                {item.content}
              </Text>
              <Text style={[styles.timestamp, { color: colors.text }]}>
                {item.time}
              </Text>
            </View>

            {/* Long-Press Menu */}
          </Pressable>
        }
      >
        <Menu.Item
          onPress={markAsRead}
          leadingIcon='check'
          title='Mark as Read'
        />
        <Menu.Item
          titleStyle={{ color: colors.error }}
          onPress={deleteNotification}
          leadingIcon={() => (
            <MaterialIcons name='delete' size={24} color={colors.error} />
          )}
          title='Delete'
        />
      </Menu>
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
