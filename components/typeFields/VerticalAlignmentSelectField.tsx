import {FC} from 'react'

import {
  SelectProps,
  SelectField
} from '@td/components'
import {VerticalAlignment} from '@td/types'

const options = Object.keys(VerticalAlignment).map(k => ({
  label: k,
  // @ts-ignore
  value: VerticalAlignment[k]
}))

export const VerticalAlignmentSelectField: FC<SelectProps> = (props: SelectProps) =>
  <SelectField
    {...props}
    options={options}
  />
