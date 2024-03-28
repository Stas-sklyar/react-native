import {FlatList, StyleSheet, Text, View} from "react-native";

function Exercises({ exercises, errorDuringLoadingExercises, exercisesIsLoading}) {
    return (
        <View>
            {
                exercisesIsLoading && <Text>Loading exercises...</Text>
            }
            {
                errorDuringLoadingExercises && <Text>Error loading exercises: {errorDuringLoadingExercises.message}</Text>
            }
            {
                !exercisesIsLoading &&
                <FlatList
                    data={exercises}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => (
                        <Text key={item.id} style={styles.item}>{item.title}</Text>
                    )}
                    ListEmptyComponent={<Text style={styles.item}>Geen taken toegewezen</Text>}
                />
            }
        </View>
    );
}


const styles = StyleSheet.create({
    item: {
        fontSize: 16,
        marginBottom: 5,
    },
    subHeading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
    },
});

export default Exercises;