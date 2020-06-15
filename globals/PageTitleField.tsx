import {FC} from 'react'
import {FormikValues} from 'formik'

import {Sheet} from '@td/globals'
import {TextField} from '@td/components'
import {Viewport, Pages} from '@td/types'

interface Props {
  formikProps: FormikValues
  page: Pages
  setFieldValue(field: string, value: string): void
  onClick(contentType?: string): (e: MouseEvent | TouchEvent) => void
}

export const PageTitleField: FC<Props> = ({
  onClick,
  setFieldValue,
  formikProps,
  page
}: Props) =>
  <Sheet
    level={2}
    onClose={onClick()}
    viewport={Viewport.Top}
  >
    <TextField
      label="Page Title"
      value={formikProps.values[page].pageTitle.titleText}
      name="pageTitle"
      block
      autoFocus
      setFieldValue={setFieldValue}
    />
  </Sheet>
