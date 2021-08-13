import { NativeModules } from 'react-native'

const getDeviceName = async () => {
  const { DeviceModule } = NativeModules

  try {
    const deviceName = await DeviceModule.getDeviceName()
    return deviceName
  } catch (e) {
    console.error(e)
    return ''
  }
}

export default getDeviceName
