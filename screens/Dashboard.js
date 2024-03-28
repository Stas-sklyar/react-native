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
        refetch: reFetchTasks,
    } = useQuery('fetchTasks', fetchTasks);

    const {
        data: takenTasks,
        error: errorDuringLoadingTakenTasks,
        isLoading: takenTasksIsLoading,
        refetch: reFetchTakenTasks,
    } = useQuery('fetchTakenTasks', fetchTakenTasks);

    const {
        data: exercises,
        error: errorDuringLoadingExercises,
        isLoading: exercisesIsLoading,
        refetch: reFetchExercises,
    } = useQuery('fetchExercises', fetchExercises);

    const onRefresh = useCallback(async () => {
        await Promise.all([reFetchTasks(), reFetchTakenTasks(), reFetchExercises()]);
    }, []);

    return (
        <ScrollView
            style={styles.container}
            refreshControl={
                <RefreshControl refreshing={false} onRefresh={onRefresh}/>
            }
        >
            <Text style={styles.heading}>Dashboard</Text>
            <Text style={styles.paragraph}>Dit is jouw dashboard.</Text>

            <Tasks
                tasks={tasks}
                errorDuringLoadingTasks={errorDuringLoadingTasks}
                tasksIsLoading={tasksIsLoading}
                takenTasks={takenTasks}
                errorDuringLoadingTakenTasks={errorDuringLoadingTakenTasks}
                takenTasksIsLoading={takenTasksIsLoading}
            />

            <Text style={styles.subHeading}>Opdrachten</Text>
            <Exercises
                exercises={exercises}
                errorDuringLoadingExercises={errorDuringLoadingExercises}
                exercisesIsLoading={exercisesIsLoading}
            />
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
    subHeading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
    },
    paragraph: {
        fontSize: 16,
        marginBottom: 20,
    },
});

export default DashboardScreen;
