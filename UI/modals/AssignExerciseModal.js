import React, {useState} from 'react'
import {Text, View, StyleSheet, Alert} from 'react-native'
import CustomModal from './CustomModal'
import {useMutation, useQuery} from 'react-query'
import RNPickerSelect from 'react-native-picker-select'
import {fetchExercises} from '../../services/Exercise'
import {assignExerciseToClient} from '../../services/Client'

const AssignExercisesModal = ({modalIsVisible, setModalIsVisible, clientId}) => {
  const [selectedExercise, setSelectedExercise] = useState(null)

  const {
    data: exercises,
    error: errorDuringLoadingExercises,
    isLoading: exercisesIsLoading
  } = useQuery('fetchExercises', fetchExercises)

  const {
    mutate: assignExerciseToClientMutation,
    isLoading: submittingForm,
    error: errorDuringAssignExercise
  } = useMutation(assignExerciseToClient, {
    onSuccess: () => {
      Alert.alert('Exercise successfully assigned')
      closeModal()
    },
    onError: error => {
      Alert.alert('Error assigning Exercise:', error)
    }
  })
  const assignExercise = () => {
    selectedExercise
      ? assignExerciseToClientMutation({clientId, exerciseId: selectedExercise})
      : Alert.alert('No exercise selected')
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
        onSubmit={assignExercise}
        submitBtnText='Assign exercise to client'
        submittingForm={submittingForm}
        error={errorDuringAssignExercise ? errorDuringAssignExercise.message : null}
      >
        <Text style={styles.title}>Assign exercise to client</Text>

        {exercisesIsLoading && <Text>Loading exercises...</Text>}
        {errorDuringLoadingExercises && (
          <Text>Error loading exercises: {errorDuringLoadingExercises.message}</Text>
        )}
        {!exercisesIsLoading && (
          <RNPickerSelect
            placeholder={selectPlaceholder}
            items={exercises.map(exercise => ({
              label: exercise.title,
              value: exercise['_id']
            }))}
            onValueChange={value => setSelectedExercise(value)}
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
