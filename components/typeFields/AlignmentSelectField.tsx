import {FC} from 'react'

import {
  SelectProps, 
  SelectField
} from '@td/components'
import {Alignment} from '@td/types'

const options = Object.keys(Alignment).map(k => ({
  label: k,
  // @ts-ignore
  value: Alignment[k]
}))

export const AlignmentSelectField: FC<SelectProps> = (props: SelectProps) => 
  <SelectField 
    {...props}
    options={options}
  />
