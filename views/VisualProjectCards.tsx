import {FC} from 'react'
import {Row, Col} from 'react-grid-system'
import {ProjectCard} from '@alt/views'
import {portfolio} from '@alt/data'

export const VisualProjectCards: FC = () =>
  <Row nogutter>
    {portfolio.map((item, i) => 
      <Col md={4} key={`col_${i}`}>
        <ProjectCard
          title={item.title}
          img={item.image}
          url={item.url}
          description={item.description}
        />
      </Col>
    )}
  </Row>
