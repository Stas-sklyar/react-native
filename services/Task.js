import axios from 'axios'
import {apiBaseUrl} from '../config'

export const fetchTasks = async () => {
  try {
    const response = await axios.get(`${apiBaseUrl}/tasks`)
    return response.data
  } catch (error) {
    console.error('Failed to fetch exercises:', error)
    throw error
  }
}

export const fetchTakenTasks = async () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          title: 'Task 1',
          completed: true
        },
        {
          id: 3,
          title: 'Task 3',
          completed: false
        }
      ])
    }, 3000)
  })
}

export const createTask = async task => {
  try {
    const response = await axios.post(`${apiBaseUrl}/tasks`, task)
    return response.data
  } catch (error) {
    console.error('Failed to create exercise:', error)
    throw error
  }
}

export const fetchTasksAssignedToSpecificClientId = async clientId => {
  try {
    const response = await axios.get(`${apiBaseUrl}/clients/${clientId}/tasks`)
    return response.data
  } catch (error) {
    console.error(`Failed to fetch exercises assigned to client ${clientId}:`, error)
    throw error
  }
}
