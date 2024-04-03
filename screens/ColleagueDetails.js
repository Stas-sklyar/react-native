import React from 'react'
import {View, Text, StyleSheet, ScrollView} from 'react-native'

const ColleagueDetailsScreen = ({route}) => {
  const {colleague} = route.params

  return (
    <ScrollView style={styles.container}>
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
    </ScrollView>
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
