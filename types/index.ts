export * from './Alignment'
export * from './Breakpoints'
export interface ContentProps {
  title: string
  tags?: string[]
  organization?: string
}
export type ID = 'cf' | 'wp' | 'nyt' | 'ca' | 'dp' | 'rl' | 'eg' | 'st' | 'cm' | 'dec' | 'adc' | 'mc' | 'aeo'
export * from './Layouts'
export * from './Renderable'
export type Template = 'visual' | 'audio'
