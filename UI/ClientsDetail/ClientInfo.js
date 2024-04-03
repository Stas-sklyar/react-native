import {Text, View} from 'react-native'
import React from 'react'
import styles from './styles'

function ClientInfo({client}) {
  return (
    <View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Name:</Text>
        <Text style={styles.infoValue}>{client.name}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Email:</Text>
        <Text style={styles.infoValue}>{client.email}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Status:</Text>
        <Text style={styles.infoValue}>{client.status}</Text>
      </View>
    </View>
  )
}

export default ClientInfo
