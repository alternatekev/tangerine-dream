import {BlockProps} from '@td/types'
import {FormikProps} from 'formik'
import {AuthorizedDispensary} from './Dispensary'

export interface FieldOption {
  label: string
  value: string | number
}

export interface FieldProps extends BlockProps {
  name: string
  value?: string | FieldOption
  defaultValue?: string | FieldOption
  disabled?: boolean
  label?: string
  placeholder?: string
  autoFocus?: boolean
  setFieldValue?(field: string, value: string): void
}

export interface FormProps {
  formikProps: FormikProps<AuthorizedDispensary>
  title?: string
}
