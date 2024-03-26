import React, { useState } from 'react';
import {View, Text, TextInput, Switch, Button, StyleSheet, Alert, ActivityIndicator} from 'react-native';
import {useMutation} from "react-query";
import {createTask} from "../services/Task";

const TaskBuilderScreen = () => {
    const [taskName, setTaskName] = useState('');
    const [isRecurring, setIsRecurring] = useState(false);

    const { mutate, isLoading, isError, error } = useMutation(createTask, {
        onSuccess: () => {
           Alert.alert('Success', 'Task created successfully!');
            setTaskName('');
        },
        onError: (error) => {
            console.error('Error resetting password:', error);
        },
    });

    const handleSubmit = () => {
        if (!taskName.trim()) {
            Alert.alert('Validation', 'Title is required!');
        } else {
            mutate({ taskName, isRecurring });
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Taken ontwerper</Text>

            <TextInput
                style={styles.input}
                onChangeText={setTaskName}
                value={taskName}
                placeholder="Task name"
            />

            <View style={styles.switchContainer}>
                <Text style={styles.label}>Recurring task:</Text>
                <Switch
                    onValueChange={setIsRecurring}
                    value={isRecurring}
                />
                <Text>{isRecurring ? 'Yes' : 'No'}</Text>
            </View>

            {isError && <Text style={styles.error}>{`Error: ${error}`}</Text>}
            <Button title="Save" onPress={handleSubmit} disabled={isLoading} />
            {isLoading && (
                <ActivityIndicator size="large" color="#0000ff" />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        padding: 10,
    },
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    label: {
        marginRight: 10,
    },
    // Additional styles if needed
});

export default TaskBuilderScreen;
