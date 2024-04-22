import axios from 'axios'
import {apiBaseUrl} from '../config'

export const fetchExercises = async () => {
  try {
    const response = await axios.get(`${apiBaseUrl}/exercises`)
    return response.data
  } catch (error) {
    console.error('Failed to fetch exercises:', error)
    throw error
  }
}

export const createExercise = async exercise => {
  try {
    const response = await axios.post(`${apiBaseUrl}/exercises`, exercise)
    return response.data
  } catch (error) {
    console.error('Failed to create exercise:', error)
    throw error
  }
}

export const createExerciseExecutionReport = async ({clientId, exerciseId, answers}) => {
  try {
    const response = await axios.post(`${apiBaseUrl}/exercises/${exerciseId}/execute`, {
      clientId,
      answers
    })
    return response.data
  } catch (error) {
    console.error('Failed to create exercise execution report:', error)
    throw error
  }
}

export const fetchExercisesAssignedToSpecificClientId = async clientId => {
  try {
    const response = await axios.get(`${apiBaseUrl}/clients/${clientId}/exercises`)
    return response.data
  } catch (error) {
    console.error(`Failed to fetch exercises assigned to client ${clientId}:`, error)
    throw error
  }
}
