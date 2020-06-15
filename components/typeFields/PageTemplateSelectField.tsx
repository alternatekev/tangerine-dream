import {FC} from 'react'

import {
  SelectProps,
  SelectField
} from '@td/components'
import {PageTemplate} from '@td/types'

export const PageTemplateSelectField: FC<SelectProps> = (props: SelectProps) =>
  <SelectField
    {...props}
    options={
      Object.keys(PageTemplate).map(k => ({
        label: k,
        // @ts-ignore
        value: PageTemplate[k]
      }))
    }
  />
