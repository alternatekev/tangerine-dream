import { P} from '@alt/components'
import { ThemeContext} from '@alt/styles'
import { Layouts } from '@alt/types'
import {Block} from '@alt/views/Block'
import { ProjectImage } from '@alt/components/ProjectImage'

export default {
  title: 'The New York Times',
  image: '/nyt/card.png',
  remoteUrl: 'https://markets.on.nytimes.com',
  subhead: 'MARKETS RESEARCH — WALL ST ON DEMAND',
  logo: '/nyt/logo.png',
  url: '/visual/nyt',
  id: 'nyt',
  description: 'Creative Direction, Dev Team Management, UX & UI Design, Data Visualization',
  header: (
    <P large>
      In the fall of 2006, I was part of a small team at Wall Street on Demand that pitched The New York Times on a replacement for their MarketWatch-powered (meaning competitor-powered) financial markets research portal. We continued to meet with the client periodically for about a year before work started in earnest.
    </P>
  ),
  theme: ThemeContext.NYT,
  body: {
    special: (
      <Block name="THe New York Times" layout={Layouts.Left}>
        <ProjectImage src="/nyt/card.png" alt="" />
        <P>
          While our pitch work had been valuable in demonstrating our abilities from a cold start, we needed to start all over again once things were officially underway. This included meetings on-site with news editors, graphics editors, and web designers. We learned the ins-and-outs of their archaic publishing system (since replaced with WordPress) so that we could better understand how their web content producers’ work flowed throughout the day and night.
        </P>
      </Block>
    ),
    blocks: [
      {
        layout: Layouts.Right,
        image: '/nyt/nyt2.png',
        children: (
          <P>
            We learned the intricacies of their standards for web design, content design, and print-based financial visualization, and weaved them together into a new set of rules. Since few of these disciplines had been integrated by the Times themselves, we had to work with them to forge a hybrid model of displaying financial information on the web that felt at home within their sprawling, ever-changing site.
          </P>
        )
      },
      {
        layout: Layouts.Left,
        image: '/nyt/nyt3.png',
        children: (
          <P>
            As our main work would take over a complete CNAME subdomain of their site, our developers needed to build a new platform on our end that perfectly mimicked the look and feel of the actual nytimes.com. I worked hand-in-hand with the development team to build both HTML and Flash-based tools (hey it was 2008) for users to investigate market data. We also worked closely with the client’s developers to create ways in which our content could show up within the main news stories.
          </P>
        )
      },
      {
        layout: Layouts.Right,
        image: '/nyt/nyt4.png',
        children: (
          <P>
            In 2006, when we first pitched the client, I had been with the company a year, and was still a relatively new member of the design team, taking much direction from the Creative Director. By late 2007, when we started work from scratch, I was an Associate Creative Director myself, and oversaw 60-70% of the design and front-end engineering work, managing a range of 2-3 designers at a time. Our Creative Director oversaw the broad scope of work but many day-to-day management tasks were handled by me.
          </P>
        )
      },
    ]
  }
}