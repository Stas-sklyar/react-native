import React, {useState} from 'react'
import {
  View,
  Text,
  TextInput,
  Switch,
  Button,
  Alert,
  ActivityIndicator
} from 'react-native'
import {useMutation} from 'react-query'
import {createTask} from '../services/Task'
import g from '../assets/styles/global'
import Loader from "../components/Loader";

const TaskBuilderScreen = () => {
  const [taskName, setTaskName] = useState('')
  const [isRecurring, setIsRecurring] = useState(false)

  const {
    mutate: createTaskMutation,
    isLoading,
    error
  } = useMutation(createTask, {
    onSuccess: () => {
      Alert.alert('Success', 'Task created successfully!')
      setTaskName('')
    },
    onError: error => {
      console.error('Error resetting password:', error)
    }
  })

  const handleSubmit = () => {
    if (!taskName.trim()) {
      Alert.alert('Validation', 'Title is required!')
    } else {
      createTaskMutation({taskName, isRecurring})
    }
  }

  return (
    <View style={g.form.container}>
      <Text style={g.form.heading}>Taken ontwerper</Text>

      <TextInput
        style={g.form.input}
        onChangeText={setTaskName}
        value={taskName}
        placeholder="Task name"
      />

      <View style={g.form.switchContainer}>
        <Text>Recurring task:</Text>
        <Switch onValueChange={setIsRecurring} value={isRecurring} />
        <Text>{isRecurring ? 'Yes' : 'No'}</Text>
      </View>

      {error ? <Text style={g.form.errorMessage}>{`Error: ${error.message}`}</Text> : null}
      <Button title="Save" onPress={handleSubmit} disabled={isLoading} />
      {isLoading && <Loader />}
    </View>
  )
}

export default TaskBuilderScreen
