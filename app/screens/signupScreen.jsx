import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { TextInput, Button, useTheme, Text } from 'react-native-paper'
import { wp } from '../../helpers/common'
import { useNavigation } from '@react-navigation/native'

const SignupScreen = () => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [confirmPassword, setConfirmPassword] = React.useState('')

  const navigation = useNavigation()

  const { colors } = useTheme()

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={styles.title}>Welcome,</Text>
      <Text style={styles.heading}>Create Account!</Text>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.link}>Already Have an Account?</Text>
        </TouchableOpacity>
      </View>
      <TextInput
        label='Email'
        value={email}
        onChangeText={(text) => setEmail(text)}
        mode='outlined'
        style={styles.input}
        right={<TextInput.Icon icon='email' />}
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
        right={<TextInput.Icon icon='eye-off' />}
        theme={{
          colors: {
            primary: colors.myTheme,
          },
        }}
      />
      <TextInput
        label='Confirm Password'
        value={confirmPassword}
        onChangeText={(text) => setConfirmPassword(text)}
        mode='outlined'
        style={styles.input}
        secureTextEntry
        right={<TextInput.Icon icon='eye-off' />}
        theme={{
          colors: {
            primary: colors.myTheme,
          },
        }}
      />
      <Button
        mode='contained'
        onPress={() => console.log('Signup Pressed')}
        style={[styles.button, { backgroundColor: colors.myTheme }]}
        labelStyle={styles.buttonLabel}
      >
        Signup Now
      </Button>
      <TouchableOpacity>
        <Text style={styles.skip}>Skip Signup</Text>
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
    fontSize: 16,
    color: 'white',
  },
  skip: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 14,
  },
})

export default SignupScreen
