import {FC, useRef, ChangeEvent} from 'react'
import ChevronDownIcon from 'mdi-react/ChevronDownIcon'

import {
  prepareStyles,
  css,
  useTheme,
  t,
  UIMode,
  transition,
} from '@td/styles'
import {
  FieldProps,
  ThemeState,
  FieldOption
} from '@td/types'
import {Field} from '@td/components'

interface Props extends Omit<FieldProps, 'value'> {
  value?: FieldOption
  options?: FieldOption[]
}

export interface SelectProps extends Props {}

const onChange = (setFieldValue: (field: string, value: string) => void, props: Props) => (e: ChangeEvent<HTMLSelectElement>) => {
  setFieldValue(props.name, e.currentTarget.value)
}

const getStyles = (theme: ThemeState, props: Props) => {
  const {ui, colors} = theme

  return prepareStyles({
    SelectField: {
      ...transition,
      ...t.pa1,
      ...t.mt1,
      ...t.f4,
      appearance: 'button',
      fontFamily: ui.typography.nav.font,
      ...t[`br${ui.button.borderRadius || 0}`],
      backgroundColor: ui.mode === UIMode.Dark ? colors.black500 : colors.white500,
      border: `1px ${ui.mode === UIMode.Dark ? colors.primary900 : colors.primary500} solid`,
      color: `${ui.mode === UIMode.Dark ? colors.secondary25 : colors.secondary200}`,
      fill: `${ui.mode === UIMode.Dark ? colors.secondary25 : colors.secondary200}`,
      ':hover': {
        ...t.pointer
      },
      ':focus': {
        backgroundColor: ui.mode === UIMode.Dark ? colors.black500 : colors.white500,
        border: `1px ${ui.mode === UIMode.Dark ? colors.primary500 : colors.primary700} solid`,
      }
    },
    Option: {
      ...t.f2,
      fontFamily: ui.typography.nav.font,
    },
    isBlock: {
      ...t.db,
      width: ['-moz-available', '-webkit-fill-available']
    },
    isWeighted: {
      ...t[`mb${props.weighted}`]
    },
    SelectIcon: {
      ...t.absolute,
      top: 'calc(50% - 10px)',
      right: 5,
      pointerEvents: 'none',
      transform: 'rotate(-45deg)'
    },
    OuterFieldContainer: {
      ...t.relative,
      color: UIMode.Dark ? colors.primary800 : colors.primary200,
      fill: UIMode.Dark ? colors.primary800 : colors.primary200
    }
  })
}

export const SelectField: FC<Props> = (props: Props) => {
  const {
    name,
    value,
    label,
    setFieldValue,
    options,
    weighted,
    block = true
  } = props
  const theme: ThemeState = useTheme()
  const styles = getStyles(theme, props)
  const ref = useRef(null)

  return (
    <Field
      name={name}
      label={label}
    >
      {() =>
        <div css={css(styles.OuterFieldContainer)}>
          <select
            css={css(
              styles.SelectField, 
              block && styles.isBlock, 
              weighted && styles.isWeighted
            )}
            ref={ref}
            onBlur={setFieldValue && onChange(setFieldValue, props)}
          >
            {options && options.map(o => <option 
              role="option" 
              css={css(styles.Option)}
              selected={value?.value === o.value} 
              aria-selected={value?.value === o.value} 
              key={o.value} 
              value={o.value}
            >
              {o.label}
              {console.log(value)}
              {console.log(o)}
              {console.log('---------------------------')}
            </option>
          )}
          </select>
          <ChevronDownIcon size={20} css={css(styles.SelectIcon)} />
        </div>
      }

     
    </Field>
  )
}

