import {FC} from 'react'

import {Divider, Card, Page} from '@alt/components'
import {Renderable, Template} from '@alt/types'
import {ProjectHeader} from '@alt/views'
import {ThemeContext} from '@alt/styles'

export interface PageProps {
  children: Renderable
  image?: string
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
    <Card stacked level={2} middleStacked>
      <ProjectHeader 
        kind={kind}
        url={remoteUrl}
        subhead={subhead}
        logo={logo || image}
      >
        {header}
      </ProjectHeader>
      <Divider weighted level={0} />
      {children}
    </Card>
    }
  </Page>
