import React, {useState} from 'react'
import {Text, View, StyleSheet, FlatList, Alert} from 'react-native'
import CustomModal from './CustomModal'
import {useQuery} from 'react-query'
import {fetchTasks} from '../../services/Task'
import RNPickerSelect from 'react-native-picker-select'

const AssignTasksModal = ({modalIsVisible, setModalIsVisible}) => {
  const [selectedTask, setSelectedTask] = useState(null)

  const {
    data: tasks,
    error: errorDuringLoadingTasks,
    isLoading: tasksIsLoading,
    refetch: reFetchTasks
  } = useQuery('fetchTasks', fetchTasks)
  const assignTasks = () => {
    if (!selectedTask) {
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
    label: 'Select a task',
    value: null
  }

  return (
    <View>
      <CustomModal
        isVisible={modalIsVisible}
        onClose={closeModal}
        onSubmit={assignTasks}
      >
        <Text style={styles.title}>Assign tasks to client</Text>

        {tasksIsLoading && <Text>Loading tasks...</Text>}
        {errorDuringLoadingTasks && (
          <Text>Error loading tasks: {errorDuringLoadingTasks.message}</Text>
        )}
        {!tasksIsLoading && (
          <RNPickerSelect
            placeholder={selectPlaceholder}
            items={tasks.map(task => ({label: task.title, value: task.id}))}
            onValueChange={value => {
              setSelectedTask(value)
            }}
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
