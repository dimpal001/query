import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { TextInput, Button, Checkbox, useTheme, Text } from 'react-native-paper'
import { wp } from '../../helpers/common'
import { useNavigation } from '@react-navigation/native'

const LoginScreen = ({ navigation }) => {
  const [checked, setChecked] = React.useState(false)
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')

  const navigations = useNavigation()

  const { colors } = useTheme()

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={styles.title}>Hey,</Text>
      <Text style={styles.heading}>Login Now!</Text>
      <View style={styles.row}>
        <TouchableOpacity>
          <Text style={styles.link}>I Am A Old User</Text>
        </TouchableOpacity>
        <Text> / </Text>
        <TouchableOpacity onPress={() => navigations.navigate('SignUp')}>
          <Text style={styles.link}>Create New</Text>
        </TouchableOpacity>
      </View>
      <TextInput
        label='Email'
        value={username}
        onChangeText={(text) => setUsername(text)}
        mode='outlined'
        style={styles.input}
        right={<TextInput.Icon icon='check' />}
        theme={{
          colors: {
            primary: colors.myTheme,
          },
        }}
      />
      <TextInput
        label='Password'
        value={password}
        onChangeText={(text) => setPassword(text)}
        mode='outlined'
        style={styles.input}
        secureTextEntry
        theme={{
          colors: {
            primary: colors.myTheme,
          },
        }}
      />
      <View style={styles.row}>
        <TouchableOpacity>
          <Text style={styles.link}>Forget Password?</Text>
        </TouchableOpacity>
        <Text> / </Text>
        <TouchableOpacity>
          <Text style={styles.link}>Reset</Text>
        </TouchableOpacity>
      </View>
      <Button
        mode='contained'
        // loading
        // disabled
        onPress={() => navigation.navigate('Main')}
        style={[styles.button, { backgroundColor: colors.myTheme }]}
        labelStyle={styles.buttonLabel}
      >
        Login Now
      </Button>
      <TouchableOpacity>
        <Text style={styles.skip}>Skip Now</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: wp(6),
    justifyContent: 'center',
  },
  title: {
    fontSize: 45,
  },
  heading: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  link: {
    fontWeight: '600',
    fontSize: 14,
  },
  input: {
    marginBottom: 15,
  },
  button: {
    marginVertical: 20,
    borderRadius: 5,
    paddingVertical: 3,
  },
  buttonLabel: {
    color: 'white',
    fontSize: 16,
  },
  skip: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 14,
  },
})

export default LoginScreen
