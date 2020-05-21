import {PortfolioItem} from '@alt/types'

export const portfolio: PortfolioItem[] = [
  {
    title: 'Community Funded 2.0',
    image: '/cf/card.png',
    url: '/visual/cf',
    id: 'cf',
    description: 'Node.js Consulting, Design Systems, UI & UX Design',
  },
  {
    title: 'WordPress.com',
    image: '/wp/card.png',
    url: '/visual/wp',
    id: 'wp',
    description: 'UI & UX Design, Design Systems, CSS',
  },
  {
    title: 'The New York Times',
    image: '/nyt/card.png',
    url: '/visual/nyt',
    id: 'nyt',
    description: 'Creative Direction, Dev Team Management, UX & UI Design, Data Visualization',
  },
  {
    title: 'Agile Central / Catchfly',
    image: '/ca/card.png',
    url: '/visual/ca',
    id: 'ca',
    description: 'Design System Architecture & Build, Creative Direction',
  },
  {
    title: 'Down Periscope',
    image: '/dp/card.png',
    url: '/visual/dp',
    id: 'dp',
    description: 'Real-Time Node.js Server Architecture, React Components',
  },
  {
    title: 'Rule Gallery',
    image: '/rl/card.png',
    url: '/visual/rl',
    id: 'rl',
    description: 'WordPress & WooCommerce Design & Build, React Components',
  },
  {
    title: 'Elmendorf/Geurts',
    image: '/eg/card.png',
    id: 'eg',
    url: '/visual/eg',
    description: 'Headless WordPress, React Components, Music Composition, Branding, Collateral',
  },
]

export type id = 'cf' | 'wp' | 'nyt' | 'ca' | 'dp' | 'rl' | 'eg'

export function getRelatedProjectCards(pid: id) {
  const match = portfolio.findIndex((p: PortfolioItem) => p.id === pid)
  const count = portfolio.length - 1

  if (match < 2) {
    return ([portfolio[1], portfolio[2], portfolio[3]].filter(p => p.id !== pid))
  } else if (match <= count && match > count - 2) {
    return ([portfolio[count], portfolio[count - 1], portfolio[count - 2]].filter(p => p.id !== pid))
  }

  return ([portfolio[match - 1], portfolio[match + 1], portfolio[match - 2]].filter(p => p.id !== pid))
}
