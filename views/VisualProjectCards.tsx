import {FC} from 'react'
import {Row, Col} from 'react-grid-system'
import {ProjectCard,} from '@alt/views'
import {portfolio, ID} from '@alt/data'

interface Props {
  cardLevel?: 0 | 1 | 2 | 3 | 4 | 5
  borderless?: boolean
  autoHeight?: boolean
  inverted?: boolean
  pid?: ID
}

export const VisualProjectCards: FC<Props> = ({
  cardLevel,
  borderless,
  pid,
  inverted,
  autoHeight
}: Props) =>
  <Row nogutter>
    {portfolio.map((item, i) => {
      if (item.id !== pid) {
        return (
          <Col md={4} key={`col_${i}`} sm={6} xs={12}>
            <ProjectCard
              primary
              level={pid === item.id ? 0 : cardLevel ? cardLevel : 0}
              disabled={pid === item.id}
              flat={pid === item.id ? false : true}
              autoHeight={autoHeight}
              inverted={inverted}
              borderless={borderless && pid !== item.id}
              title={item.title}
              img={item.image}
              url={item.url}
              description={item.description}
            />
          </Col>)
        }
      }
    )}
  </Row>
