import React from 'react'
import {
  Button,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'

const CustomModal = ({isVisible, onClose, children, onSubmit}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonIcon}>×</Text>
          </TouchableOpacity>

          <View style={styles.contentContainer}>{children}</View>

          <View style={styles.buttonsContainer}>
            <Button title="Cancel" onPress={onClose} />
            <Button title="Assign Task" onPress={onSubmit} />
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)'
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },
  contentContainer: {
    marginBottom: 20
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 30
  },
  closeButtonIcon: {
    fontSize: 28,
    fontWeight: 'bold'
  }
})

export default CustomModal
