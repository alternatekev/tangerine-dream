import ReactPlayer from 'react-player'
import OpenInNewIcon from 'mdi-react/OpenInNewIcon'
import Link from 'next/link'

import {PortfolioItem, Layouts} from '@alt/types'
import {PageProps} from '@alt/templates'
import {Medium, P, Card, List, ListItem, Button} from '@alt/components'
import {ProjectImage} from '@alt/components/ProjectImage'
import {ThemeContext, css, styles} from '@alt/styles'
import {Block} from '@alt/views/Block'

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
  {
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
      special: (<>
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
          children: (
            <P>
              We used an iterative, design sprint-based approach that included customers, clients, success managers, board members, and executives. This all-inclusive approach led to the product improving by leaps and bounds in short amounts of time, with ideas we knew were already vetted with users.
            </P>
          )
        },
        {
          image: '/cf/cf2.png',
          children: (
            <P>
              I began my work with CF by asking questions, and iterating on Next.js-based prototypes complete with animation, beautfiul custom components, and an extensible architecture that worked as a bridge between quick prototyping and prodution-ready code.
            </P>
          )
        },
        {
          image: '/cf/cf3.png',
          layout: Layouts.Left,
          children: (
            <P>
              Using a modified Agile methodology, with an ad-hoc mixture of scrum, dailies, plannings sessions and spikes, we delivered a beautiful experience to delighted users, who often found that the extensive training needed to onboard for the first version of the prdouct, was now simply unnecesary.
            </P>
          )
        }
      ]
    }
  },
  {
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
  },
  {
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
        <Block layout={Layouts.Left}>
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
  },
  {
    title: 'Agile Central / Catchfly',
    remoteUrl: 'https://hippogriff.herokuapp.com',
    subhead: 'REACT, TYPESCRIPT, CREATIVE DIRECTION, UI / UX DESIGN',
    logo: '/ca/logo.png',
    image: '/ca/card.png',
    url: '/visual/ca',
    id: 'ca',
    description: 'Design System Architecture & Build, Creative Direction',
    header: (
      <P large>
        Rally Software was a company providing Jira-like Agile tools, which got purchased by CA in 2015. As part of a broader initiative to modernize CA's software offerings, Project Catchfly was spun up as a startup within the large corporation.
      </P>
    ),
    theme: ThemeContext.CA,
    body: {
      special: (
        <Card divider middleStacked megaWeighted borderless inflated>
          <ProjectImage alt="" src="/ca/card.png" />
          <P>
            Within the first two days on Project Catchfly, I had outlined the problem the team was trying to solve – something they had tried to use Lean Startup methodology to define – and had provided the first real mockup of their app they'd ever seen.
            </P>
        </Card>
      ),
      blocks: [
        {
          layout: Layouts.Left,
          image: '/ca/ca2.png',
          children: (
            <P>
              We quickly iterated through approaches to find the right solution. We held design sprint sessions, big-room planning sessons, and worked with a team in North Carolina building the mobile version of the app.
            </P>
          )
        },
        {
          image: '/ca/ca3.png',
          children: (
            <P>
              I spent a lot of time taking Material UI (a Material Design component library implemented in React), and customizing it for our needs. This was also my first introduction to TypeScript.
            </P>
          )
        },
        {
          layout: Layouts.Left,
          image: '/nyt/ca4.png',
          children: (
            <P>
              When the business needed me to step out of the codebase and into Sketch in order to iterate even faster on projections 1.5 years into the future, I re-built our component system as graphical assets in Sketch.
            </P>
          )
        },
        {
          layout: Layouts.Equal,
          image: '/nyt/ca5.png',
          children: (
            <P compact>
              When Project Catchfly was cancelled 9 months afer I started, I quickly pivoted to providing prototyping for the Agile Central (Rally) design team. Within a week, I had a custom component library rendering a Kanban board, that the designers were taking screenshots of to send to their developers as the final design.
            </P>
          )
        },
      ]
    }
  },
  {
    title: 'Down Periscope',
    remoteUrl: 'https://houstonperiscope.com',
    subhead: 'DONALD LIPSKI & ELMENDORF/GEURTS',
    logo: 'https://www.houstonperiscope.com/static/img/partners/eg.svg',
    image: '/dp/card.png',
    url: '/visual/dp',
    id: 'dp',
    description: 'Real-Time Node.js Server Architecture, React Components',
    header: (
      <>
        <P large>
          Donald Lipski had designed and contracted to have built a very cool art project in Houston, Texas, that allows visitors to <a href="https://houstonperiscope.com">the Buffalo Bayou Park to peer down into the century-old cistern located underneath</a>. Website users would also be able to control the periscope itself.
        </P>
        <P large>The problem was it didn't work. That's where <a href="https://elmendorfgeurts.com">Elmendorf/Geurts</a> and I came in.</P>
      </>
    ),
    theme: ThemeContext.DP,
    body: {
      blocks: [
        {
          layout: Layouts.Left,
          image: '/dp/card.png',
          children: (
            <P>
              While Ryan tore down the hardware and rebuilt it from scratch, including a completely custom web server, I got to work on the client side.
            </P>
          )
        },
        {
          layout: Layouts.Right,
          image: '/dp/dp1.png',
          children: (
            <P>
              While this screenshot doesn't do the application justice (the applcation is down due to COVID-19 restrictions), you can see that we built a way to control a camera in 360-degree space as well as zoom in/zoom out. We even added a light switch. The Node server solution I built uses WebSockets to manage permission between multiple conccurrent web users, as well as on-site.
            </P>
          )
        }
      ]
    }
  },
  {
    title: 'Rule Gallery',
    remoteUrl: '"https://rulegallery.com',
    subhead: 'WORDPRESS & REACT / WOOCOMMERCE',
    logo: '/rl/logo.png',
    image: '/rl/card.png',
    url: '/visual/rl',
    id: 'rl',
    description: 'WordPress & WooCommerce Design & Build, React Components',
    header: (
      <P large>
        Rule is one of Denver's premier art galleries, representing some of the most talked-about names in both Denver and Marfa, Texas.
      </P>
    ),
    theme: ThemeContext.NYT,
    body: {
      special: (
        <Card borderless middleStacked inflated>
          <ProjectImage src="/rl/card.png" alt="" />
          <P>
            Leveraging a sleek, minimalist feel, this website was a joy to work on, letting white space breathe, and giving the artwork space to speak for itself.
          </P>
        </Card>
      ),
      blocks: [
        {
          image: '/rl/rl1.png',
          layout: Layouts.Right,
          children: (
            <P>
              This site uses Advanced Custom Fields for custom post types, Timber for templating, and a statically-built React app for browsing art.
            </P>
          )
        },
        {
          image: '/rl/rl2.png',
          layout: Layouts.Equal,
          children: (
            <ProjectImage src="/rl/rl3.png" alt="" />
          )
        },
        {
          image: '/rl/rl4.png',
          layout: Layouts.Equal,
          children: (
            <P>
              Due to COVID-19 restrictions, the gallery cannot be open to the public. We quickly put together a WooCommerce site to get cash flowing to the artsists in need again.
            </P>
          ),
          action: (
            <Button icon={<OpenInNewIcon size={15} />} block compact tertiary alignCenter external href="https://shop.rulegallery.com">View the Shop</Button>
          )
        }
      ]
    }
  },
  {
    title: 'Elmendorf/Geurts',
    subhead: 'WORDPRESS & REACT / MUSIC COMPOSITION & CONSULTING',
    remoteUrl: 'http://www.elmendorfgeurts.com',
    logo: 'https://www.houstonperiscope.com/static/img/partners/eg.svg',
    image: '/eg/card.png',
    id: 'eg',
    url: '/visual/eg',
    description: 'Headless WordPress, React Components, Music Composition, Branding, Collateral',
    header: (
      <P large>
        Ryan Elmendorf and Nick Geurts are local subheads and engineers, who specialize in metalworking and large-scale interactive artwork. Think Burning Man, because that's their bread and butter.
      </P>
    ),
    theme: ThemeContext.EG,
    body: {
      blocks: [
        {
          image: '/eg/card.png',
          layout: Layouts.Right,
          children: (
            <P>
              While never having attending the Burn myself, I often find myself involved in their projects, from music composition for the openings of their own art pieces (Levitt Pavilion & Civic Center Park, Denver), or designing their logo and building out their web presence.
            </P>
          )
        },
        {
          image: '/eg/eg1.png',
          layout: Layouts.Left,
          children: (
            <P>
              Their site features a Next.js-powered front-end, with a WordPress/ACF-powered backend, using the WordPress JSON API to communicate.
            </P>
          )
        },
        {
          image: '/eg/eg2.png',
          layout: Layouts.Right,
          children: (
            <P>
              I've also worked on other work with them, including sound samples for Talking Parking Meters in Denver, Colorado as well as full React and Node developement for <Link href="/visual/dp"><a>the Down Periscope project in Houston, Texas.</a></Link>
            </P>
          )
        }
      ]
    }
  },
]
