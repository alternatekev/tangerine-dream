import {BlockProps} from '@td/types'

export interface FieldOption {
  label: string
  value: string | number
}

export interface FieldProps extends BlockProps {
  name: string
  value?: string | FieldOption
  label?: string
  placeholder?: string
  autoFocus?: boolean
  setFieldValue?(field: string, value: string): void
}
