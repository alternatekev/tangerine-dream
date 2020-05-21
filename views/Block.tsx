import {FC} from 'react'

import {Layout, ProjectImage} from '@alt/components'
import {Renderable, Layouts} from '@alt/types'

interface Props {
  image?: string
  video?: Renderable
  layout?: Layouts.Left | Layouts.Right | Layouts.Equal
  children: Renderable
  divider?: boolean
  action?: Renderable
}

export const Block: FC<Props> = ({
  children,
  divider = true,
  image,
  video,
  action,
  layout = Layouts.Right
}: Props) => {
  const imageComponent = video ? video : image ? <ProjectImage src={image} alt="portfolio image" /> : null
  const renderChildren = layout === Layouts.Right 
    ? [
      imageComponent,
      children
    ] 
    : [
      <div key="child">{children}</div>,
      imageComponent
    ]

  if (action) {
    renderChildren.push(action)
  }

  return (
    <Layout
      debug
      superWeighted
      topWeighted
      divider={divider}
      kind={layout}
      alignment="center"
    >
      {renderChildren}
    </Layout>
  )
}
