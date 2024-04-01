import {Button, FlatList, StyleSheet, Text, View} from "react-native";

function ColleaguesList({colleagues, errorFetchingColleagues, colleaguesIsLoading, navigation }) {
    const handleView = (colleague) => {
        navigation.navigate('Colleagues Details', { colleague })
    };

    const handleEdit = (colleague) => {
        navigation.navigate('Edit Colleague', { colleague })
    };

    const handleDelete = (id) => {
        console.log('Deleting colleague with ID:', id);
    };

    const handleBlock = (id) => {
        console.log('Blocking colleague with ID:', id);
    };

    return (
        <View>
            {
                colleaguesIsLoading && <Text>Loading colleagues...</Text>
            }
            {
                errorFetchingColleagues && <Text>Error: {errorFetchingColleagues.message}</Text>
            }
            {
                !colleaguesIsLoading &&
                <FlatList
                    style={styles.colleagueList}
                    data={colleagues}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => (
                        <View style={styles.colleagueItem}>
                            <Text style={styles.colleagueText}>{item.firstName} {item.lastName} - {item.status}</Text>
                            <View style={styles.buttonsContainer}>
                                <Button title="View" onPress={() => handleView(item)}/>
                                <Button title="Edit" onPress={() => handleEdit(item)}/>
                                <Button title="Delete" onPress={() => handleDelete(item.id)}/>
                                <Button title="Block" onPress={() => handleBlock(item.id)} color="red"/>
                            </View>
                        </View>
                    )}
                    ListEmptyComponent={<Text>Empty list</Text>}
                />
            }
        </View>
    );
}

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

export default ColleaguesList;