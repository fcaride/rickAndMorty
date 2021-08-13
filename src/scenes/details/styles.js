import { StyleSheet } from 'react-native'
import { colors } from 'theme'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkGray,
    padding: 10,
  },
  image: {
    height: 200,
    resizeMode: 'contain',
    marginTop: 20,
  },
  infoContainer: {
    marginTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  name: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    marginBottom: 5,
    marginTop: 20,
  },
  status: {
    color: 'white',
    fontSize: 18,
    marginBottom: 30,
  },
  location: {
    color: colors.lightGray,
    fontSize: 18,
    marginBottom: 5,
  },
  locationName: {
    color: 'white',
    fontSize: 19,
    marginBottom: 10,
  },
  dot: (color) => ({
    marginTop: 7,
    height: 7,
    width: 7,
    borderRadius: 3.5,
    backgroundColor: color,
    marginRight: 10,
  }),
  statusContainer: {
    flexDirection: 'row',
  },
})
