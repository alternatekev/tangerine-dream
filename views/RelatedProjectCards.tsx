import {FC} from 'react'

import {id, getRelatedProjectCards} from '@alt/data'
import {Layout, Card} from '@alt/components'
import {ProjectCard} from '@alt/views'

interface Props {
  pid: id 
}

export const RelatedProjectCards: FC<Props> = ({pid}: Props) => {

  return (
    <Card middleStacked level={0}>
      
      <Layout>
        {getRelatedProjectCards(pid).map(p => 
          <ProjectCard
            key={p.id}
            title={p.title}
            img={p.image}
            url={p.url}
            description={p.description}
          />
        )}
      </Layout>
    </Card>

  )
}
  