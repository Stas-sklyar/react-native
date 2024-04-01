import React, {useState} from 'react'
import {Text, View, StyleSheet, Alert} from 'react-native'
import CustomModal from './CustomModal'
import {useQuery} from 'react-query'
import RNPickerSelect from 'react-native-picker-select'
import {fetchExercises} from '../../services/Exercise'

const AssignExercisesModal = ({modalIsVisible, setModalIsVisible}) => {
  const [selectedExercise, setSelectedExercise] = useState(null)

  const {
    data: exercises,
    error: errorDuringLoadingExercises,
    isLoading: exercisesIsLoading,
    refetch: reFetchExercises
  } = useQuery('fetchExercises', fetchExercises)
  const assignTasks = () => {
    if (!selectedExercise) {
      Alert.alert('No task selected')
      return
    }
    console.log('Assigning tasks to client')
    setModalIsVisible(false)
  }

  const closeModal = () => {
    setModalIsVisible(false)
  }

  const selectPlaceholder = {
    label: 'Select a exercise',
    value: null
  }

  return (
    <View>
      <CustomModal
        isVisible={modalIsVisible}
        onClose={closeModal}
        onSubmit={assignTasks}
      >
        <Text style={styles.title}>Assign exercise to client</Text>

        {exercisesIsLoading && <Text>Loading exercises...</Text>}
        {errorDuringLoadingExercises && (
          <Text>
            Error loading exercises: {errorDuringLoadingExercises.message}
          </Text>
        )}
        {!exercisesIsLoading && (
          <RNPickerSelect
            placeholder={selectPlaceholder}
            items={exercises.map(exercise => ({
              label: exercise.title,
              value: exercise.id
            }))}
            onValueChange={value => {
              setSelectedExercise(value)
            }}
            value={selectedExercise}
          />
        )}
      </CustomModal>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    marginBottom: 20,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})

export default AssignExercisesModal
