import {
  ThemeState,
  shadow,
  prepareStyles,
  t
} from '@td/styles'

export const getStyles = (theme: ThemeState, dragging?: boolean) => {
  const dropShadow = dragging ? shadow(theme)[4] : shadow(theme)[0]

  return (prepareStyles({
    Configurator: {
      ...dropShadow,
      ...t.relative,
      ...t[`br${theme.ui.card.borderRadius}`],
      color: theme.colors.white500,
      ...t.flex,
      ...t.items_center
    },
    isVertical: {
      flexDirection: 'column',
      ...t.align_center
    },
    isHorizontal: {
      flexDirection: 'row'
    },
    top: {
      width: 'calc(100vw - 54px)',
      height: 50,
      top: 2,
      left: 2,
      border: `1px ${theme.colors.primary500_25} solid`,
      ...t.bt0,
      ...t.br__bottom,
      borderBottomRightRadius: 0,
    },
    draggingtop: {
      width: 150,
      height: 50,
      ' ul': {
        opacity: 0
      }
    },
    bottom: {
      width: 'calc(100vw - 100px)',
      height: 50,
      bottom: 2,
      left: 2,
      border: `1px ${theme.colors.primary500_25} solid`,
      ...t.bb0,
      ...t.br__top,
      ...t.column
    },
    draggingbottom: {
      width: 150,
      height: 50,
      ' ul': {
        opacity: 0
      }
    },
    left: {
      width: 50,
      height: 'calc(100vh - 100px)',
      top: 2,
      left: 2,
      border: `1px ${theme.colors.primary500_25} solid`,
      ...t.bl0,
      ...t.br__right,
    },
    draggingleft: {
      width: 50,
      height: 150,
      ' ul': {
        opacity: 0
      }
    },
    right: {
      width: 50,
      height: 'calc(100vh - 100px)',
      right: 2,
      top: 0,
      border: `1px ${theme.colors.primary500_25} solid`,
      borderRightWidth: 0,
      ...t.br__left,
    },
    draggingright: {
      width: 50,
      height: 150,
      ' ul': {
        opacity: 0
      }
    },
    isDroppable: {
      opacity: 0.5,
      ...t.fixed,
    },
  }))
}