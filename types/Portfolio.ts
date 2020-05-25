import {Renderable} from '@alt/types'

export interface ProjectImage {
  body: Renderable
  url: string
  title: string
}

export interface PortfolioItem {
  title: string
  image: string
  url: string
  description: string
  id: string
}

export interface AudioItem extends PortfolioItem {
  artist?: string
  remoteUrl: string
  columns: number
}
