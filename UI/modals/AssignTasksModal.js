import React, {useState} from 'react'
import {Text, View, StyleSheet, Alert} from 'react-native'
import CustomModal from './CustomModal'
import {useMutation, useQuery} from 'react-query'
import {fetchTasks} from '../../services/Task'
import RNPickerSelect from 'react-native-picker-select'
import {assignTaskToClient} from '../../services/Client'

const AssignTasksModal = ({modalIsVisible, setModalIsVisible, clientId}) => {
  const [selectedTask, setSelectedTask] = useState(null)

  const {
    data: tasks,
    error: errorDuringLoadingTasks,
    isLoading: tasksIsLoading
  } = useQuery('fetchTasks', fetchTasks)

  const {
    mutate: assignTaskToClientMutation,
    isLoading: submittingForm,
    error: errorDuringAssignTask
  } = useMutation(assignTaskToClient, {
    onSuccess: () => {
      Alert.alert('Tasks successfully assigned')
      closeModal()
    },
    onError: error => {
      Alert.alert('Error assigning task:', error)
    }
  })
  const assignTasks = () => {
    selectedTask
      ? assignTaskToClientMutation({clientId, taskId: selectedTask})
      : Alert.alert('No task selected')
  }

  const closeModal = () => {
    setModalIsVisible(false)
  }

  const selectPlaceholder = {
    label: 'Select a task',
    value: null
  }

  return (
    <View>
      <CustomModal
        isVisible={modalIsVisible}
        onClose={closeModal}
        onSubmit={assignTasks}
        submitBtnText='Assign task to client'
        submittingForm={submittingForm}
        error={errorDuringAssignTask ? errorDuringAssignTask.message : null}
      >
        <Text style={styles.title}>Assign tasks to client</Text>

        {tasksIsLoading && <Text>Loading tasks...</Text>}
        {errorDuringLoadingTasks && (
          <Text>Error loading tasks: {errorDuringLoadingTasks.message}</Text>
        )}
        {!tasksIsLoading && (
          <RNPickerSelect
            placeholder={selectPlaceholder}
            items={tasks.map(task => ({label: task.title, value: task['_id']}))}
            onValueChange={value => setSelectedTask(value)}
            value={selectedTask}
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

export default AssignTasksModal
