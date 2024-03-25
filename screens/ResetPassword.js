import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const ResetPasswordScreen = () => {
    const [email, setEmail] = useState('');

    const handleResetPassword = () => {
        console.log('Reset password for:', email);
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
            <Button title="Reset wachtwoord" onPress={handleResetPassword} />
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
});

export default ResetPasswordScreen;
