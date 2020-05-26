import {PortfolioItem} from '@alt/types'
import {PageProps} from '@alt/templates'
import {Medium, P} from '@alt/components'
import {ThemeContext} from '@alt/styles'
import cf from './json/cf'
import wp from './json/wp'
import nyt from './json/nyt'
import ca from './json/ca'
import dp from './json/dp'
import rl from './json/rl'
import eg from './json/eg'

export const meta: Omit<PageProps, 'children' | 'id'> = {
  image: 'https://alternatekev.files.wordpress.com/2015/07/4366366361_a75c4a59f3_b.jpg',
  header: (
    <div>
      <P large>
        I was an <Medium>arty kid</Medium >.I have no idea whether this is because I was genetically predisposed to it or if I simply had enough people tell me I was good at it, but either way my childhood included <Medium> an awful lot of drawing </Medium>.
      </P>
      <P large> It's no coincidence my job as an adult is to <strong>paint interfaces with code</strong>.</P>
    </div>
  ),
  theme: ThemeContext.Portfolio,
  headerImage: '/visual.png',
  title: 'Visual Work',
  kind: 'visual'
}

export const portfolio: PortfolioItem[] = [
  cf,
  wp,
  nyt,
  ca,
  dp,
  rl,
  eg,
]
