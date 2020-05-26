import ReactPlayer from 'react-player'

import {P, Medium, Card} from '@alt/components'
import {ThemeContext, css, styles} from '@alt/styles'
import {Layouts} from '@alt/types'

export default {
    title: 'Community Funded 2.0',
    subhead: 'VERSION 2.0',
    logo: '/cf/logo-green.png',
    image: '/cf/card.png',
    url: '/visual/cf',
    id: 'cf',
    description: 'Node.js Consulting, Design Systems, UI & UX Design',
    header: (
      <>
        <P large>
          <strong>Community Funded</strong> came to me with one need: the first version of their product that got
                them to where they were was built on old technology, and was now limiting their
                growth potential. Could I help steer them toward the right choices to make for version 2?
            </P>
        <P large>
          And could I <Medium>help them build it?</Medium>
        </P>
      </>
    ),
    theme: ThemeContext.CF,
    body: {
      special: (
      <>
        <ReactPlayer url="https://vimeo.com/419446092" width="100%" css={css(styles.Player)} />
        <Card divider middleStacked megaWeighted borderless inflated>
          <P>
            After meeting with their founders, and finding that I could have a strong passion for their business, I enthusiastically agreed to help. V1 was heavily based on WordPress, something I have a unique amount of experience building and building for; React + Next.js were my suggestions for the front-end technologies, and three years later, we launched to live clients in the first quarter of 2020. I have worked hand-in-hand with the CTO, Chief Creative Officer, and VP of Product to craft not just a cohesive visual design system, but the codebase and UX patterns necessary to pull it off, in a real product, right now
          </P>
        </Card>
      </>),
      blocks: [
      {
        layout: Layouts.Left,
        image: '/cf/cf1.png',
        mobileImage: '/cf/mobile1.png',
        children: (
          <P>
            We used an iterative, design sprint-based approach that included customers, clients, success managers, board members, and executives. This all-inclusive approach led to the product improving by leaps and bounds in short amounts of time, with ideas we knew were already vetted with users.
          </P>
          )
      },
      {
        image: '/cf/cf2.png',
        mobileImage: '/cf/mobile2.png',
        children: (
          <P>
            I began my work with CF by asking questions, and iterating on Next.js-based prototypes complete with animation, beautfiul custom components, and an extensible architecture that worked as a bridge between quick prototyping and prodution-ready code.
          </P>
        )
      },
      {
        image: '/cf/cf3.png',
        mobileImage: '/cf/mobile3.png',
        layout: Layouts.Left,
        children: (
          <P>
            Using a modified Agile methodology, with an ad-hoc mixture of scrum, dailies, plannings sessions and spikes, we delivered a beautiful experience to delighted users, who often found that the extensive training needed to onboard for the first version of the prdouct, was now simply unnecesary.
          </P>
        )
      }
    ]
  }
}