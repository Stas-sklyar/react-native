import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log('Login with:', email, password);
    };

    const navigateToResetPassword = () => {
        navigation.navigate('ResetPassword')
    };

    return (
        <View style={styles.container}>
            <View style={styles.logoPlaceholder}>
                <Text>Logo Placeholder</Text>
            </View>
            <Text style={styles.heading}>Log in</Text>
            <TextInput
                style={styles.input}
                onChangeText={setEmail}
                value={email}
                placeholder="E-mailadres"
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                onChangeText={setPassword}
                value={password}
                placeholder="Wachtwoord"
                secureTextEntry
            />
            <Button title="Log in" onPress={handleLogin} />
            <TouchableOpacity onPress={navigateToResetPassword}>
                <Text
                    style={styles.resetPasswordLink}
                >
                    Wachtwoord vergeten
                </Text>
            </TouchableOpacity>
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
    logoPlaceholder: {
        marginBottom: 20,
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
    resetPasswordLink: {
        color: 'blue',
        marginTop: 20,
    },
});

export default LoginScreen;
