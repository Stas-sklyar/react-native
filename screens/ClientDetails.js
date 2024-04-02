import React, {useState} from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  ScrollView
} from 'react-native'
import AssignTasksModal from '../UI/modals/AssignTasksModal'
import AssignExercisesModal from '../UI/modals/AssignExerciseModal'

const ClientDetailsScreen = ({route}) => {
  const {client} = route.params
  const [assignTaskModalIsVisible, setAssignTaskModalIsVisible] =
    useState(false)
  const [assignExerciseModalIsVisible, setAssignExerciseModalIsVisible] =
    useState(false)

  return (
    <ScrollView style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Name:</Text>
        <Text style={styles.infoValue}>{client.name}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Email:</Text>
        <Text style={styles.infoValue}>{client.email}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Status:</Text>
        <Text style={styles.infoValue}>{client.status}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Begeleiders:</Text>
        {client.begeleiders.map((begeleider, index) => (
          <Text key={index} style={styles.infoValue}>
            - {begeleider}
          </Text>
        ))}
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Assigned tasks:</Text>
        {client.assignedTasks.map((task, index) => (
          <Text key={index} style={styles.infoValue}>
            - {task.title}
          </Text>
        ))}
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Assigned exercise:</Text>
        {client.assignedExercise.map((exercise, index) => (
          <Text key={index} style={styles.infoValue}>
            - {exercise.title}
          </Text>
        ))}
      </View>
      <View style={styles.buttonsContainer}>
        <Button
          styles={styles.assignButton}
          onPress={() => {
            setAssignTaskModalIsVisible(true)
          }}
          title="Assign tasks to client"
        />
        <Button
          styles={styles.assignButton}
          onPress={() => {
            setAssignExerciseModalIsVisible(true)
          }}
          title="Assign exercise to client"
        />
      </View>
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
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  infoContainer: {
    marginBottom: 20
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  infoValue: {
    fontSize: 16
  },
  buttonsContainer: {
    gap: 20
  }
})

export default ClientDetailsScreen
