import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ClientDetailsScreen = ({ route }) => {
    // Предполагаем, что данные клиента передаются через параметры навигации
    const { client } = route.params;

    return (
        <View style={styles.container}>
            <View style={styles.infoContainer}>
                <Text style={styles.infoLabel}>Name:</Text>
                <Text style={styles.infoValue}>{client.name}</Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.infoLabel}>Email:</Text>
                <Text style={styles.infoValue}>{client.email}</Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.infoLabel}>Status:</Text>
                <Text style={styles.infoValue}>{client.status}</Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.infoLabel}>Begeleiders:</Text>
                {client.begeleiders.map((begeleider, index) => (
                    <Text key={index} style={styles.infoValue}>- {begeleider}</Text>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff'
    },
    infoContainer: {
        marginBottom: 10
    },
    infoLabel: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    infoValue: {
        fontSize: 16
    }
});

export default ClientDetailsScreen;
