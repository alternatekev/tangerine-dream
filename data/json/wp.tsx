import {P, Medium, Card} from '@alt/components'
import {ThemeContext} from '@alt/styles'
import {Layouts} from '@alt/types'
import { ProjectImage } from '@alt/components/ProjectImage'

export default {
  title: 'WordPress.com',
  image: '/wp/card.png',
  subhead: 'CALYPSO',
  logo: '/wp/wpcom-wmark.png',
  url: '/visual/wp',
  id: 'wp',
  description: 'UI & UX Design, Design Systems, CSS',
  header: (
    <P large>
      I worked at <Medium>Automattic</Medium> for six years, and two of them were spent on <strong>Calypso, an API- and JavaScript-powered UI for WordPress</strong>. Calypso runs the WordPress desktop app, the WordPress.com UI, influences the UX of the WordPress mobile app and is built using Node.js + React.
    </P>
  ),
  body: {
    special: (
      <Card inflated borderless divider middleStacked megaWeighted>
        <ProjectImage alt="" src="/wp/wp1.png" />
        <P>
          WordPress.com is the largest installation of WordPress in the world with 131 million unique monthly users in the US. We were seeking to modernize our users’ experience by taking WordPress, which clearly still exists in its unchanged form and is in active development, abstract the core technology to an API, and build new experiences on top.
          </P>
      </Card>
    ),
    blocks: [
      {
        layout: Layouts.Left,
        image: '/wp/wp2.png',
        children: (
          <P compact>
            We had historically eschewed email, working together through the internally-developed P2 WordPress theme and IRC. Prior to Calypso, we usually launched code pretty quickly through Subversion to the main production codebase, and teams often iterated in silos, attending to their own needs first and foremost. Calypso changed all of that, moving a large portion of the design and development discussion to Slack and Github, adding beneficial layers of peer-based code and design review on top of each Pull Request. The end result was a more cohesive product, for us in the code and for our users in the experience. Designers started working more closely together on specific issues across teams, developers and designers collaborated in quicker iterations to get to better solutions, and the standards we used to build the app progressed along with evolving React and ES6 best practices
          </P>
        )
      }
    ]
  },
  theme: ThemeContext.WP
}