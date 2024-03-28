import React, {useCallback, useState} from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet,
    FlatList,
    RefreshControl,
    ScrollView,
    Alert,
    ActivityIndicator
} from 'react-native';
import {useMutation, useQuery} from "react-query";
import {createColleague, fetchColleagues} from "../services/Colleague";
import g from "../assets/styles/global";

const MyTeamScreen = () => {
    const { data: colleagues, error: errorFetchingColleagues, isLoading: colleaguesIsLoading, refetch: refetchColleagues } = useQuery('fetchColleagues', fetchColleagues);

    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const {
        mutate,
        isLoading: createColleagueFormIsLoading,
        isError: isErrorDuringCreateColleague,
        error: errorDuringCreateColleague
    } = useMutation(createColleague, {
        onSuccess: () => {
            Alert.alert('Colleague successfully created');
            clearForm();
        },
        onError: (error) => {
            console.error('Error creating colleague:', error);
        },
    });

    const clearForm = () => {
        setEmail('')
        setFirstName('')
        setLastName('')
    }

    const handleCreateColleague = () => {
        mutate({ email, firstName, lastName })
    };

    const handleOnboardColleague = () => {
        console.log('Onboarding new colleague:', email, firstName, lastName);
    };

    const handleView = (id) => {
        console.log('Viewing colleague with ID:', id);
    };

    const handleEdit = (id) => {
        console.log('Editing colleague with ID:', id);
    };

    const handleDelete = (id) => {
        console.log('Deleting colleague with ID:', id);
    };

    const handleBlock = (id) => {
        console.log('Blocking colleague with ID:', id);
    };

    const onRefresh = useCallback(async () => {
        await refetchColleagues()
    }, []);

    return (
        <ScrollView
            refreshControl={
                <RefreshControl refreshing={colleaguesIsLoading} onRefresh={onRefresh}/>
            }
        >
            <View style={g.form.container}>
                <Text style={g.form.heading}>Nieuwe collega?</Text>
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
                {isErrorDuringCreateColleague && <Text style={g.form.errorMessage}>{`Error: ${errorDuringCreateColleague}`}</Text>}
                <Button title="Register Colleague" onPress={handleCreateColleague} disabled={createColleagueFormIsLoading} />
                {createColleagueFormIsLoading && (
                    <ActivityIndicator size="large" color="#0000ff" />
                )}
            </View>

            {
                colleaguesIsLoading ? <Text>Loading colleagues...</Text> : null
            }
            {
                errorFetchingColleagues ? <Text>Error: {errorFetchingColleagues.message}</Text> : null
            }
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
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    colleagueList: {
      width: '100%',
      padding: 20,
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
