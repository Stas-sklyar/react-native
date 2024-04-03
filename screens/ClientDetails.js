import {ScrollView} from 'react-native'
import ClientInfo from '../UI/ClientsDetail/ClientInfo'
import SupervisorsList from '../UI/ClientsDetail/SupervisorsList'
import styles from '../UI/ClientsDetail/styles'
import List from '../UI/ClientsDetail/List'
import Actions from '../UI/ClientsDetail/Actions'

const ClientDetailsScreen = ({route}) => {
  const {client} = route.params

  return (
    <ScrollView style={styles.container}>
      <ClientInfo client={client} />
      <SupervisorsList supervisors={client.supervisors} />
      <List title="Assigned tasks" items={client.assignedTasks} />
      <List title="Assigned exercise" items={client.assignedExercise} />
      <Actions />
    </ScrollView>
  )
}
export default ClientDetailsScreen
