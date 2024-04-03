import React, {useState} from 'react'
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  Alert
} from 'react-native'
import g from '../assets/styles/global'
import {useMutation} from 'react-query'
import {createTask} from '../services/Task'
import Loader from '../components/Loader'

const emptyAction = {
  title: '',
  question: ''
}

const ExerciseBuilderScreen = () => {
  const {
    mutate: createExerciseMutation,
    isLoading: exerciseCreating,
    error: errorDuringExerciseCreation
  } = useMutation(createTask, {
    onSuccess: () => {
      Alert.alert('Success', 'Exercise created successfully!')
      clearForm()
    },
    onError: error => {
      console.error('Error creating exercise:', error)
    }
  })

  const [actions, setActions] = useState([{...emptyAction}])

  const addActionFields = () => {
    setActions([...actions, {...emptyAction}])
  }

  const saveExercise = () => {
    createExerciseMutation({exercise: actions})
  }

  const clearForm = () => {
    setActions([{...emptyAction}])
  }

  const handleActionChange = (index, key, value) => {
    console.log(index, key, value)
    const newActions = [...actions]
    newActions[index][key] = value
    setActions(newActions)
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.page}>
        {actions.map((action, index) => (
          <View key={index} style={g.form.container}>
            <TextInput
              style={g.form.input}
              value={action.title}
              placeholder={`Title ${index + 1}`}
              onChangeText={value => handleActionChange(index, 'title', value)}
            />

            <TextInput
              style={g.form.input}
              value={action.question}
              placeholder={`Question ${index + 1}`}
              onChangeText={value =>
                handleActionChange(index, 'question', value)
              }
            />
          </View>
        ))}
        <View style={styles.buttonContainer}>
          <Button
            title='Add Answer Field'
            onPress={addActionFields}
            disabled={exerciseCreating}
          />
          <Button
            title='Save'
            onPress={saveExercise}
            disabled={exerciseCreating}
          />
          {exerciseCreating && <Loader />}
          {errorDuringExerciseCreation && (
            <Text
              style={g.form.errorMessage}
            >{`Error: ${errorDuringExerciseCreation.message}`}</Text>
          )}
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
