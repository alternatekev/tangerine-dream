import {Renderable} from '@alt/types'
import {ThemeContext} from './Theme'
import { Layouts } from './Layouts'

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
  body: PortfolioBody
  header: Renderable
  remoteUrl?: string
  subhead?: string
  logo?: string
}

export interface AudioItem extends PortfolioItem {
  columns: number
}

export interface PortfolioBody {
  special?: Renderable
  blocks?: PortfolioBlock[]
}

export interface PortfolioBlock {
  layout?: Layouts.Equal | Layouts.Left | Layouts.Right
  image?: string
  children?: Renderable
  action?: Renderable
}
