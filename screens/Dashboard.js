import React, {useCallback, useState} from 'react';
import {Text, StyleSheet, ScrollView, RefreshControl} from 'react-native';
import {useQuery} from "react-query";
import {fetchTakenTasks, fetchTasks} from "../services/Task";
import Tasks from "../UI/Dashboard/Tasks";
import {fetchExercises} from "../services/Exercise";
import Exercises from "../UI/Dashboard/Exercises";

const DashboardScreen = () => {
    const [updateDataToggle, setUpdateDataToggle] = useState(false);
    const onRefresh = useCallback(async () => {
        setUpdateDataToggle(prevState => !prevState);
    }, []);

    return (
        <ScrollView
            style={styles.container}
        >
            {/* TODO: LOADER */}
            <Text style={styles.heading}>Dashboard</Text>
            <Text style={styles.paragraph}>Dit is jouw dashboard.</Text>

            <Tasks updateDataToggle={updateDataToggle} />

            <Text style={styles.subHeading}>Opdrachten</Text>
            <Exercises updateDataToggle={updateDataToggle} />
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
});

export default DashboardScreen;
