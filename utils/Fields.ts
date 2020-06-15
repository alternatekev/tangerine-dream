import {formatConfiguratorLabel} from '@td/utils'

export const optionize = (option: string) => ({
  value: option,
  label: formatConfiguratorLabel(option)
})
