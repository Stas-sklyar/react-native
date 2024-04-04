import React, {useState} from 'react'
import {View, Text, TextInput, Button, StyleSheet, Alert} from 'react-native'
import {useMutation} from 'react-query'
import g from '../assets/styles/global'
import Loader from '../components/Loader'
import {createExerciseExecutionReport} from '../services/Exercise'
import {useAuth} from '../providers/Auth'

const ExerciseExecution = ({route, navigation}) => {
  const exercise = route.params.exercise
  const {clientId} = useAuth()
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState({})

  const {
    mutate: createExerciseExecutionReportMutation,
    isLoading: reportCreating,
    error: errorDuringReportCreation
  } = useMutation(createExerciseExecutionReport, {
    onSuccess: () => {
      Alert.alert('Success', 'Tank you!')
      setCurrentQuestionIndex(0)
      setAnswers({})
      navigation.navigate('Dashboard')
    },
    onError: error => {
      console.error('Error finishing exercise:', error)
    }
  })

  const handleAnswerChange = text => {
    setAnswers({...answers, [currentQuestionIndex]: text})
  }

  const goToNextQuestion = () => {
    if (isAnswerForCurrentQuestionValid()) {
      Alert.alert('Please answer the question')
      return
    }
    setCurrentQuestionIndex(currentQuestionIndex + 1)
  }

  const isAnswerForCurrentQuestionValid = () => {
    return (
      answers[currentQuestionIndex] === undefined || answers[currentQuestionIndex].trim() === ''
    )
  }

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
    }
  }

  const saveAnswers = () => {
    if (isAnswerForCurrentQuestionValid()) {
      Alert.alert('Please answer the question')
      return
    }

    createExerciseExecutionReportMutation({
      clientId,
      exerciseId: exercise.id,
      answers
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{exercise.title}</Text>
      <Text style={styles.question}>{exercise.questions[currentQuestionIndex]}</Text>

      <TextInput
        style={g.form.input}
        onChangeText={handleAnswerChange}
        value={answers[currentQuestionIndex] || ''}
      />

      <View style={styles.buttonsContainer}>
        {currentQuestionIndex !== 0 ? <Button title='Back' onPress={goToPreviousQuestion} /> : null}
        {currentQuestionIndex === exercise.questions.length - 1 ? (
          <Button title='Save' onPress={saveAnswers} disabled={reportCreating} />
        ) : (
          <Button title='Next' onPress={goToNextQuestion} />
        )}
        {errorDuringReportCreation ? (
          <Text style={g.form.errorMessage}>{errorDuringReportCreation.message}</Text>
        ) : null}
      </View>

      {reportCreating && <Loader />}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    gap: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  question: {
    fontSize: 18
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10
  },
  buttonsContainer: {
    flexDirection: 'row',
    gap: 10
  }
})

export default ExerciseExecution
