import { P, } from '@alt/components'
import { ThemeContext} from '@alt/styles'
import { Layouts } from '@alt/types'
import Link from 'next/link'

export default {
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
          mobileImage: '/eg/mobile1.png',
          layout: Layouts.Right,
          children: (
            <P>
              While never having attending the Burn myself, I often find myself involved in their projects, from music composition for the openings of their own art pieces (Levitt Pavilion & Civic Center Park, Denver), or designing their logo and building out their web presence.
            </P>
          )
        },
        {
          image: '/eg/eg1.png',
          mobileImage: '/eg/mobile2.png',
          layout: Layouts.Left,
          children: (
            <P>
              Their site features a Next.js-powered front-end, with a WordPress/ACF-powered backend, using the WordPress JSON API to communicate.
            </P>
          )
        },
        {
          image: '/eg/eg2.png',
          mobileImage: '/eg/mobile3.png',
          layout: Layouts.Right,
          children: (
            <P>
              I've also worked on other work with them, including sound samples for Talking Parking Meters in Denver, Colorado as well as full React and Node developement for <Link href="/visual/dp"><a>the Down Periscope project in Houston, Texas.</a></Link>
            </P>
          )
        }
      ]
    }
  }