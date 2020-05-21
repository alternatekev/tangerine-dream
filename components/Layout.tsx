import React, {Children, PureComponent} from 'react'

import {Container, Row, setConfiguration, Col, Configuration as Config} from 'react-grid-system'
import {css, prepareStyles, t, ExtraStyles, ThemeProps, withTheme, DerivedTheme} from '../styles'

import {LayoutItem} from './LayoutItem'
import {Layouts} from '../types'
import {SerializedStyles} from '@emotion/core'

interface Props extends ThemeProps {
  weighted?: boolean
  superWeighted?: boolean
  topWeighted?: boolean
  disableResponsive?: boolean
  miniTopWeighted?: boolean
  miniWeighted?: boolean
  padded?: boolean
  debug?: boolean
  superTopWeighted?: boolean
  divider?: boolean
  topDivider?: boolean
  cardLayout?: boolean
  noGutter?: boolean
  extraStyles?: ExtraStyles
  kind?: Layouts
  alignment?: 'normal' | 'start' | 'center' | 'end'
}

export const LayoutConfig: Config = {
  gutterWidth: 40,
  defaultScreenClass: 'md',
  breakpoints: [460, 768, 1024, 1300]
}
export {Container, Row, Col, setConfiguration}
export type Configuration = Config

const getStyles = (theme: DerivedTheme) => {

  return prepareStyles({
    Layout: {
      transition: `all 100ms ease-in-out`
    },
    isWeighted: {
      ...t.mb4
    },
    isSuperWeighted: {
      ...t.mb5
    },
    isTopWeighted: {
      ...t.mt3
    },
    isMiniTopWeighted: {
      ...t.mt2
    },
    isMiniWeighted: {
      ...t.mb2
    },
    isTopSuperWeighted: {
      ...t.mt5
    },
    hasDivider: {
      ...t.pb4,
      borderBottom: `1px ${theme.grey25} solid`
    },
    hasTopDivider: {
      ...t.pt5,
      borderTop: `1px ${theme.grey100} solid`
    },
    isCardLayout: {
      marginBottom: 20
    },
    isPadded: {
      ...t.pl5,
      ...t.pr5
    },
    hasNoGutter: {
      marginLeft: -10,
      marginRight: -10
    }
  })
}


class UnthemedLayout extends PureComponent<Props> {
  static defaultProps: Omit<Props, 'theme'> = {
    kind: Layouts.Equal,
    alignment: 'normal',
    disableResponsive: false
  }

  constructor(props: Props) {
    super(props)
    setConfiguration(LayoutConfig)
  }

  renderChildrenWithLayout = () => {
    const {children, kind, disableResponsive, debug} = this.props
    const length = Children.toArray(children).length

    return Children.map(children, (child, index) => {
      if (debug){console.log(child)}
      if (child !== null) {
        const isLeft = kind === Layouts.Left
        const isWideLeft = kind === Layouts.WideLeft
        const isMidLeft = kind === Layouts.MidLeft
        const isRight = kind === Layouts.Right
        const isWideRight = kind === Layouts.WideRight
        const isMidRight = kind === Layouts.MidRight
        const isEqual = kind === Layouts.Equal

        const isLeftLayout = index === 0 && (isLeft || isWideLeft || isMidLeft)
        const isRightLayout = index === length - 1 &&
          (isRight || isWideRight || isMidRight)

        const thisKind = (isLeftLayout || isRightLayout || isEqual)
          ? kind
          : undefined

        return (
          <LayoutItem
            totalLayoutItems={length}
            hasWide={isLeft || isRight}
            hasMiddleWide={kind === Layouts.MidLeft || kind === Layouts.MidRight}
            hasReallyWide={isWideLeft || kind === Layouts.WideRight}
            kind={thisKind}
            disableResponsive={disableResponsive}
            key={index}>
            {child}
          </LayoutItem>
        )
      }

    })
  }

  render() {
    const {
      children,
      weighted,
      superWeighted,
      topWeighted,
      miniWeighted,
      theme,
      superTopWeighted,
      divider,
      topDivider,
      cardLayout,
      padded,
      miniTopWeighted,
      extraStyles,
      noGutter,
      alignment,
    } = this.props

    const styles = getStyles(theme)

    const GridRow = css`
    margin-left: -${noGutter ? 10 : 20}px !important;
    margin-right: -${noGutter ? 10 : 20}px !important;
`

    if (Children.toArray(children).length > 1) {

      return (
        <div css={css(
          styles.Layout,
          weighted && styles.isWeighted,
          superWeighted && styles.isSuperWeighted,
          topWeighted && styles.isTopWeighted,
          miniWeighted && styles.isMiniWeighted,
          superTopWeighted && styles.isTopSuperWeighted,
          divider && styles.hasDivider,
          topDivider && styles.hasTopDivider,
          cardLayout && styles.isCardLayout,
          padded && styles.isPadded,
          miniTopWeighted && styles.isMiniTopWeighted,
          extraStyles as SerializedStyles
        )}>
          <Container fluid>
            <Row
              nogutter={noGutter}
              css={css(GridRow, noGutter && styles.hasNoGutter)}
              align={alignment}>
              {this.renderChildrenWithLayout()}
            </Row>
          </Container>
        </div>
      )
    } else {
      return this.props.children
    }
  }
}

export const Layout = withTheme(UnthemedLayout)
