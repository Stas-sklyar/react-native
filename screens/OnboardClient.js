import React, { useState } from 'react';
import {View, Text, TextInput, Button, Alert, ActivityIndicator} from 'react-native';
import {useMutation} from "react-query";
import {createClient} from "../services/Client";
import g from '../assets/styles/global';

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

    return (
        <View style={g.form.container}>
            <Text style={g.form.heading}>Onboard Client</Text>
            <TextInput
                style={g.form.input}
                onChangeText={setEmail}
                value={email}
                placeholder="E-mailadres"
                keyboardType="email-address"
            />
            <TextInput
                style={g.form.input}
                onChangeText={setFirstName}
                value={firstName}
                placeholder="Voornaam"
            />
            <TextInput
                style={g.form.input}
                onChangeText={setLastName}
                value={lastName}
                placeholder="Achternaam"
            />
            {isError && <Text style={g.form.errorMessage}>{`Error: ${error}`}</Text>}
            <Button title="Register Client" onPress={handleResetPassword} disabled={isLoading} />
            {isLoading && (
                <ActivityIndicator size="large" color="#0000ff" />
            )}
        </View>
    );
};

export default OnboardClientScreen;