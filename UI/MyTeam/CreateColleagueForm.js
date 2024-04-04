import g from '../../assets/styles/global'
import {Alert, Button, Text, TextInput, View} from 'react-native'
import useEmailValidation from '../../hooks/useEmailValidation'
import {useMutation} from 'react-query'
import {createColleague} from '../../services/Colleague'
import useNameValidation from '../../hooks/useNameValidation'
import Loader from '../../components/Loader'

function CreateColleagueForm() {
  const {email, setEmail, isEmailValid} = useEmailValidation()
  const {firstName, setFirstName, isFirstNameValid, lastName, setLastName, isLastNameValid} =
    useNameValidation()

  const {
    mutate: createColleagueMutate,
    isLoading: createColleagueFormIsLoading,
    isError: isErrorDuringCreateColleague,
    error: errorDuringCreateColleague
  } = useMutation(createColleague, {
    onSuccess: () => {
      Alert.alert('Colleague successfully created')
      clearForm()
    },
    onError: error => {
      console.error('Error creating colleague:', error)
    }
  })

  const clearForm = () => {
    setEmail('')
    setFirstName('')
    setLastName('')
  }

  const handleCreateColleague = () => {
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
    createColleagueMutate({email, firstName, lastName})
  }

  return (
    <View style={g.form.container}>
      <Text style={g.form.heading}>Nieuwe collega?</Text>
      <TextInput
        style={g.form.input}
        onChangeText={setEmail}
        value={email}
        placeholder='E-mailadres'
        keyboardType='email-address'
      />
      <TextInput
        style={g.form.input}
        onChangeText={setFirstName}
        value={firstName}
        placeholder='Voornaam'
      />
      <TextInput
        style={g.form.input}
        onChangeText={setLastName}
        value={lastName}
        placeholder='Achternaam'
      />

      {isErrorDuringCreateColleague && (
        <Text style={g.form.errorMessage}>{`Error: ${errorDuringCreateColleague.message}`}</Text>
      )}
      <Button
        title='Register Colleague'
        onPress={handleCreateColleague}
        disabled={createColleagueFormIsLoading}
      />
      {createColleagueFormIsLoading && <Loader />}
    </View>
  )
}

export default CreateColleagueForm
