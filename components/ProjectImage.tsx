import {FC} from 'react'
import Zoom from 'react-medium-image-zoom'
import {css, prepareStyles, t, DerivedTheme, ThemeProps, withTheme} from '@alt/styles'

interface Props extends ThemeProps {
  src: string
  alt: string
}

export const imageStyles = (theme: DerivedTheme) => prepareStyles({
  ProjectImage: {
    ...t.w_100,
  },
  OuterFigure: {
    ...t.br2,
    ...t.mb2,
    ...t.mt1,
    ...t.pa0,
    ...t.overflow_hidden,
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
  <figure css={css(imageStyles(theme).OuterFigure)}>
    {typeof document !== 'undefined' && //tslint:disable-line
      <Zoom 
        portalEl={document.body} 
        overlayBgColorStart={theme.background500_5} 
        overlayBgColorEnd={theme.background500_90} 
        zoomMargin={50}
      >
        <img 
          src={src} 
          alt={alt}
          css={css(imageStyles(theme).ProjectImage)} 
        />
      </Zoom>
    }
  </figure>

export const ProjectImage = withTheme(UnthemedProjectImage)
