import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, ScrollView} from 'react-native';
import g from '../assets/styles/global';

const ExerciseBuilderScreen = () => {
    const [actions, setActions] = useState(['']);

    const addQuestionField = () => {
        setActions([...actions, '']);
    };

    const saveExercise = () => {
        console.log('Exercise saved');
        setActions(['']);
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.page}>
                {actions.map((action, index) => (
                    <View key={index} style={g.form.container}>
                        <TextInput
                            style={g.form.input}
                            value={action}
                            placeholder={`Title ${index + 1}`}
                        />

                        <TextInput
                            style={g.form.input}
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
    page: {
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        gap: 10
    }
});

export default ExerciseBuilderScreen;
