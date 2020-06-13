import {FC, useRef} from 'react'
import {
  prepareStyles, 
  css, 
  useTheme,
  t,
  UIMode,
  transition
} from '@td/styles'
import {useAutoFocus} from '@td/utils'

const getStyles = (theme: ThemeState) => {
  const {ui, colors} = theme

   return prepareStyles({
    TextField: {
      ...transition,
      ...t.pa2,
      background: 'transparent',
      ...t.mt2,
      border: `1px ${ui.mode === UIMode.Dark ? colors.primary900 : colors.primary500} solid`,
      color: `${ui.mode === UIMode.Dark ? colors.secondary25 : colors.secondary200}`,
      ...t.f2,
      ':focus': {
        backgroundColor: ui.mode === UIMode.Dark ? colors.black500 : colors.white500,
        border: `1px ${ui.mode === UIMode.Dark ? colors.primary500 : colors.primary700} solid`,
      }
    },
    isBlock: {
      ...t.db,
      width: ['-moz-available', '-webkit-fill-available']
    }
  })
}

import {
  FieldProps, ThemeState,
} from '@td/types'

import {Field} from '@td/components'

interface Props extends FieldProps {}

export const TextField: FC<Props> = ({
  name,
  value,
  label,
  autoFocus,
  block = true
}: Props) => {
  const theme: ThemeState = useTheme()
  const styles = getStyles(theme)
  const ref = useRef(null)
  useAutoFocus(ref)
 
  return (
    <Field
      name={name}
      label={label}
    >
      <input
        css={css(styles.TextField, block && styles.isBlock)}
        ref={ref}
        type="text"
        value={typeof value === 'string' ? value : value?.value}
      />
    </Field>
  )
}

