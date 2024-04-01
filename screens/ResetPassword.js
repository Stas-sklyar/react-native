import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  ActivityIndicator
} from 'react-native'
import {useMutation} from 'react-query'
import {resetPassword} from '../services/Auth'
import g from '../assets/styles/global'
import useEmailValidation from '../hooks/useEmailValidation'

const ResetPasswordScreen = () => {
  const {email, setEmail, isEmailValid} = useEmailValidation()

  const {
    mutate,
    isLoading: isLoading,
    isError,
    error,
    isSuccess
  } = useMutation(resetPassword, {
    onSuccess: () => {
      console.log('Password reset successfully')
    },
    onError: error => {
      console.error('Error resetting password:', error)
    }
  })

  const handleSubmit = () => {
    !isEmailValid
      ? Alert.alert('Please enter a valid email address.')
      : mutate(email)
  }

  return (
    <View style={g.form.container}>
      <Text style={g.form.heading}>Wachtwoord vergeten?</Text>
      <TextInput
        style={g.form.input}
        onChangeText={setEmail}
        value={email}
        placeholder="E-mailadres"
        keyboardType="email-address"
      />
      {isError && (
        <Text style={g.form.errorMessage}>Er is een fout opgetreden</Text>
      )}
      {isSuccess && (
        <Text style={g.form.successMessage}>
          Wachtwoord is succesvol gereset. Please, check your email
        </Text>
      )}
      <Button
        title="Reset wachtwoord"
        onPress={handleSubmit}
        disabled={isLoading}
      />
      {isLoading && <ActivityIndicator size="large" color="#0000ff" />}
    </View>
  )
}

export default ResetPasswordScreen
