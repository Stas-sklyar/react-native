import React, { useState } from 'react';
import {View, Text, TextInput, Switch, Button, StyleSheet, Alert, ActivityIndicator} from 'react-native';
import {useMutation} from "react-query";
import {createTask} from "../services/Task";
import g from "../assets/styles/global";

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
        <View style={g.form.container}>
            <Text style={g.form.heading}>Taken ontwerper</Text>

            <TextInput
                style={g.form.input}
                onChangeText={setTaskName}
                value={taskName}
                placeholder="Task name"
            />

            <View style={g.form.switchContainer}>
                <Text>Recurring task:</Text>
                <Switch
                    onValueChange={setIsRecurring}
                    value={isRecurring}
                />
                <Text>{isRecurring ? 'Yes' : 'No'}</Text>
            </View>

            {isError && <Text style={g.form.errorMessage}>{`Error: ${error}`}</Text>}
            <Button title="Save" onPress={handleSubmit} disabled={isLoading} />
            {isLoading && (
                <ActivityIndicator size="large" color="#0000ff" />
            )}
        </View>
    );
};

export default TaskBuilderScreen;
