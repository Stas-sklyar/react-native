import React from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';

const tasks = ['Task 1', 'Task 2'];
const exercises = ['Exercise 1', 'Exercise 2'];

const DashboardScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.heading}>Dashboard</Text>
            <Text style={styles.paragraph}>Dit is jouw dashboard.</Text>

            <Text style={styles.subHeading}>Taken</Text>
            {tasks.length > 0 ? (
                tasks.map((task, index) => <Text key={index} style={styles.item}>{task}</Text>)
            ) : (
                <Text style={styles.item}>Geen taken toegewezen</Text>
            )}

            <Text style={styles.subHeading}>Opdrachten</Text>
            {exercises.length > 0 ? (
                exercises.map((exercise, index) => <Text key={index} style={styles.item}>{exercise}</Text>)
            ) : (
                <Text style={styles.item}>Geen opdrachten toegewezen</Text>
            )}
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
    item: {
        fontSize: 16,
        marginBottom: 5,
    },
});

export default DashboardScreen;
