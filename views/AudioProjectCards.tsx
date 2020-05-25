import {FC} from 'react'
import {Row, Col} from 'react-grid-system'
import {ProjectCard} from '@alt/views'
import {audio, id} from '@alt/data'

interface Props {
  cardLevel?: 0 | 1 | 2 | 3 | 4 | 5
  borderless?: boolean
  autoHeight?: boolean
  inverted?: boolean
  pid?: id
  useColumns?: boolean
}

export const AudioProjectCards: FC<Props> = ({
  cardLevel,
  borderless,
  pid,
  inverted,
  useColumns = true
}: Props) =>
  <Row nogutter>
    {audio.map((item, i) => {
      if (item.id !== pid) {
        return (
          <Col md={useColumns ? item.columns : 4} key={`col_${i}`} sm={6} xs={12}>
            <ProjectCard
              primary
              level={pid === item.id ? 0 : cardLevel ? cardLevel : 0}
              disabled={pid === item.id}
              flat={pid === item.id ? false : true}
              autoHeight={false}
              inverted={inverted}
              borderless={borderless && pid !== item.id}
              title={item.title}
              img={item.image}
              subtitle={item.artist}
              url={item.url}
              description={item.description}
            />
          </Col>)
        }
      }
    )}
  </Row>
