import React, {useCallback} from 'react'
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  FlatList,
  RefreshControl
} from 'react-native'
import {useQuery} from 'react-query'
import {fetchQuotes} from '../services/Quote'

const QuotesPlannerScreen = () => {
  const {
    data: quotes,
    error,
    isLoading: quotesIsLoading,
    refetch: refetchQuotes
  } = useQuery('fetchQuotes', fetchQuotes)

  const updateQuote = (text, index) => {
    console.log('Quote updated:', index, text)
  }

  const saveQuotes = () => {
    console.log('Quotes saved:', quotes)
  }

  const onRefresh = useCallback(async () => {
    await refetchQuotes()
  }, [])

  const renderQuoteItem = ({item, index}) => (
    <View style={styles.row}>
      <Text style={styles.weekNumber}>{item.week}</Text>
      <TextInput
        style={styles.quoteInput}
        onChangeText={text => updateQuote(text, index)}
        value={item.quote}
        placeholder="Enter quote..."
      />
    </View>
  )

  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={quotesIsLoading} onRefresh={onRefresh} />
      }
    >
      <Text style={styles.heading}>Quotes planner</Text>

      {quotesIsLoading ? <Text>Loading quotes...</Text> : null}
      {error ? <Text>Error: {error.message}</Text> : null}
      <FlatList
        data={quotes}
        renderItem={renderQuoteItem}
        keyExtractor={(_, index) => String(index)}
      />
      <Button title="Save" onPress={saveQuotes} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  weekNumber: {
    marginRight: 10,
    width: 50,
    fontSize: 16
  },
  quoteInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10
  }
})

export default QuotesPlannerScreen
