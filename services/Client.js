import axios from 'axios'
import {apiBaseUrl} from '../config'

export const fetchClients = async () => {
  try {
    const response = await axios.get(`${apiBaseUrl}/clients`)
    return response.data
  } catch (error) {
    console.error('Failed to fetch clients:', error)
    throw error
  }
}

export const createClient = async client => {
  try {
    client.status = 'active'
    client.supervisors = []

    const response = await axios.post(`${apiBaseUrl}/clients`, client)
    return response.data
  } catch (error) {
    console.error('Failed to create client:', error)
    throw error
  }
}

export const assignTaskToClient = async ({clientId, taskId}) => {
  try {
    const response = await axios.post(`${apiBaseUrl}/clients/${clientId}/tasks/${taskId}`)
    return response.data
  } catch (error) {
    console.error('Failed to assign task to client:', error)
    throw error
  }
}

export const assignExerciseToClient = async ({clientId, exerciseId}) => {
  try {
    const response = await axios.post(`${apiBaseUrl}/clients/${clientId}/exercises/${exerciseId}`)
    return response.data
  } catch (error) {
    console.error('Failed to assign exercise to client:', error)
    throw error
  }
}
