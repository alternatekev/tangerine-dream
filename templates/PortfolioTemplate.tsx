import {FC} from 'react'

import {Divider, Card, Page} from '@alt/components'
import {Renderable, Template} from '@alt/types'
import {ProjectHeader, RelatedProjectCards} from '@alt/views'
import {ThemeContext} from '@alt/styles'
import {ID} from '@alt/data'

export interface PageProps {
  children: Renderable
  image?: string
  id?: ID
  header: Renderable
  headerImage: string
  subhead?: string
  title: string
  theme: ThemeContext
  compact?: boolean
  remoteUrl?: string
  logo?: string
  kind: Template
}

export const PortfolioTemplate: FC<PageProps> = ({
  children,
  image,
  logo,
  header,
  id,
  title,
  remoteUrl,
  kind,
  subhead,
  theme,
  compact,
  headerImage
}: PageProps) =>
  <Page
    compact={compact}
    title={title}
    header={headerImage}
    theme={theme}
  >{() =>
    <>
      <Card level={2} middleStacked>
        <ProjectHeader 
          kind={kind}
          url={remoteUrl}
          subhead={subhead}
          logo={logo || image}
        >
          {header}
        </ProjectHeader>
        <Divider superWeighted level={0} />
        {children}
        
      </Card>
      {id && <RelatedProjectCards kind={kind} pid={id} />}
    </>
    }
  </Page>
