import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import { getCharactersRequest } from '../../services/characters'
import getDeviceName from '../../services/deviceInfo'
import CharacterGrid from '../../components/CharacterGrid'
import styles from './styles'

const Home = ({ navigation }) => {
  const { characters } = useSelector((state) => state.characters)
  const disptach = useDispatch()
  const [deviceName, setDeviceName] = useState()

  useEffect(() => {
    getCharactersRequest(disptach)
    getDeviceName().then((name) => setDeviceName(name))
  }, [])

  useEffect(() => {
    navigation.setOptions({ title: deviceName })
  }, [deviceName])

  return (
    <View style={styles.root}>
      <CharacterGrid data={characters} />
    </View>
  )
}
Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    setOptions: PropTypes.func,
  }),
}

Home.defaultProps = {
  navigation: { navigate: () => null },
}

export default Home
