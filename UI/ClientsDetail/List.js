import styles from './styles'
import {Text, View} from 'react-native'
function List({title, items}) {
  return (
    <View style={styles.infoContainer}>
      <Text style={styles.infoLabel}>{title}:</Text>
      {items.map(item => (
        <Text key={item.id} style={styles.infoValue}>
          - {item.title}
        </Text>
      ))}
    </View>
  )
}

export default List
