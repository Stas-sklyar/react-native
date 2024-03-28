import {StyleSheet, Text, View} from "react-native";
import React, {useEffect} from "react";
import {useQuery} from "react-query";
import {fetchTakenTasks, fetchTasks} from "../../services/Task";

function Tasks({ updateDataToggle }) {
    const {
        data: tasks,
        error: errorDuringLoadingTasks,
        isLoading: tasksIsLoading,
        refetch: reFetchTasks,
        isSuccess: tasksReceivedSuccessfully
    } = useQuery('fetchTasks', fetchTasks);

    const {
        data: takenTasks,
        error: errorDuringLoadingTakenTasks,
        isLoading: takenTasksIsLoading,
        refetch: reFetchTakenTasks,
        isSuccess: takenTasksReceivedSuccessfully
    } = useQuery('fetchTakenTasks', fetchTakenTasks);

    useEffect(async () => {
        await Promise.all(
            [reFetchTasks(), reFetchTakenTasks()]
        )
    }, [updateDataToggle]);

    return (
        <View>
            {
                tasksIsLoading ? <Text>Loading tasks...</Text> : null
            }
            {
                errorDuringLoadingTasks ? <Text>Error loading tasks: {errorDuringLoadingTasks.message}</Text> : null
            }
            {
                (tasksReceivedSuccessfully && tasks.length > 0) ? (
                    tasks.map(task => <Text key={task.id} style={styles.item}>{task.title}</Text>)
                ) : <Text style={styles.item}>Geen taken toegewezen</Text>
            }

            <Text style={styles.subHeading}>Taken</Text>
            {
                takenTasksIsLoading ? <Text>Loading tasks...</Text> : null
            }
            {
                errorDuringLoadingTakenTasks ? <Text>Error loading tasks: {errorDuringLoadingTakenTasks.message}</Text> : null
            }

            {
                (takenTasksReceivedSuccessfully && tasks.length > 0) ? (
                    takenTasks.map(task => <Text key={task.id} style={styles.item}>{task.title}</Text>)
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

export default Tasks;