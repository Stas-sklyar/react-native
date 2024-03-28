import {StyleSheet, Text, View} from "react-native";
import React, {useEffect} from "react";
import {useQuery} from "react-query";
import {fetchExercises} from "../../services/Exercise";

function Exercises({ updateDataToggle }) {
    const {
        data: exercises,
        error: errorDuringLoadingExercises,
        isLoading: exercisesIsLoading,
        refetch: reFetchExercises,
        isSuccess: exercisesReceivedSuccessfully
    } = useQuery('fetchExercises', fetchExercises);

    useEffect(async () => {
        await reFetchExercises();
    }, [updateDataToggle]);

    return (
        <View>
            {
                exercisesIsLoading ? <Text>Loading exercises...</Text> : <Exercises exercises={exercises} />
            }
            {
                errorDuringLoadingExercises ? <Text>Error loading exercises: {errorDuringLoadingExercises.message}</Text> : null
            }
            {
                (exercisesReceivedSuccessfully && exercises.length > 0) ? (
                    exercises.map(exercise => <Text key={exercise.id} style={styles.item}>{exercise.title}</Text>)
                ) : <Text style={styles.item}>Geen taken toegewezen</Text>
            }
        </View>
    );
}


const styles = StyleSheet.create({
    item: {
        fontSize: 16,
        marginBottom: 5,
    },
    subHeading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
    },
});

export default Exercises;