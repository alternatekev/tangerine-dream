import React, {
  Children,
  Component,
  CSSProperties,
  ReactChild,
  SyntheticEvent
} from 'react'
import {
  Col,
  Container,
  Row,
  setConfiguration,
} from 'react-grid-system'

import {Button, Footer, LayoutConfig} from '@alt/components'

export interface CardGridProps {
  title?: ReactChild
  noGutter?: boolean
  stacked?: boolean
  compact?: boolean
  columns?: number
  onLoadMoreClick?(e: SyntheticEvent): void
  subscribeToNew?(): void
}

/**
 * Takes an array of children and wraps them each in a <Col /> component
 * If the children are a Fragment, they won't get unwrapped
 */
export default class CardGrid extends Component<CardGridProps> {

  constructor(props: CardGridProps) {
    super(props)
    setConfiguration(LayoutConfig)
  }

  componentDidMount() {
    if (this.props.subscribeToNew) {
      this.props.subscribeToNew()
    }
  }

  render() {
    const {
      children = [],
      columns = 3,
      compact,
      title,
      onLoadMoreClick,
      noGutter,
      stacked
    } = this.props

    const rowStyle: CSSProperties = {marginLeft: -20, marginRight: -20}
    const compactRowStyle: CSSProperties = {marginLeft: -20, marginRight: -50}
    const colProps = {
      xs: 12,
      sm: stacked ? 12 : 6,
      md: stacked ? 12 : columns,
      lg: stacked ? 12 : columns
    }

    return (
      <section>

        {title}

        <Container 
          fluid 
          lg 
          md 
          xl 
          data-test-id="Card-Container">
          <Row style={compact ? compactRowStyle : rowStyle} nogutter={noGutter}>
            {Children.map(children, (child, index) => (
              <Col {...colProps} key={`CardGrid${index}`} style={compact ? {marginLeft: -10, marginRight: -10} : undefined}>
                {child}
              </Col>
            ))}
          </Row>
        </Container>

        {onLoadMoreClick && (
          <Footer alignCenter>
            <Button
              alignCenter
              data-test-id="card-grid-load-more"
              onClick={onLoadMoreClick}
              size={200}
              tertiary
              topWeighted
              weighted
            >
              Load More
            </Button>
          </Footer>
        )}

      </section>
    )
  }
}
