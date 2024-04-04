import React, {useCallback} from 'react'
import {View, Text, TextInput, Button, StyleSheet, FlatList, RefreshControl} from 'react-native'
import {useQuery} from 'react-query'
import {fetchQuotes} from '../services/Quote'
import g from '../assets/styles/global'

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
        style={g.form.input}
        onChangeText={text => updateQuote(text, index)}
        value={item.quote}
        placeholder='Enter quote...'
      />
    </View>
  )

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Quotes planner</Text>
      {quotesIsLoading ? <Text>Loading quotes...</Text> : null}
      {error ? <Text>Error: {error.message}</Text> : null}
      <FlatList
        data={quotes}
        renderItem={renderQuoteItem}
        keyExtractor={(_, index) => String(index)}
        refreshControl={<RefreshControl refreshing={quotesIsLoading} onRefresh={onRefresh} />}
      />
      <Button title='Save' onPress={saveQuotes} />
    </View>
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
  }
})

export default QuotesPlannerScreen
