import {FC} from 'react'
import OpenInNewIcon from 'mdi-react/OpenInNewIcon'

import {
  Layout,
  Avatar,
  Header,
  Button
} from '@alt/components'
import {
  Layouts, 
  Renderable
} from '@alt/types'

interface Props {
  logo: string
  subhead: string
  children: Renderable
  url?: string
}

export const ProjectHeader: FC<Props> = ({
  logo,
  subhead,
  children,
  url
}: Props) =>
  <>
    <Layout 
      divider 
      superWeighted 
      topWeighted 
      kind={Layouts.WideRight} 
      alignment="center"
    >
      <Avatar 
        alignCenter 
        superWeighted 
        img={logo} 
        circle 
        size={210} 
      />
      <>
        <Header 
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
                View Project
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
  </>
