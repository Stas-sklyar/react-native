import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, ScrollView} from 'react-native';

const ExerciseBuilderScreen = () => {
    const [actions, setActions] = useState(['']);

    const addQuestionField = () => {
        setActions([...actions, '']);
    };

    const saveExercise = () => {
        console.log('Exercise saved');
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.page}>
                {actions.map((action, index) => (
                    <View key={index} style={styles.questionItem}>
                        <TextInput
                            style={styles.input}
                            value={action}
                            placeholder={`Title ${index + 1}`}
                        />

                        <TextInput
                            style={styles.input}
                            value={action}
                            placeholder={`Question ${index + 1}`}
                        />
                    </View>
                ))}
                <View style={styles.buttonContainer}>
                    <Button title="Add Answer Field" onPress={addQuestionField}/>
                    <Button title="Save" onPress={saveExercise}/>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    page: {
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    questionItem: {
        width: '100%'
    },
    input: {
        width: '100%',
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        padding: 10,
    },
    buttonContainer: {
        gap: 10
    }
});

export default ExerciseBuilderScreen;
