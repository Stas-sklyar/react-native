import React from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const clientsData = [
    { id: '1', name: 'Клиент 1', begeleiders: ['Бегелейдер 1', 'Бегелейдер 2'], status: 'active' },
    { id: '2', name: 'Клиент 2', begeleiders: ['Бегелейдер 2'], status: 'inactive' },
];

const ClientsScreen = ({ navigation }) => {
    const handleClientPress = (clientId) => {
        navigation.navigate('ConsultModeScreen', { clientId: clientId });
    };

    return (
        <View style={styles.container}>
            <Button title="Onboard client" onPress={() => console.log('Onboard client')} />
            <FlatList
                data={clientsData}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.item} onPress={() => handleClientPress(item.id)}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.details}>Begeleiders: {item.begeleiders.join(', ')}</Text>
                        <Text style={styles.details}>Status: {item.status}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        padding: 10
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    details: {
        fontSize: 14,
    },
});

export default ClientsScreen;
