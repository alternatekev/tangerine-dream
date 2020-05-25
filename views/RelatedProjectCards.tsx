import {FC} from 'react'

import {id, getRelatedProjectCards, portfolio, audio} from '@alt/data'
import {Layout, Card} from '@alt/components'
import {ProjectCard} from '@alt/views'

interface Props {
  pid: id 
  kind: 'visual' | 'audio'
}

export const RelatedProjectCards: FC<Props> = ({
  pid, 
  kind
}: Props) => {

  return (
    <Card middleStacked level={0}>
      
      <Layout>
        {getRelatedProjectCards(kind === 'visual' ? portfolio : audio, pid).map(p => 
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
  
