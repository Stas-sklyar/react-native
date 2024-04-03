import {useState} from 'react'

const validateName = name => {
  return name.trim().length > 2 && /^[A-Za-zА-Яа-я]+$/.test(name.trim())
}

const useNameValidation = () => {
  const [firstName, setFirstName] = useState('')
  const [isFirstNameValid, setIsFirstNameValid] = useState(false)
  const [lastName, setLastName] = useState('')
  const [isLastNameValid, setIsLastNameValid] = useState(false)

  const handleNameChange = (name, setName, setIsNameValid) => {
    setName(name)
    setIsNameValid(validateName(name))
  }

  return {
    firstName,
    setFirstName: newName =>
      handleNameChange(newName, setFirstName, setIsFirstNameValid),
    isFirstNameValid,
    lastName,
    setLastName: newName =>
      handleNameChange(newName, setLastName, setIsLastNameValid),
    isLastNameValid
  }
}

export default useNameValidation
