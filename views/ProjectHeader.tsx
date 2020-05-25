import {FC} from 'react'
import OpenInNewIcon from 'mdi-react/OpenInNewIcon'

import {
  Layout,
  Avatar,
  Header,
  Button,
  Card
} from '@alt/components'
import {
  Layouts, 
  Renderable
} from '@alt/types'

interface Props {
  logo?: string
  subhead?: string
  children: Renderable
  url?: string
  kind?: 'visual' | 'audio'
}

export const ProjectHeader: FC<Props> = ({
  logo,
  subhead,
  children,
  url,
  kind = 'visual'
}: Props) =>
  <Card borderless compact>
    <Layout 
      topWeighted 
      kind={Layouts.WideRight} 
      alignment="center"
    >
     {logo && <Avatar 
        alignCenter 
        superWeighted 
        img={logo} 
        circle={kind === 'visual'}
        size={210} 
      />}
      <>
        <Header 
          uppercase
          utilityComponent={url 
            ? 
              <Button 
                icon={<OpenInNewIcon size={15} />}
                href={url} 
                external 
                compact 
                tertiary 
                target="_new"
              >
                {kind === 'visual' ? 'View Project' : 'Listen Now'}
              </Button> 
            : null
          } 
          level={2} 
          intense
        >
          {subhead}
        </Header>
        {children}
      </>
    </Layout>
  </Card>
