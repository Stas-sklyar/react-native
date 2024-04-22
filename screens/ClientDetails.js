import {ScrollView} from 'react-native'
import ClientInfo from '../UI/ClientsDetail/ClientInfo'
import SupervisorsList from '../UI/ClientsDetail/SupervisorsList'
import styles from '../UI/ClientsDetail/styles'
import List from '../UI/ClientsDetail/List'
import Actions from '../UI/ClientsDetail/Actions'
import {useQuery} from 'react-query'
import {fetchTasksAssignedToSpecificClientId} from '../services/Task'
import {fetchExercisesAssignedToSpecificClientId} from '../services/Exercise'

const ClientDetailsScreen = ({route}) => {
  const {client} = route.params

  const {
    data: assignedTasks,
    error: errorDuringLoadingTasks,
    isLoading: tasksIsLoading
  } = useQuery(['fetchTasksAssignedToSpecificClientId', client['_id']], () =>
    fetchTasksAssignedToSpecificClientId(client['_id'])
  )

  const {
    data: assignedExercises,
    error: errorDuringLoadingExercises,
    isLoading: exercisesIsLoading
  } = useQuery(['fetchExercisesAssignedToSpecificClientId', client['_id']], () =>
    fetchExercisesAssignedToSpecificClientId(client['_id'])
  )

  return (
    <ScrollView style={styles.container}>
      <ClientInfo client={client} />
      <SupervisorsList supervisors={client.supervisors} />
      {!tasksIsLoading && !errorDuringLoadingTasks ? (
        <List title='Assigned tasks' items={assignedTasks} />
      ) : null}
      {!exercisesIsLoading && !errorDuringLoadingExercises ? (
        <List title='Assigned exercise' items={assignedExercises} />
      ) : null}
      <Actions />
    </ScrollView>
  )
}
export default ClientDetailsScreen
