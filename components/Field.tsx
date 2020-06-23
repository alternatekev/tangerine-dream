import {FC} from 'react'
import {Field as FormikField, FormikBag, FormikFormProps} from 'formik'

import {FieldProps, Dispensary} from '@td/types'
import {FieldLabel} from './'

interface Props extends Omit<FieldProps, 'formikProps'> {}

export const Field: FC<Props> = ({
  label,
  children,
  disabled,
  name
}: Props) =>
  <FormikField name={name}>
    {(formikBag: FormikBag<FormikFormProps, Dispensary>) =>
      <div>
        {label &&
          <FieldLabel
            for={name}
            disabled={disabled}
          >
            {label}
          </FieldLabel>
        }
        {typeof children === 'function' ? children(formikBag) : children}
      </div>
    }  
  </FormikField>
