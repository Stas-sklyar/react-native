import styles from './styles'
import {Button, View} from 'react-native'
import React, {useState} from 'react'
import Modals from './Modals'

function Actions() {
  const [assignTaskModalIsVisible, setAssignTaskModalIsVisible] =
    useState(false)
  const [assignExerciseModalIsVisible, setAssignExerciseModalIsVisible] =
    useState(false)

  return (
    <View style={styles.buttonsContainer}>
      <Button
        onPress={() => {
          setAssignTaskModalIsVisible(true)
        }}
        title="Assign tasks to client"
      />
      <Button
        onPress={() => {
          setAssignExerciseModalIsVisible(true)
        }}
        title="Assign exercise to client"
      />

      <Modals
        assignTaskModalIsVisible={assignTaskModalIsVisible}
        setAssignTaskModalIsVisible={setAssignTaskModalIsVisible}
        assignExerciseModalIsVisible={assignExerciseModalIsVisible}
        setAssignExerciseModalIsVisible={setAssignExerciseModalIsVisible}
      />
    </View>
  )
}

export default Actions
