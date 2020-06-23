import {prepareStyles, t} from '@td/styles'
import {DerivedTheme, Breakpoints} from '@td/types'

export const getStyles = (image: any, theme: DerivedTheme) => { // tslint:disable-line no-any

  return prepareStyles({
    body: {
      backgroundImage: `url(${image.src})`,
      ...t.cover,
      ...t.bg_center,
      minHeight: '100vh'
    },
    Page: {
      ...t.pa5,
      ...t.pb0,
      ...t.mb5,
      minHeight: '100vh',
      marginLeft: 'auto',
      marginRight: 'auto',
      transition: 'all 100ms ease-in-out',
      [Breakpoints.Small]: {
        ...t.pa1
      }
    },
    isLimited: {
      maxWidth: 960,
      margin: '0 auto',
      ...t.pa5,
      minHeight: 'calc(100vh - 5rem)'
    },
    isFullBleed: {
      maxWidth: '100vw',
      ...t.pa5,
      ...t.ma0
    },
    isCaptured: {
      ...t.flex,
      maxWidth: 500,
      ...t.justify_center,
      ...t.items_center,
      ...t.align_center,
      margin: '0 auto',
      ...t.pa0
    },
    PageChildren: {
      ...t.flex,
      ...t.flex_column,
      zIndex: 1,
      ...t.relative,
      transformStyle: 'preserve-3d',
    },
    isVerticallyCentered: {
      ...t.flex,
      ...t.items_center,
    },
    isVerticallyBottom: {
      ...t.flex,
      ...t.items_end,
    },
    isHorizontallyCentered: {
      ...t.justify_center
    },
    isHorizontallyRight: {
      ...t.justify_end
    }
  })
}
