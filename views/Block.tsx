import {FC} from 'react'

import {Layout, ProjectImage} from '@alt/components'
import {Renderable, Layouts, Alignment} from '@alt/types'

interface Props {
  image?: string
  mobileImage?: string
  video?: Renderable
  layout?: Layouts
  children: Renderable
  divider?: boolean
  action?: Renderable
  alignMobile?: Alignment
  name: string
}

export const Block: FC<Props> = ({
  children,
  divider = true,
  mobileImage,
  image,
  name,
  alignMobile,
  video,
  action,
  layout = Layouts.Right
}: Props) => {
  const imageComponent = video 
    ? video 
    : image 
      ? 
        <ProjectImage 
          mobileSrc={mobileImage} 
          alignMobile={alignMobile}
          src={image} 
          alt={`${name} Alternate.org Portfolio Image`} /> 
      : null
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
