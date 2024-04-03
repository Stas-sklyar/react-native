import {Button, StyleSheet, View, Text} from 'react-native'

function Task({task, taken}) {
  return (
    <View style={styles.task}>
      <Text style={styles.title}>{task.title}</Text>
      <View style={styles.buttonsContainer}>
        {!taken ? <Button title="Take" /> : <Button title="Cancel" />}
        {taken && <Button title="Complete" />}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  task: {
    backgroundColor: 'green',
    padding: 15
  },
  title: {
    color: 'white',
    marginBottom: 10,
    fontSize: 18,
    fontWeight: 'bold'
  },
  buttonsContainer: {
    flexDirection: 'row',
    gap: 20
  }
})

export default Task
