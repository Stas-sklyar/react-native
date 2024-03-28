import React, { useState } from 'react';
import {View, Text, TextInput, Button, StyleSheet, Alert, ActivityIndicator} from 'react-native';
import { useMutation } from 'react-query';
import {resetPassword} from "../services/Auth";
import g from "../assets/styles/global";

const ResetPasswordScreen = () => {
    const [email, setEmail] = useState('');

    const { mutate, isLoading, isError, error, isSuccess } = useMutation(resetPassword, {
        onSuccess: () => {
            console.log('Password reset successfully');
        },
        onError: (error) => {
            console.error('Error resetting password:', error);
        },
    });

    const handleResetPassword = () => {
        mutate(email);
    };

    const handleSubmit = () => {
        if (!email.trim()) {
            Alert.alert('Validation', 'Email is required!');
        } else {
            handleResetPassword();
        }
    };

    return (
        <View style={g.form.container}>
            <Text style={g.form.heading}>Wachtwoord vergeten?</Text>
            <TextInput
                style={g.form.input}
                onChangeText={setEmail}
                value={email}
                placeholder="E-mailadres"
                keyboardType="email-address"
            />
            {isError && <Text style={g.form.errorMessage}>Er is een fout opgetreden</Text>}
            {isSuccess && <Text style={g.form.successMessage}>Wachtwoord is succesvol gereset. Please, check your email</Text>}
            <Button title="Reset wachtwoord" onPress={handleSubmit} disabled={isLoading} />
            {isLoading && (
                <ActivityIndicator size="large" color="#0000ff" />
            )}
        </View>
    );
};

export default ResetPasswordScreen;