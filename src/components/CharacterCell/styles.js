import { StyleSheet } from 'react-native'
import { colors } from 'theme'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkGray,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    borderRadius: 15,

    paddingBottom: 10,
  },
  image: {
    height: 100,
    resizeMode: 'cover',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  infoContainer: {
    marginTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  name: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  status: {
    color: 'white',
    fontSize: 16,
    marginBottom: 10,
  },
  location: {
    color: colors.lightGray,
    fontSize: 16,
    marginBottom: 5,
  },
  locationName: {
    color: 'white',
    fontSize: 16,
    marginBottom: 10,
  },
  dot: (color) => ({
    marginTop: 6,
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
