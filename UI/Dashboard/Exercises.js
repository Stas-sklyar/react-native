import {FlatList, StyleSheet, Text, View} from 'react-native'
import Exercise from './Exercise'

function Exercises({exercises, errorDuringLoadingExercises, exercisesIsLoading}) {
  return (
    <View>
      {exercisesIsLoading && <Text>Loading exercises...</Text>}
      {errorDuringLoadingExercises && (
        <Text>Error loading exercises: {errorDuringLoadingExercises.message}</Text>
      )}
      {!exercisesIsLoading && (
        <FlatList
          data={exercises}
          keyExtractor={exercise => exercise.id}
          renderItem={({item}) => (
            <View key={item.id} style={styles.item}>
              <Exercise exercise={item} />
            </View>
          )}
          ListEmptyComponent={<Text style={styles.item}>Geen taken toegewezen</Text>}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    marginBottom: 5
  },
  subHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10
  }
})

export default Exercises
