import decamelize from 'decamelize'
import {words} from 'capitalize'

export const formatConfiguratorLabel = (label: string) => {
  return words(decamelize(label, ' '))
}
