import {FC, useContext} from 'react'

import {
  AlignmentSelectField,
  VerticalAlignmentSelectField,
  PageTemplateSelectField,
  Header
} from '@td/components'
import {FormProps, PageContext} from '@td/types'
import {optionize} from '@td/utils'


export const PageLayoutForm: FC<FormProps> = ({
  formikProps
}: FormProps) => {
  const page = useContext(PageContext)

  return (
    <div>
      <Header level={2}>Page Layout</Header>
      <PageTemplateSelectField
        label="Page Template"
        weighted={4}
        name={`${page}.pageLayout.template`}
        value={optionize(formikProps.values.age.pageLayout.template)}
        setFieldValue={formikProps.setFieldValue}
      />
      <AlignmentSelectField
        label="Horizontal Alignment"
        weighted={4}
        name={`${page}.pageLayout.align`}
        value={optionize(formikProps.values.age.pageLayout.align)}
        setFieldValue={formikProps.setFieldValue}
      />
      <VerticalAlignmentSelectField
        label="Vertical Alignment"
        name={`${page}.pageLayout.verticalAlign`}
        value={optionize(formikProps.values.age.pageLayout.verticalAlign)}
        setFieldValue={formikProps.setFieldValue}
      />
    </div>
  )
}
