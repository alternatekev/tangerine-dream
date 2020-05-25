import {NextPage} from 'next'

import {Template, ID, PortfolioItem} from '@alt/types'
import {PortfolioTemplate} from '@alt/templates'
import {meta as visualMeta, portfolio} from '@alt/data/visual'
import {meta as audioMeta, audio} from '@alt/data/audio'
import {ThemeContext} from '@alt/styles'

interface Props {
  template: Template
  id: ID
}

const data = portfolio.concat(audio)
const defaultData: PortfolioItem = { 
  image: '', 
  title: '',
  theme: ThemeContext.Home, 
  body: <div />, 
  url: '',
  description: '',
  logo: '',
  id: '',
  header: <div /> ,
}

const metaMap = {
  'visual': visualMeta,
  'audio': audioMeta
}

const IDPageTemplate: NextPage<Props> = ({
  template,
  id
}) => {
  const meta = metaMap[template] || metaMap.visual
  console.log(meta)
  const portfolioItem = data.find(p => p.id === id) || defaultData
  const {body, subhead, description, ...rest} = portfolioItem

  return (
    <PortfolioTemplate
      headerImage={meta.headerImage}
      kind={template}
      subhead={subhead || description}
      {...rest}
      id={id}
      compact
    >
     {body}
    </PortfolioTemplate>
  )
}

IDPageTemplate.getInitialProps = ({query}) => {
  return {
    template: query.template as Template,
    id: query.id as ID
  }
}

export default IDPageTemplate
