import {FC} from 'react'

import {
  prepareStyles, 
  css, 
  t,
  ThemeState,
  useTheme,
  UIMode
} from '@td/styles'

interface Props {
  for: string
}

const getStyles = (theme: ThemeState) => {
  const {colors, ui} = theme

  return prepareStyles({
    FieldLabel: {
      fontFamily: ui.typography.body.font,
      weight: 200,
      ...t.db,
      ...t.f3,
      color: ui.mode === UIMode.Dark ? colors.secondary100 : colors.secondary500
    }
  })
}

export const FieldLabel: FC<Props> = (props) => {
  const theme: ThemeState = useTheme()
  const styles = getStyles(theme)
 
  return(
    <label css={css(styles.FieldLabel)} htmlFor={props.for}>
      {props.children}
    </label>
  )

}

