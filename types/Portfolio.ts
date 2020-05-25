import {Renderable} from '@alt/types'
import {ThemeContext} from './Theme'

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
  theme: ThemeContext
  body: Renderable
  header: Renderable
  remoteUrl?: string
  subhead?: string
  logo?: string
}

export interface AudioItem extends PortfolioItem {
  columns: number
}
