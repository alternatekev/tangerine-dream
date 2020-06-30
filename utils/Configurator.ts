import decamelize from 'decamelize'
import {words} from 'capitalize'
import {defaults} from '@td/data'

export const formatConfiguratorLabel = (label: string) => {
  return words(decamelize(label, ' '))
}

// tslint:disable-next-line no-any
export const mergeConfig = (key: string, toMerge: any) => {
  return {
    ...defaults,
    [key]: toMerge
  }
}
