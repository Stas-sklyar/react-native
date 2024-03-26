import React, { useState } from 'react';
import {View, Text, TextInput, Button, StyleSheet, Alert, ActivityIndicator} from 'react-native';
import {useMutation} from "react-query";
import {createClient} from "../services/Client";

const OnboardClientScreen = () => {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const { mutate, isLoading, isError, error } = useMutation(createClient, {
        onSuccess: () => {
            Alert.alert('Client successfully created');
            clearForm();
        },
        onError: (error) => {
            console.error('Error creating client:', error);
        },
    });

    const clearForm = () => {
        setEmail('')
        setFirstName('')
        setLastName('')
    }

    const handleResetPassword = () => {
        mutate({ email, firstName, lastName })
    };

    const handleSubmit = () => {
        handleResetPassword();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Onboard Client</Text>
            <TextInput
                style={styles.input}
                onChangeText={setEmail}
                value={email}
                placeholder="E-mailadres"
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                onChangeText={setFirstName}
                value={firstName}
                placeholder="Voornaam"
            />
            <TextInput
                style={styles.input}
                onChangeText={setLastName}
                value={lastName}
                placeholder="Achternaam"
            />

            {isError && <Text style={styles.error}>{`Error: ${error}`}</Text>}
            <Button title="Register Client" onPress={handleSubmit} disabled={isLoading} />
            {isLoading && (
                <ActivityIndicator size="large" color="#0000ff" />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    heading: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        padding: 10,
    },
});

export default OnboardClientScreen;