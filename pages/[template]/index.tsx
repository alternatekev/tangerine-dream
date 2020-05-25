import {NextPage} from 'next'

import {Template} from '@alt/types'
import {PortfolioTemplate} from '@alt/templates'
import {meta as visualMeta} from '@alt/data/visual'
import {meta as audioMeta} from '@alt/data/audio'
import {VisualProjectCards, AudioProjectCards} from '@alt/views'

interface Props {
  template: Template
}

const metaMap = {
  'visual': visualMeta,
  'audio': audioMeta
}

const ListPageTemplate: NextPage<Props> = ({
  template,
}) =>
 {
  const meta = metaMap[template]

  return (
    <PortfolioTemplate
      headerImage={meta.headerImage}
      image={meta.image}
      theme={meta.theme}
      kind={template}
      title={meta.title}
      header={meta.header}
    >
      {template === 'visual' && <VisualProjectCards />}
      {template === 'audio' && <AudioProjectCards />}
    </PortfolioTemplate>
  )}

ListPageTemplate.getInitialProps = ({query}) => {
  return {
    template: query.template as Template,
  }
}

export default ListPageTemplate
