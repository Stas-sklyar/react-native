import {useState} from 'react'

const validateEmail = email => {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\\.,;:\s@\"]+\.)+[^<>()[\]\\.,;:\s@\"]{2,})$/i
  return re.test(email)
}

const useEmailValidation = () => {
  const [email, setEmail] = useState('')
  const [isEmailValid, setIsEmailValid] = useState(false)

  const handleEmailChange = newEmail => {
    setEmail(newEmail)
    setIsEmailValid(validateEmail(newEmail))
  }

  return {email, setEmail: handleEmailChange, isEmailValid}
}

export default useEmailValidation
