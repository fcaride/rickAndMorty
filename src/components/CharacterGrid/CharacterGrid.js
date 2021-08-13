import React from 'react'
import PropTypes from 'prop-types'
import { FlatList } from 'react-native'
import CharacterCell from '../CharacterCell'

const CharactersGrid = ({ data }) => (
  <FlatList
    data={data}
    renderItem={({ item }) => <CharacterCell item={item} />}
    numColumns={2}
    keyExtractor={(item, index) => index.toString()}
  />
)

CharactersGrid.propTypes = {
  data: PropTypes.array.isRequired,
}

export default CharactersGrid
