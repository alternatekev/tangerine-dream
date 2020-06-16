import {FC} from 'react'

import {
  AlignmentSelectField,
  VerticalAlignmentSelectField,
  TextField,
  Header,
  ImageField
} from '@td/components'
import {FormProps} from '@td/types'
import {optionize} from '@td/utils'

export const ImageForm: FC<FormProps> = ({
  formikProps,
  title
}: FormProps) =>
  <div>
    <Header level={2}>{title || 'Image'}</Header>
    <ImageField 
      name="background"
      label="Image"
      value={formikProps.values.age.backgroundImage.src}
      weighted={2}
    />
    <TextField 
      name="alt"
      label="Alt Text"
      fontTheme={{size: 1.25}}
      weighted={2}
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
