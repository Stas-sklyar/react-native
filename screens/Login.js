import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import {useAuth} from "../providers/Auth";
import g from "../assets/styles/global";

const LoginScreen = ({ navigation }) => {
    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log('Login with:', email, password);
        login();
    };

    const navigateToResetPassword = () => {
        navigation.navigate('ResetPassword')
    };

    return (
        <View style={g.form.container}>
            <Text>Logo Placeholder</Text>
            <Text style={g.form.heading}>Log in</Text>
            <TextInput
                style={g.form.input}
                onChangeText={setEmail}
                value={email}
                placeholder="E-mailadres"
                keyboardType="email-address"
            />
            <TextInput
                style={g.form.input}
                onChangeText={setPassword}
                value={password}
                placeholder="Wachtwoord"
                secureTextEntry
            />
            <Button title="Log in" onPress={handleLogin} />
            <TouchableOpacity onPress={navigateToResetPassword}>
                <Text style={g.form.link}>
                    Wachtwoord vergeten
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default LoginScreen;
