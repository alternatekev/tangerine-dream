import {FC, useRef} from 'react'

import {
  prepareStyles, 
  css, 
  useTheme,
  t,
  UIMode,
  transition,
  shadow
} from '@td/styles'
import {useAutoFocus} from '@td/utils'
import {
  FieldProps,
  ThemeState,
  UIBodyText,
  Level,
} from '@td/types'
import {Field} from '@td/components'

interface Props extends Omit<FieldProps, 'value' | 'defaultValue'> {
  value?: string
  defaultValue?: string
}

const getStyles = (
  theme: ThemeState, 
  fontTheme?: Pick<UIBodyText, 'font' | 'alignment' | 'lineHeight' | 'size' | 'inverted'>,
  weighted?: Level
) => {
  const {ui, colors} = theme
  const fontSize = fontTheme?.size || 2

  return prepareStyles({
    TextField: {
      ...transition,
      ...t.pa2,
      ...t[`mb${weighted}`],
      background: 'transparent',
      fontFamily: theme.ui.typography.nav.font,
      ...shadow(theme)[8],
      ...t.mt1,
      border: `1px ${ui.mode === UIMode.Dark ? colors.primary900 : colors.primary500} solid`,
      color: `${ui.mode === UIMode.Dark ? colors.secondary25 : colors.secondary200}`,
      fontSize: `${fontSize}rem`,
      ':focus': {
        backgroundColor: ui.mode === UIMode.Dark ? colors.black500 : colors.white500,
        border: `1px ${ui.mode === UIMode.Dark ? colors.primary500 : colors.primary700} solid`,
        ...shadow(theme)[9]
      }
    },
    isBlock: {
      ...t.db,
      width: ['-moz-available', '-webkit-fill-available']
    }
  })
}

export const TextField: FC<Props> = (props: Props) => {
  const { 
    name,
    label,
    fontTheme,
    weighted,
    defaultValue,
    autoFocus,
    block = true
  } = props
  const theme: ThemeState = useTheme()
  const styles = getStyles(theme, fontTheme, weighted)
  const ref = useRef(null)
  if (autoFocus) {
    useAutoFocus(ref)
  }
 
  return (
    <Field
      name={name}
      label={label}
    >
     {(formik) => {
        const {
        field, // { name, value, onChange, onBlur }
      } = formik

      return (
        <input
          css={css(styles.TextField, block && styles.isBlock)}
          ref={ref}
          {...field}
          type="text"
          defaultValue={defaultValue}
        />
      )}}
    </Field>
  )
}

