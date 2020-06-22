import {FC, useRef, ChangeEvent} from 'react'
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

interface Props extends Omit<FieldProps, 'value'> {
  value?: string
}

const onChange = (setFieldValue: (field: string, value: string) => void, props: Props) => (e: ChangeEvent<HTMLInputElement>) => {
  console.log(`${props.name}: ${e.currentTarget.value}`)
  setFieldValue(props.name, e.currentTarget.value)
}

const getStyles = (
  theme: ThemeState, 
  fontTheme?: Pick<UIBodyText, 'font' | 'alignment' | 'lineHeight' | 'size' | 'inverted' | 'fields'>,
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

export const PasswordField: FC<Props> = (props: Props) => {
  const { 
    name,
    value,
    label,
    fontTheme,
    weighted,
    defaultValue,
    autoFocus,
    setFieldValue,
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
     {() =>
        <input
          css={css(styles.TextField, block && styles.isBlock)}
          ref={ref}
          onChange={setFieldValue && onChange(setFieldValue, props)}
          type="password"
          name={name}
          defaultValue={defaultValue as string}
          value={value}
        />
     }
    </Field>
  )
}

