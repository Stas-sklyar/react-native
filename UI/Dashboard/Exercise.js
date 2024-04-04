import {Button, StyleSheet, View, Text} from 'react-native'
import {useNavigation, useRoute} from '@react-navigation/native'

function Exercise({exercise}) {
  const navigation = useNavigation()
  const goToExerciseExecutionPage = () => {
    navigation.navigate('Exercise Execution', {exercise})
  }

  return (
    <View style={styles.exercise}>
      <Text style={styles.title}>{exercise.title}</Text>
      <View style={styles.buttonsContainer}>
        {exercise.finished ? (
          <Text style={styles.content}>Finished</Text>
        ) : (
          <Button title='Do exercise' onPress={goToExerciseExecutionPage} />
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  exercise: {
    backgroundColor: 'blue',
    padding: 15
  },
  title: {
    color: 'white',
    marginBottom: 10,
    fontSize: 18,
    fontWeight: 'bold'
  },
  content: {
    color: 'white'
  },
  buttonsContainer: {
    flexDirection: 'row',
    gap: 20
  }
})

export default Exercise
