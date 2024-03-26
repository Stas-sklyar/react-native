import {StyleSheet, Text, View} from "react-native";
import React from "react";

function Tasks({tasks}) {
    return (
        <View>
            {
                tasks && tasks.length > 0 ? (
                    tasks.map(task => <Text key={task.id} style={styles.item}>{task.title}</Text>)
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

export default Tasks;