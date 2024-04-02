import React, {useEffect, useState} from 'react'
import {
  View,
  TextInput,
  Button,
  Alert,
  Text,
  ActivityIndicator,
  Switch
} from 'react-native'
import g from '../assets/styles/global'
import useNameValidation from '../hooks/useNameValidation'
import {useMutation} from 'react-query'
import {createColleague, editColleague} from '../services/Colleague'

const EditColleagueScreen = ({route}) => {
  const {colleague} = route.params

  const [email, setEmail] = useState('')
  const {
    firstName,
    setFirstName,
    isFirstNameValid,
    lastName,
    setLastName,
    isLastNameValid
  } = useNameValidation()
  const [status, setStatus] = useState(false)

  const {
    mutate: editColleagueMutate,
    isLoading: editColleagueFormIsLoading,
    error: errorDuringEditColleague
  } = useMutation(editColleague, {
    onSuccess: () => {
      Alert.alert('Colleague successfully edited')
    },
    onError: error => {
      console.error('Error creating colleague:', error)
    }
  })

  const handleEditColleague = () => {
    if (!isFirstNameValid) {
      Alert.alert('Invalid first name')
      return
    }
    if (!isLastNameValid) {
      Alert.alert('Invalid last name')
      return
    }
    if (
      firstName === colleague.firstName &&
      lastName === colleague.lastName &&
      status === (colleague.status === 'active')
    ) {
      Alert.alert('You enter the same data')
      return
    }

    editColleagueMutate({
      id: colleague.id,
      email,
      firstName,
      lastName,
      status: status ? 'active' : 'inactive'
    })
  }

  const setInitialValue = () => {
    setEmail(colleague.email)
    setFirstName(colleague.firstName)
    setLastName(colleague.lastName)
    setStatus(colleague.status === 'active')
  }

  useEffect(() => {
    setInitialValue()
  }, [])

  return (
    <View style={g.form.container}>
      <TextInput
        style={g.form.input}
        onChangeText={setEmail}
        value={email}
        placeholder="E-mailadres"
        keyboardType="email-address"
        readOnly
      />
      <TextInput
        style={g.form.input}
        onChangeText={setFirstName}
        value={firstName}
        placeholder="First Name"
      />
      <TextInput
        style={g.form.input}
        onChangeText={setLastName}
        value={lastName}
        placeholder="Last Name"
      />
      <View style={g.form.switchContainer}>
        <Text>Status:</Text>
        <Switch onValueChange={setStatus} value={status} />
        <Text>{status ? 'Active' : 'Inactive'}</Text>
      </View>

      {errorDuringEditColleague ? (
        <Text
          style={g.form.errorMessage}
        >{`Error: ${errorDuringEditColleague.message}`}</Text>
      ) : null}
      <Button
        title="Change Colleague Data"
        onPress={handleEditColleague}
        disabled={editColleagueFormIsLoading}
      />
      {editColleagueFormIsLoading && (
        <ActivityIndicator size="large" color="#0000ff" />
      )}
    </View>
  )
}

export default EditColleagueScreen
