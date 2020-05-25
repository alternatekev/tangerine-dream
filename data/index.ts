import {PortfolioItem} from '@alt/types'
import {portfolio} from './visual'
export {portfolio}
import {audio} from './audio'
export {audio}

export type id = 'cf' | 'wp' | 'nyt' | 'ca' | 'dp' | 'rl' | 'eg' | 'st' | 'cm' | 'dec' | 'adc' | 'mc' | 'aeo'

export function getRelatedProjectCards(data: PortfolioItem[], pid: id) {
  const match = data.findIndex((p: PortfolioItem) => p.id === pid)
  const count = data.length - 1

  if (match < 2) {
    return ([data[1], data[2], data[3]].filter(p => p.id !== pid))
  } else if (match <= count && match > count - 2) {
    return ([data[count], data[count - 1], data[count - 2]].filter(p => p.id !== pid))
  }

  return ([data[match - 1], data[match + 1], data[match - 2]].filter(p => p.id !== pid))
}
