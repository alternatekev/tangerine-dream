import {FC} from 'react'
import Zoom from 'react-medium-image-zoom'
import {css, prepareStyles, t, DerivedTheme, ThemeProps, withTheme} from '@alt/styles'
import {Alignment} from '@alt/types'

interface Props extends ThemeProps {
  src: string
  mobileSrc?: string
  alignMobile?: Alignment
  alt: string
}

export const imageStyles = (theme: DerivedTheme, alignMobile?: Alignment) => prepareStyles({
  ProjectImage: {
    ...t.w_100,
  },
  MobileProjectImage: {
    width: 100,
    height: 200,
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
  },
  isMobile: {
    ...t.dib,
    ...t.absolute,
    top: 20,
    left: alignMobile === Alignment.Left ? 0 : undefined,
    right: alignMobile === Alignment.Right ? 0 : undefined,
    boxShadow: `0 0 5px ${theme.background50}, 0 0px 10px ${theme.white500}, 0 0 20px ${theme.background50}`
  }
})

const UnthemedProjectImage: FC<Props> = ({
  src, 
  alignMobile = Alignment.Left,
  alt, 
  mobileSrc,
  theme,
}: Props) => {

  const styles = imageStyles(theme, alignMobile)

  return (<>
    <figure css={css(styles.OuterFigure)}>
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
            css={css(styles.ProjectImage)}
          />
        </Zoom>
      }
    </figure>
    {mobileSrc &&
      <figure css={css([styles.OuterFigure, styles.isMobile])}>
        {typeof document !== 'undefined' && //tslint:disable-line
        <Zoom
          portalEl={document.body}
          overlayBgColorStart={theme.background500_5}
          overlayBgColorEnd={theme.background500_90}
          zoomMargin={50}
        >
          <img
            src={mobileSrc}
            alt={alt}
            css={css(imageStyles(theme, alignMobile).MobileProjectImage)}
          />
        </Zoom>}
      </figure>
    }
  </> )
  }

export const ProjectImage = withTheme(UnthemedProjectImage)
