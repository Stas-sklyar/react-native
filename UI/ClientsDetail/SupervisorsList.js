import {Text, View} from 'react-native'
import React from 'react'
import styles from './styles'

function SupervisorsList({supervisors}) {
  return (
    <View style={styles.infoContainer}>
      <Text style={styles.infoLabel}>Begeleiders:</Text>
      {supervisors.map(supervisor => (
        <Text key={supervisor.id} style={styles.infoValue}>
          - {supervisor.name}
        </Text>
      ))}
    </View>
  )
}

export default SupervisorsList
