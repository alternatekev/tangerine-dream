import {FC} from 'react'

import {Field} from '@td/components'
import {css, t, prepareStyles, ThemeState, useTheme} from '@td/styles'
import {FieldProps, UIMode, Level} from '@td/types'

const getStyles = (theme: ThemeState, weighted: Level = 0) => {
  const {colors, ui} = theme

  return prepareStyles({
    ImageField: {
      maxWidth: 200,
      border: `1px ${ui.mode === UIMode.Dark ? colors.primary900 : colors.primary500} solid`,
      ...t[`mb${weighted}`]
    }
  })
}

export const ImageField: FC<FieldProps> = (props: FieldProps) => {
  const theme: ThemeState = useTheme()
  const styles = getStyles(theme, props.weighted)

  return (
    <Field {...props}>
      <img
        alt="image upload field"
        src={props.value as string || '/defaultImage.png'}
        css={css(styles.ImageField)}
      />
    </Field>
   
  )
}
  
