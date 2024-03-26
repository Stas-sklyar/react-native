import {StyleSheet, Text, View} from "react-native";
import React from "react";

function Exercises({exercises}) {
    return (
        <View>
            {
                exercises && exercises.length > 0 ? (
                    exercises.map(exercise => <Text key={exercise.id} style={styles.item}>{exercise.title}</Text>)
                ) : (
                    <Text style={styles.item}>Geen taken toegewezen</Text>
                )
            }
        </View>
    );
}


const styles = StyleSheet.create({
    item: {
        fontSize: 16,
        marginBottom: 5,
    },
});

export default Exercises;