import {FC} from 'react'

import {css, prepareStyles, t, DerivedTheme, ThemeProps, withTheme} from '@alt/styles'

interface Props extends ThemeProps {
  src: string
  alt: string
}

export const imageStyles = (theme: DerivedTheme) => prepareStyles({
  ProjectImage: {
    ...t.w_100,
    ...t.br2,
    ...t.mb2,
    ...t.mt1,
    boxShadow: `0 0 0 ${theme.background100}, 0 0 0 ${theme.background100}, 0 0 0 ${theme.background100}`,
    transition: 'all 100ms ease-in-out',
   ':hover': {
     boxShadow: `0 0 5px ${theme.background500_50}, 0 0px 20px ${theme.white500}, 0 0 50px ${theme.background500_25}`
   }
  }
})

const UnthemedProjectImage: FC<Props> = ({
  src, 
  alt, 
  theme,
}: Props) =>
  <img 
    alt={alt} 
    src={src} 
    css={css(imageStyles(theme).ProjectImage)} 
  />

export const ProjectImage = withTheme(UnthemedProjectImage)
