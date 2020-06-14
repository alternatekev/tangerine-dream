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
} from '@td/types'
import { Field } from '@td/components'

interface Props extends Omit<FieldProps, 'value'> {
  value?: string
}

const onChange = (setFieldValue: (field: string, value: string) => void, props: Props) => (e: ChangeEvent<HTMLInputElement>) => {
  setFieldValue(props.name, e.currentTarget.value)
}

const getStyles = (theme: ThemeState) => {
  const { ui, colors } = theme

  return prepareStyles({
    TextField: {
      ...transition,
      ...t.pa2,
      background: 'transparent',
      ...shadow(theme)[8],
      ...t.mt2,
      border: `1px ${ui.mode === UIMode.Dark ? colors.primary900 : colors.primary500} solid`,
      color: `${ui.mode === UIMode.Dark ? colors.secondary25 : colors.secondary200}`,
      ...t.f2,
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
    value,
    label,
    autoFocus,
    setFieldValue,
    block = true
  } = props
  const theme: ThemeState = useTheme()
  const styles = getStyles(theme)
  const ref = useRef(null)
  if(autoFocus) {
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
          type="text"
          value={value}
        />
     }
    </Field>
  )
}

