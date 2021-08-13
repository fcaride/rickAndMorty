import { colors } from 'theme'

export default (color) => {
  switch (color) {
    case 'Dead':
      return colors.deadRed
    case 'Alive':
      return colors.green
    case 'unknown':
      return 'grey'

    default:
      return colors.green
  }
}
