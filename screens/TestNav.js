import React from 'react';
import {StyleSheet, ScrollView, TouchableOpacity, Text} from 'react-native';
import {useAuth} from "../providers/Auth";
const TestNav = ({ navigation }) => {
    const { logout } = useAuth();

    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Dashboard')}>
                <Text>Dashboard</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.item} onPress={() => logout()}>
                <Text>Logout</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('ResetPassword')}>
                <Text>ResetPassword</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Clients')}>
                <Text>Clients</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('OnboardClient')}>
                <Text>OnboardClient</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('MyTeam')}>
                <Text>My Team</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('ExerciseBuilder')}>
                <Text>ExerciseBuilderScreen</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('TaskBuilder')}>
                <Text>TaskBuilder</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('QuotesPlanner')}>
                <Text>QuotesPlanner</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    item: {
        marginBottom: 20,
    }
});

export default TestNav
