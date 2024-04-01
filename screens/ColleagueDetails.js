import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const ColleagueDetailsScreen = ({route}) => {
  const {colleague} = route.params

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Name:</Text>
        <Text style={styles.infoValue}>
          {colleague.firstName + ' ' + colleague.lastName}
        </Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Email:</Text>
        <Text style={styles.infoValue}>{colleague.email}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Status:</Text>
        <Text style={styles.infoValue}>{colleague.status}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  infoContainer: {
    marginBottom: 10
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  infoValue: {
    fontSize: 16
  }
})

export default ColleagueDetailsScreen
