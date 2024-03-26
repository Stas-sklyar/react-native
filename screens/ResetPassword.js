import React, { useState } from 'react';
import {View, Text, TextInput, Button, StyleSheet, Alert, ActivityIndicator} from 'react-native';
import { useMutation } from 'react-query';
import {resetPassword} from "../services/Auth";

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
        <View style={styles.container}>
            <Text style={styles.heading}>Wachtwoord vergeten?</Text>
            <TextInput
                style={styles.input}
                onChangeText={setEmail}
                value={email}
                placeholder="E-mailadres"
                keyboardType="email-address"
            />
            {isError && <Text style={styles.error}>Er is een fout opgetreden</Text>}
            {isSuccess && <Text style={styles.success}>Wachtwoord is succesvol gereset. Please, check your email</Text>}
            <Button title="Reset wachtwoord" onPress={handleSubmit} disabled={isLoading} />
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
        fontSize: 24,
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
    error: {
        color: 'red',
        marginBottom: 10
    },
    success: {
        color: 'green',
        marginBottom: 10
    },
});

export default ResetPasswordScreen;