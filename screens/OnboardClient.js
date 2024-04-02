import React, {useState} from 'react'
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  ActivityIndicator
} from 'react-native'
import {useMutation} from 'react-query'
import {createClient} from '../services/Client'
import g from '../assets/styles/global'
import useEmailValidation from '../hooks/useEmailValidation'
import useNameValidation from '../hooks/useNameValidation'

const OnboardClientScreen = () => {
  const {email, setEmail, isEmailValid} = useEmailValidation()
  const {
    firstName,
    setFirstName,
    isFirstNameValid,
    lastName,
    setLastName,
    isLastNameValid
  } = useNameValidation()

  const {
    mutate: createClientMutation,
    isLoading: formSubmitting,
    isError,
    error: errorDuringCrateClient
  } = useMutation(createClient, {
    onSuccess: () => {
      Alert.alert('Client successfully created')
      clearForm()
    },
    onError: error => {
      console.error('Error creating client:', error)
    }
  })

  const clearForm = () => {
    setEmail('')
    setFirstName('')
    setLastName('')
  }

  const handleCreateClient = () => {
    if (!isEmailValid) {
      Alert.alert('Invalid email')
      return
    }
    if (!isFirstNameValid) {
      Alert.alert('Invalid first name')
      return
    }
    if (!isLastNameValid) {
      Alert.alert('Invalid last name')
      return
    }

    createClientMutation({email, firstName, lastName})
  }

  return (
    <View style={g.form.container}>
      <Text style={g.form.heading}>Onboard Client</Text>
      <TextInput
        style={g.form.input}
        onChangeText={setEmail}
        value={email}
        placeholder="E-mailadres"
        keyboardType="email-address"
      />
      <TextInput
        style={g.form.input}
        onChangeText={setFirstName}
        value={firstName}
        placeholder="Voornaam"
      />
      <TextInput
        style={g.form.input}
        onChangeText={setLastName}
        value={lastName}
        placeholder="Achternaam"
      />
      {errorDuringCrateClient ? (
        <Text
          style={g.form.errorMessage}
        >{`Error: ${errorDuringCrateClient.message}`}</Text>
      ) : null}
      <Button
        title="Register Client"
        onPress={handleCreateClient}
        disabled={formSubmitting}
      />
      {formSubmitting && <ActivityIndicator size="large" color="#0000ff" />}
    </View>
  )
}

export default OnboardClientScreen
