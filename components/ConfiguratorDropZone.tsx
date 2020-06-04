import {FC} from 'react'

import {t, css, prepareStyles, withTheme, ThemeProps, ThemeState, transition} from '@td/styles'

import {Viewport} from '@td/types'

interface Props extends ThemeProps{
  viewport: Viewport
}

const getStyles = ({colors}: ThemeState, viewport: Viewport) => {

  return prepareStyles({
    ConfiguratorDropZone: {
      ...transition,
      ...t.fixed,
      width: viewport === Viewport.Top || viewport === Viewport.Bottom ? '100vw' : 50,
      backgroundColor: colors.white500_0,
      top: viewport !== Viewport.Bottom ? 0 : undefined,
      left: viewport !== Viewport.Right ? 0 : undefined,
      right: viewport !== Viewport.Left ? 0 : undefined,
      bottom: viewport !== Viewport.Top ? 0 : undefined,
      height: viewport === Viewport.Left || viewport === Viewport.Right ? `100vh` : 50,
      pointerEvents: 'none'
    },
    isBeingDraggedOver: {
      backgroundColor: colors.button500_25,
    }
  })
}

const UnthemedConfiguratorDropZone: FC<Props> = ({
  viewport,
  theme
}: Props) => {
  const styles = getStyles(theme, viewport)

  return (
    <div css={css(styles.ConfiguratorDropZone)} />
  )
}
  

export const ConfiguratorDropZone = withTheme(UnthemedConfiguratorDropZone)
