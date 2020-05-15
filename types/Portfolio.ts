import {Renderable} from '@alt/types'
export enum portfolioTypes {
  UI = 'UI Design',
  UX = 'UX Design',
  React = 'React Development',
  DesignSystem = 'Design Systems',
  Info = 'Information Design',
  WordPress = 'WordPress Design & Development'
}

export interface PortfolioImage {
  body: Renderable
  url: string
  title: string
}

export interface PortfolioItem {
  title: string
  image: string
  url: string
  body: Renderable
  images: PortfolioImage[]
}
