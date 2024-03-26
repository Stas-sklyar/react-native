import React, {useCallback} from 'react';
import {Text, StyleSheet, ScrollView, RefreshControl} from 'react-native';
import {useQuery} from "react-query";
import {fetchTakenTasks, fetchTasks} from "../services/Task";
import Tasks from "../UI/Dashboard/Tasks";
import {fetchExercises} from "../services/Exercise";
import Exercises from "../UI/Dashboard/Exercises";

const DashboardScreen = () => {
    const {
        data: tasks,
        error: errorDuringLoadingTasks,
        isLoading: tasksIsLoading,
        refetch: reFetchTasks ,
    } = useQuery('fetchTasks', fetchTasks);

    const {
        data: takenTasks,
        error: errorDuringLoadingTakenTasks,
        isLoading: takenTasksIsLoading,
        refetch: reFetchTakenTasks
    } = useQuery('fetchTakenTasks', fetchTakenTasks);

    const {
        data: exercises,
        error: errorDuringLoadingExercises,
        isLoading: exercisesIsLoading,
        refetch: reFetchExercises
    } = useQuery('fetchExercises', fetchExercises);

    const onRefresh = useCallback(async () => {
        await Promise.all([
            reFetchTasks(),
            reFetchTakenTasks(),
            reFetchExercises()
        ]);
    }, []);

    return (
        <ScrollView
            style={styles.container}
            refreshControl={
                <RefreshControl refreshing={tasksIsLoading || takenTasksIsLoading || exercisesIsLoading} onRefresh={onRefresh} />
            }
        >
            <Text style={styles.heading}>Dashboard</Text>

            <Text style={styles.paragraph}>Dit is jouw dashboard.</Text>
            {
                tasksIsLoading ? <Text>Loading tasks...</Text> : <Tasks tasks={tasks} />
            }
            {
                errorDuringLoadingTasks ? <Text>Error loading tasks: {errorDuringLoadingTasks.message}</Text> : null
            }

            <Text style={styles.subHeading}>Taken</Text>
            {
                takenTasksIsLoading ? <Text>Loading taken tasks...</Text> : <Tasks tasks={takenTasks} />
            }
            {
                errorDuringLoadingTakenTasks ? <Text>Error loading taken tasks: {errorDuringLoadingTakenTasks.message}</Text> : null
            }

            <Text style={styles.subHeading}>Opdrachten</Text>
            {
                exercisesIsLoading ? <Text>Loading exercises...</Text> : <Exercises exercises={exercises} />
            }
            {
                errorDuringLoadingExercises ? <Text>Error loading exercises: {errorDuringLoadingExercises.message}</Text> : null
            }
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    paragraph: {
        fontSize: 16,
        marginBottom: 20,
    },
    subHeading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
    },
});

export default DashboardScreen;
