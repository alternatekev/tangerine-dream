import {FC} from 'react'
import {ThemeProps, css, withTheme} from '@alt/styles'
import {Renderable} from '@alt/types'

interface MediumProps extends ThemeProps{
  children: Renderable
}

const UnthemedMedium: FC<MediumProps> = ({theme, children}: MediumProps) =>
<strong className="medium" css={css({color: theme.primary400})}>{children}</strong>

export const Medium = withTheme(UnthemedMedium)
