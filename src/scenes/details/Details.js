import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import {
  ScrollView, Text, View, Image,
} from 'react-native'
import getStatusColor from '../../helpers/statusColor'
import styles from './styles'

const Details = ({ route, navigation }) => {
  const item = route.params

  useEffect(() => {
    navigation.setOptions({ title: item.name })
  }, [])

  const color = getStatusColor(item.status)
  return (
    <ScrollView style={styles.container}>
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
    </ScrollView>
  )
}

Details.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
}

export default Details
