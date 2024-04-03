import React, {useCallback} from 'react'
import {
  Text,
  Button,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  RefreshControl,
  ScrollView
} from 'react-native'
import {useQuery} from 'react-query'
import {fetchClients} from '../services/Client'

const ClientsScreen = ({navigation}) => {
  const {
    data: clients,
    error,
    isLoading,
    refetch: refetchClients
  } = useQuery('fetchClients', fetchClients)
  const handleClientPress = client => {
    navigation.navigate('Client Details', {client})
  }

  const onRefresh = useCallback(async () => {
    await refetchClients()
  }, [])

  const getSupervisorsList = client => {
    return client.supervisors.map(item => item.name).join(', ')
  }

  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={isLoading} onRefresh={onRefresh} />
      }
    >
      <Button
        title="Onboard client"
        onPress={() => navigation.navigate('Onboard Client')}
      />

      {isLoading && <Text>Loading clients...</Text>}

      {error && <Text>Error loading clients: {error.message}</Text>}

      {!isLoading && (
        <FlatList
          data={clients}
          keyExtractor={client => client.id}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.item}
              onPress={() => handleClientPress(item)}
            >
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.details}>Begeleiders: {getSupervisorsList(item)}</Text>
              <Text style={styles.details}>Status: {item.status}</Text>
            </TouchableOpacity>
          )}
          ListEmptyComponent={<Text style={styles.item}>Empty list</Text>}
        />
      )}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    padding: 10
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  details: {
    fontSize: 14
  }
})

export default ClientsScreen
