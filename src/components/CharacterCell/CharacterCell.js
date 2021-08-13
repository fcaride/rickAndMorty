import React from 'react'
import PropTypes from 'prop-types'
import {
  TouchableOpacity, View, Text, Image,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import getStatusColor from '../../helpers/statusColor'
import styles from './styles'

const CharacterCell = ({ item }) => {
  const navigation = useNavigation()

  const color = getStatusColor(item.status)

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('Details', item)}
    >
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <View style={styles.statusContainer}>
          <View style={styles.dot(color)} />
          <Text style={styles.status}>
            {item.status} - {item.species}
          </Text>
        </View>

        <Text style={styles.location}>Last known location:</Text>
        <Text style={styles.locationName}>{item.location.name}</Text>

        <Text style={styles.location}>First seen in:</Text>
        <Text style={styles.locationName}>{item.origin.name}</Text>
      </View>
    </TouchableOpacity>
  )
}

CharacterCell.propTypes = {
  item: PropTypes.object.isRequired,
}
export default CharacterCell
