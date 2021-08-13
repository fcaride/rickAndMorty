import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity, Text, Image } from 'react-native'

const BackButton = () => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={{ flexDirection: 'row', marginLeft: 15, alignItems: 'center' }}
    >
      <Image
        source={require('../../../assets/images/backImage.png')}
        style={{ height: 15, width: 15 }}
      />
      <Text style={{ fontSize: 18, marginLeft: 5 }}>Back</Text>
    </TouchableOpacity>
  )
}

export default BackButton
