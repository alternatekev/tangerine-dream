import {FC} from 'react'

import {
  AlignmentSelectField,
  VerticalAlignmentSelectField,
  PageTemplateSelectField,
  Header
} from '@td/components'
import {FormProps} from '@td/types'
import {optionize} from '@td/utils'


export const PageLayoutForm: FC<FormProps> = ({
  formikProps
}: FormProps) =>
  <div>
    {console.log(optionize(formikProps.values.age.pageLayout.verticalAlign))}
    <Header level={2}>Page Layout</Header>
    <PageTemplateSelectField 
      label="Page Template"
      weighted={4}
      name="template"
      value={optionize(formikProps.values.age.pageLayout.template)}
      setFieldValue={formikProps.setFieldValue}
    />
    <AlignmentSelectField
      label="Horizontal Alignment"
      weighted={4}
      name="align"
      value={optionize(formikProps.values.age.pageLayout.align)}
      setFieldValue={formikProps.setFieldValue}
    />
    <VerticalAlignmentSelectField
      label="Vertical Alignment"
      name="verticalAlign"
      value={optionize(formikProps.values.age.pageLayout.verticalAlign)}
      setFieldValue={formikProps.setFieldValue}
    />
  </div>
