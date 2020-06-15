import decamelize from 'decamelize'
import capitalize from 'capitalize'

export const formatConfiguratorLabel = (label: string) => {
  return capitalize(decamelize(label, ' '))
}
