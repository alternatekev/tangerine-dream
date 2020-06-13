import {FC} from 'react'

import {FieldProps} from '@td/types'
import {FieldLabel} from './'

export const Field: FC<FieldProps> = ({
  label,
  children,
  name
}: FieldProps) =>
  <div>
    {label && <FieldLabel for={name}>{label}</FieldLabel>}
    {children}
  </div>