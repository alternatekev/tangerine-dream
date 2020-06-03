import {FC} from 'react'

import {useTheme, t, prepareStyles, DerivedTheme} from '@td/styles'
import {Level, Renderable} from '@td/types'

interface Props {
  borderless?: boolean
  level?: Level
  compact?: boolean
  fullBleed?: boolean
  weighted?: Level
  topWeighted?: Level
  children?: Renderable
  tag?: 'div' | 'article' | 'section'
}

export interface CardProps extends Props {}

const getStyles = (props: Omit<Props, 'tag' | 'children'>, theme: DerivedTheme) => {
  const {
    compact,
    level = 1,
    borderless,
    fullBleed,
    weighted = 0,
    topWeighted = 0,
  } = props

  const paddingLevel = compact ? 1 : fullBleed ? 0 : 2
  const borderWidth = borderless ? 0 : 1
  const borderColor = [
    'transparent',
    theme.grey25,
    theme.grey75,
    theme.grey200,
    theme.grey500,
    theme.grey900,
    theme.grey950,
    theme.grey975
  ]

  return prepareStyles({
    Card: {
      ...t[`pa${paddingLevel}`],
      ...t[`mb${weighted}`],
      ...t[`mb${topWeighted}`],
      border: `${borderWidth}px solid ${borderColor[level]}`
    }
  })
}

export const Card: FC<Props> = ({
  tag,
  children,
  ...rest
}: Props) => {

  const theme: DerivedTheme = useTheme()
  const styles = getStyles(rest, theme)

  console.log(styles)

  return <div>{children}</div>
}
