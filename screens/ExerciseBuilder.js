import React, {useState} from 'react'
import {View, TextInput, Button, StyleSheet, ScrollView, Alert} from 'react-native'
import g from '../assets/styles/global'
import {useMutation} from 'react-query'
import Loader from '../components/Loader'
import {createExercise} from '../services/Exercise'

const ExerciseBuilderScreen = () => {
  const {
    mutate: createExerciseMutation,
    isLoading: exerciseCreating,
    error: errorDuringExerciseCreation
  } = useMutation(createExercise, {
    onSuccess: () => {
      Alert.alert('Success', 'Exercise created successfully!')
      clearForm()
    },
    onError: error => {
      console.error('Error creating exercise:', error)
    }
  })

  const [questions, setQuestions] = useState([''])
  const [exerciseTitle, setExerciseTitle] = useState('')

  const addQuestionFields = () => {
    setQuestions([...questions, ''])
  }

  const saveExercise = () => {
    formIsValid() ? createExerciseMutation({title: exerciseTitle, questions}) : null
  }

  const formIsValid = () => {
    if (exerciseTitle.trim().length === 0) {
      Alert.alert('Error', 'Please add a title to the exercise')
      return false
    }

    if (isEmptyQuestionsArr()) {
      Alert.alert('Error', 'Please add at least one question')
      return false
    }

    return true
  }

  const clearForm = () => {
    setQuestions([''])
    setExerciseTitle('')
  }

  const isEmptyQuestionsArr = () => {
    const notEmptyItemsInArr = questions.filter(question => question.trim().length > 0)
    return notEmptyItemsInArr.length === 0
  }

  const handleActionChange = (index, value) => {
    const newQuestions = [...questions]
    newQuestions[index] = value
    setQuestions(newQuestions)
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.page}>
        <View style={g.form.container}>
          <TextInput
            style={g.form.input}
            value={exerciseTitle}
            placeholder={`Title of Exercise`}
            onChangeText={value => setExerciseTitle(value)}
          />

          {questions.map((question, index) => (
            <TextInput
              key={index}
              style={g.form.input}
              value={question}
              placeholder={`Question ${index + 1}`}
              onChangeText={value => handleActionChange(index, value)}
            />
          ))}
        </View>

        <View style={styles.buttonContainer}>
          <Button
            title='Add Answer Field'
            onPress={addQuestionFields}
            disabled={exerciseCreating}
          />
          <Button title='Save' onPress={saveExercise} disabled={exerciseCreating} />
          {exerciseCreating && <Loader />}
          {errorDuringExerciseCreation ? (
            <Text style={g.form.errorMessage}>
              {`Error: ${errorDuringExerciseCreation.message}`}
            </Text>
          ) : null}
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 20,
    gap: 10
  }
})

export default ExerciseBuilderScreen
