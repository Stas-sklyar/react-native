import {View} from 'react-native'
import AssignExercisesModal from '../modals/AssignExerciseModal'
import AssignTasksModal from '../modals/AssignTasksModal'
import {useRoute} from '@react-navigation/native'

function Modals({
  assignExerciseModalIsVisible,
  setAssignExerciseModalIsVisible,
  assignTaskModalIsVisible,
  setAssignTaskModalIsVisible
}) {
  const route = useRoute()
  const {client} = route.params

  return (
    <View>
      {assignExerciseModalIsVisible && (
        <View>
          <AssignExercisesModal
            clientId={client.id}
            modalIsVisible={assignExerciseModalIsVisible}
            setModalIsVisible={setAssignExerciseModalIsVisible}
          />
        </View>
      )}
      {assignTaskModalIsVisible && (
        <View>
          <AssignTasksModal
            clientId={client.id}
            modalIsVisible={assignTaskModalIsVisible}
            setModalIsVisible={setAssignTaskModalIsVisible}
          />
        </View>
      )}
    </View>
  )
}

export default Modals
