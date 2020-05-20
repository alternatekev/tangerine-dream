import {FC} from 'react'

import {
  Layout,
  Avatar,
  Divider,
  Header
} from '@alt/components'
import {
  Layouts, 
  Renderable
} from '@alt/types'

interface Props {
  logo: string
  subhead: string
  children: Renderable
}

export const ProjectHeader: FC<Props> = ({
  logo,
  subhead,
  children
}: Props) =>
  <>
    <Layout kind={Layouts.WideRight} alignment="center">
      <Avatar alignCenter superWeighted img={logo} circle size={210} />
      <>
        <Header level={2} intense>{subhead}</Header>
        {children}
      </>
    </Layout>
      <Divider superWeighted superTopWeighted level={0} />
  </>
