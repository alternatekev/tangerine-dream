import decamelize from 'decamelize'

export const formatConfiguratorLabel = (label: string) => {
  return decamelize(label, ' ')
}