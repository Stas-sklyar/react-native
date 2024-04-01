import {FlatList, StyleSheet, Text, View} from 'react-native'
import React from 'react'

function Tasks({
  tasks,
  errorDuringLoadingTasks,
  tasksIsLoading,
  takenTasks,
  errorDuringLoadingTakenTasks,
  takenTasksIsLoading
}) {
  return (
    <View>
      {tasksIsLoading && <Text>Loading tasks...</Text>}
      {errorDuringLoadingTasks && (
        <Text>Error loading tasks: {errorDuringLoadingTasks.message}</Text>
      )}
      {!tasksIsLoading && (
        <FlatList
          data={tasks}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <Text key={item.id} style={styles.item}>
              {item.title}
            </Text>
          )}
          ListEmptyComponent={
            <Text style={styles.item}>Geen taken toegewezen</Text>
          }
        />
      )}

      <Text style={styles.subHeading}>Taken</Text>
      {takenTasksIsLoading && <Text>Loading tasks...</Text>}
      {errorDuringLoadingTakenTasks && (
        <Text>Error loading tasks: {errorDuringLoadingTakenTasks.message}</Text>
      )}
      {!takenTasksIsLoading && (
        <FlatList
          data={takenTasks}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <Text key={item.id} style={styles.item}>
              {item.title}
            </Text>
          )}
          ListEmptyComponent={
            <Text style={styles.item}>Geen taken toegewezen</Text>
          }
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    fontSize: 16,
    marginBottom: 5
  },
  subHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10
  }
})

export default Tasks
