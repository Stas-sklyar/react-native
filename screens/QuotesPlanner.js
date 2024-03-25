import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, FlatList } from 'react-native';

const QuotesPlannerScreen = () => {
    const initialQuotes = Array.from({ length: 53 }, (_, index) => ({
        week: index + 1,
        quote: `Quote N ${index + 1}`,
    }));
    const [quotes, setQuotes] = useState(initialQuotes);

    const updateQuote = (text, index) => {
        const updatedQuotes = [...quotes];
        updatedQuotes[index].quote = text;
        setQuotes(updatedQuotes);
    };

    const saveQuotes = () => {
        console.log('Quotes saved:', quotes);
    };

    const renderQuoteItem = ({ item, index }) => (
        <View style={styles.row}>
            <Text style={styles.weekNumber}>{item.week}</Text>
            <TextInput
                style={styles.quoteInput}
                onChangeText={(text) => updateQuote(text, index)}
                value={item.quote}
                placeholder="Enter quote..."
            />
        </View>
    );

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.heading}>Quotes planner</Text>
            <FlatList
                data={quotes}
                renderItem={renderQuoteItem}
                keyExtractor={(_, index) => String(index)}
            />
            <Button title="Save" onPress={saveQuotes} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    heading: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    weekNumber: {
        marginRight: 10,
        width: 50,
        fontSize: 16,
    },
    quoteInput: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        padding: 10,
    },
});

export default QuotesPlannerScreen;
