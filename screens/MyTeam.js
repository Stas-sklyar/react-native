import React, { useState } from 'react';
import {View, Text, TextInput, Button, StyleSheet, FlatList} from 'react-native';

const initialColleagues = [
    { id: '1', email: 'jan@example.com', firstName: 'Jan', lastName: 'Jansen', status: 'active' },
    { id: '2', email: 'piet@example.com', firstName: 'Piet', lastName: 'Pietersen', status: 'inactive' },
];

const MyTeamScreen = () => {
    const [colleagues, setColleagues] = useState(initialColleagues);
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleOnboardColleague = () => {
        console.log('Onboarding new colleague:', email, firstName, lastName);
    };

    const handleView = (id) => {
        console.log('Viewing colleague with ID:', id);
        // Логика для просмотра деталей коллеги
    };

    const handleEdit = (id) => {
        console.log('Editing colleague with ID:', id);
        // Логика для редактирования деталей коллеги
    };

    const handleDelete = (id) => {
        console.log('Deleting colleague with ID:', id);
        // Удалите коллегу из списка
        setColleagues(colleagues.filter(colleague => colleague.id !== id));
    };

    const handleBlock = (id) => {
        console.log('Blocking colleague with ID:', id);
        // Блокируйте коллегу (обновите статус)
    };

    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <Text style={styles.heading}>Nieuwe collega?</Text>
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
                <Button title="Register Colleague" onPress={handleOnboardColleague} />
            </View>

            <FlatList
                style={styles.colleagueList}
                data={colleagues}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.colleagueItem}>
                        <Text style={styles.colleagueText}>{item.firstName} {item.lastName} - {item.status}</Text>
                        <View style={styles.buttonsContainer}>
                            <Button title="View" onPress={() => handleView(item.id)} />
                            <Button title="Edit" onPress={() => handleEdit(item.id)} />
                            <Button title="Delete" onPress={() => handleDelete(item.id)} />
                            <Button title="Block" onPress={() => handleBlock(item.id)} color="red" />
                        </View>
                    </View>
                )}
            />
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
    form: {
        marginBottom: 20,
        width: '100%',
    },
    heading: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        marginBottom: 10,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        padding: 10,
    },
    colleagueList: {
      width: '100%'
    },
    colleagueItem: {
        width: '100%',
        backgroundColor: 'white',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
    colleagueText: {
        fontSize: 18,
        marginBottom: 10,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        columnGap: 10
    },
});

export default MyTeamScreen;
